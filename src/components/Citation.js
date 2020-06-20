import React, { useState } from 'react';


function handleClick(open, setOpen) {
    if (open===0) {
        setOpen(1)
    }
    else {
        setOpen(0)
    }
}

function OpenCitation(props) {
    if (props.open===0) {
        return (
            <div>

            </div>
        )
    }
    else {
        return (            
            <div className="citation">
                <br></br>
                Article Title<br></br>
                Black History Milestones: Timeline
                <br></br>
                Author<br></br>
                History.com Editors
                <br></br>
                Website Name<br></br>
                HISTORY
                <br></br>
                URL<br></br>
                <a style={{color:"white"}} href="https://www.history.com/topics/black-history/black-history-milestones">
                https://www.history.com/topics/black-history/black-history-milestones
                </a>
                <br></br>
                Access Date<br></br>
                June 15, 2020
                <br></br>
                Publisher<br></br>
                A&E Television Networks
                <br></br>
                Last Updated<br></br>
                June 6, 2020
                <br></br>
                Original Published Date<br></br>
                October 14, 2009
            </div>
        )
    }
}

const Citation = () => {
    const [open, setOpen] = useState(0)
    return (
        <div>
            <center>
                <label style={{ color: "white" }} onClick={() => handleClick(open, setOpen)}>Citation</label>
                <OpenCitation open={open} />
            </center>
        </div>
    );
}

export default Citation;