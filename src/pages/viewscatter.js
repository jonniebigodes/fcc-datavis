import React from 'react';
import Link from 'gatsby-link';
import ScatterChartContainer from '../components/Challenges/ScatterChartView/ScatterChartContainer';
const ScatterChartPage=()=>{

    return(
        <div>
            <ScatterChartContainer/>
            {/* <Link to="/">Go back to the homepage</Link> */}
        </div>
    );
};
export default ScatterChartPage;