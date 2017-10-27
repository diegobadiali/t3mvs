import React from 'react';
var link = "https://www.movistar.com.ar/planDetails?plan=PlanOneFULLI"
class IframeInfoPlan extends React.Component {
  render() {
    return (
      <div>
        <iframe src={link} width="650" height="520"></iframe>
      </div>
    );
  }
};
export default IframeInfoPlan;
