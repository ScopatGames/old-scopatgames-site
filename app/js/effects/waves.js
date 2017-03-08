import d3 from 'd3';

//private stored cache
let inputs = {
    fieldWidth: null,
    fieldHeight: null,
    numberOfWaves: null,
    svgClassName: "",
    waterSvgUrl: "",
    waterStrokeColor: "",
    waterStrokeWidth: "",
    waterSpeed: null,
    waveHeight: null
};

export function initialize(args){
  inputs.fieldWidth = args.fieldWidth;
  inputs.fieldHeight = args.fieldHeight;
  inputs.numberOfWaves = args.numberOfWaves;
  inputs.svgClassName = args.svgClassName;
  inputs.waterSvgUrl = args.waterSvgUrl;
  inputs.waterStrokeColor = args.waterStrokeColor;
  inputs.waterStrokeWidth = args.waterStrokeWidth;
  inputs.waterSpeed = args.waterSpeed;
  inputs.waveHeight = args.waveHeight;
}

export function startWaves(){
  let random = d3.random.normal(0, inputs.waveHeight);

  function chart(domain, interpolation, tick) {
      let svg = d3.select(inputs.svgClassName);
      let data = d3.range(inputs.numberOfWaves).map(random);

      let x = d3.scale.linear()
          .domain(domain)
          .range([0, inputs.fieldWidth]);

      let y = d3.scale.linear()
          .domain([-1, 1])
          .range([inputs.fieldHeight*0.05, 0]);

      let area = d3.svg.area()
          .interpolate(interpolation)
          .x(function(d, i) { return x(i); })
          .y(function(d, i) { return y(d); })
          .y0(inputs.fieldHeight);

      let line = d3.svg.line()
          .interpolate(interpolation)
          .x(function(d, i) { return x(i); })
          .y(function(d, i) { return y(d); });

      let path = svg.append("path")
          .datum(data)
          .attr("fill", inputs.waterSvgUrl)
          .attr("d", area);

      let path2 = svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", inputs.waterStrokeColor)
          .attr("stroke-width", inputs.waterStrokeWidth)
          .attr("d", line);

      //tick(path, path2, area, line, data);
  }

  let transition = d3.select({}).transition()
      .duration(inputs.waterSpeed)
      .ease("linear");

  chart([0, inputs.numberOfWaves - 1], "basis", function tick(path, path2, area, line, data) {

      transition = transition.each(function() {
          data.push(random());
          data.shift();
          path.transition().attr("d", area);
          path2.transition().attr("d", line);
      }).transition().each("start", function() { tick(path, path2, area, line, data); });
  });
}

function destroy(){
}
