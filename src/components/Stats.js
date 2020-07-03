import React from 'react';

const Stats = () => {
    return (
        <div className="statpage">
            <div className="statpane">
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
                </svg>
                <p style={{color:"white", border:"1px white solid"}}>
                    Some text description about this statistic
                </p>
            </div>
            <div className="statpane">
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
                </svg>
            </div>
        </div>
    );
}

export default Stats;