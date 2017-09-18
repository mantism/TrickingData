import React from 'react';
import Axis from './Axis';

const Axes = ({scales, margins, svgHeight, svgWidth}) => {
  const height = svgHeight;
  const width = svgWidth;

  const xProps = {
    orient: 'Bottom',
    scale: scales.xScale,
    translate: `translate(0, ${height - margins.bottom})`,
    tickSize: height - margins.top - margins.bottom,
  }

  const yProps = {
    orient: 'Left',
    scale: scales.yScale,
    translate: `translate(${margins.left}, 0)`,
    tickSize: width - margins.left - margins.right,
  }

  return (
    <g>
      <Axis {...xProps}/>
      <Axis {...yProps}/>
    </g>
  )
}

export default Axes;