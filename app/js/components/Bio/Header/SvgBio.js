import React from 'react';

export default class SvgBio extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMin meet">
        <polygon className="icon-stroke" fill="none" stroke="#000000" strokeWidth="11" strokeMiterlimit="10" points="372.931,299.532 200.537,399.064
          28.143,299.532 28.143,100.468 200.537,0.937 372.931,100.469 "/>
        <path className="icon" d="M198.119,112.154c4.782,0,8.892-1.716,12.324-5.148c3.433-3.433,5.149-7.489,5.149-12.168
          c0-4.783-1.771-8.943-5.306-12.481c-3.536-3.535-7.644-5.304-12.324-5.304c-4.578,0-8.634,1.77-12.169,5.304
          c-3.537,3.538-5.304,7.645-5.304,12.324c0,4.681,1.74,8.764,5.226,12.247C189.2,110.414,193.333,112.154,198.119,112.154z"/>
        <path className="icon" d="M227.137,298.741c-3.643,0-6.658-1.039-9.049-3.12c-1.665-1.456-2.495-3.9-2.495-7.333V162.545l-58.192,1.716v11.7h12.013
          c6.552,0,11.491,1.482,14.821,4.447c3.327,2.964,4.992,7.359,4.992,13.183v92.044c0,4.267-1.068,7.516-3.198,9.75
          c-2.133,2.238-5.487,3.355-10.063,3.355h-15.444v11.7h83.152v-11.7H227.137z"/>
      </svg>
    )
  }
}
