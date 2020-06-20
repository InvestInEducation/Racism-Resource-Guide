import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from '../data.json'

function changeExpand(curIndex, prevState, setExpandStatus, cleanState) {
    if (prevState[curIndex] === 0) {
        setExpandStatus({ ...cleanState, [curIndex]: 1 })
    }
    else {
        setExpandStatus({ ...cleanState, [curIndex]: 0 })
    }

}


function TimelineElements(props) {
    let elementList = []
    const expanded = props.expanded

    for (const dataPoint in data) {
        elementList.push(
            (expanded[dataPoint] === 0) ?
                <VerticalTimelineElement onTimelineElementClick={() => props.changeExpand(dataPoint, expanded, props.setExpandStatus, props.stateObject)}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                    date={data[dataPoint].date}
                    iconClassName="timeline-icon-size"
                    dateClassName="bigdate"
                    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">{data[dataPoint].title}</h3>
                </VerticalTimelineElement>
                :
                <VerticalTimelineElement onTimelineElementClick={() => props.changeExpand(dataPoint, expanded, props.setExpandStatus, props.stateObject)}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                    date={data[dataPoint].date}
                    iconClassName="timeline-icon-size"
                    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">{data[dataPoint].title}</h3>
                    <p>
                        {data[dataPoint].description}
                    </p>
                </VerticalTimelineElement>
        )
    }
    return elementList
}

function initializeState() {
    let stateObject = {}
    for (const dataPoint in data) {
        stateObject[dataPoint] = 0
    }
    return stateObject
}

const Timeline = () => {
    const stateObject = initializeState()
    const [expanded, setExpandStatus] = useState(stateObject)
    
    return (
        <div>
            <VerticalTimeline>
                <TimelineElements expanded={expanded} changeExpand={changeExpand} stateObject={stateObject} setExpandStatus={setExpandStatus} />
                <VerticalTimelineElement
                    iconClassName="timeline-icon-size"
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                />
            </VerticalTimeline>

        </div>
    );
}

export default Timeline;
