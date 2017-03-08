import d3 from 'd3';

//private stored cache
let inputs = {
  fieldWidth: null,
  fieldHeight: null,
  numberOfStars: null,
  period: null,
  duration: null,
  svgClassName: "",
  starColorBright: "",
  starColorDark: "",
  starRadius: ""
};

let repeatBool = true;

//initialize star field
export function initialize(args){
    inputs.fieldWidth = args.fieldWidth;
    inputs.fieldHeight = args.fieldHeight;
    inputs.numberOfStars = args.numberOfStars;
    inputs.period = args.period;
    inputs.duration = args.duration;
    inputs.svgClassName = args.svgClassName;
    inputs.starColorBright = args.starColorBright;
    inputs.starColorDark = args.starColorDark;
    inputs.starRadius = args.starRadius;
}
export function startTwinkle(){
  repeatBool = true;
  d3.select(inputs.svgClassName)
      .selectAll("text")
      .data(d3.range(0, inputs.numberOfStars))
      .enter().append("circle")
      .attr("fill", inputs.starColorBright)
      .attr("r", inputs.starRadius)
    .transition()
      .ease("linear")
      .delay(function(d) { return d * inputs.period / inputs.numberOfStars; })
      .duration(inputs.duration)
      .each(animate);

  function animate() {
    let item = d3.select(this);
    (function repeat() {
      if(repeatBool){
        let yLoc = Math.floor(Math.random() * (inputs.fieldHeight+100)/100)*100;
        let xLoc;
        if(yLoc % 200 === 0){
            xLoc = Math.floor(Math.random() * (inputs.fieldWidth+100)/100)*100;
        }
        else {
            xLoc = Math.floor(Math.random() * (inputs.fieldWidth + 100)/100)*100+50;
        }

        let translate = "translate(" + xLoc + "," + yLoc + ")";

        item = item.transition()
            .each(function() {
                d3.select(this).attr("transform", translate + "scale(0)")
                .attr("fill", inputs.starColorDark);
            })
            .attr("transform", translate + "scale(1)")
            .attr("fill", inputs.starColorBright)
          .transition()
            .attr("transform", translate + "scale(0)")
            .attr("fill", inputs.starColorDark)
            .each("end", repeat);
      }
    })();
  }
}

export function stopTwinkle(){
  repeatBool = false;
}

function destroy(){
}
