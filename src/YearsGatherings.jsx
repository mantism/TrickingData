import React, {Component} from 'react';
import ScatterPlot from './ScatterPlot';

class YearsVsGatherings extends Component {
  render() {
    
    const classNames = 'ScatterPlotSection ' + this.props.class;
    return (
      <div className={classNames}>
        <h3> # of Years Tricking vs # of Gatherings Attended </h3>
        <ScatterPlot data={this.props.data} class={this.props.class}/>
      </div>
    )
  }
}

export default YearsVsGatherings;