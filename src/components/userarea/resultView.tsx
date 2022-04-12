import * as React from 'react'
import { GraphType } from '../../model/graphType'
import { SurveyEntryBasedComponentProps } from './userarea'
import { BarHolder } from './viewHolder/barViewHolder'
import { RadarHolder } from './viewHolder/radarViewHolder'

export const ResultView = (props: SurveyEntryBasedComponentProps): JSX.Element => {
    const [surveyEntry, setSurveyEntry] = React.useState(props.surveyEntry)
    // Keep prop synced. https://stackoverflow.com/a/54568167/8524651
    React.useEffect(() => { setSurveyEntry(props.surveyEntry) }, [props.surveyEntry])

    let CurrentComponent
    switch (surveyEntry.graphType) {
    case GraphType.BAR:
        CurrentComponent = new BarHolder(surveyEntry).bar
        break
    case GraphType.RADAR:
        CurrentComponent = new RadarHolder().radar
        break
    case GraphType.TEXT:
        CurrentComponent = new RadarHolder().radar
        break
    }

    return (
        <div style={{width: '900px', minHeight: '600px', position: 'absolute', top: '10%', left: 'calc(50% - 450px)', right: '50%' }}>
            <div style={{height: '600px'}}>
                {CurrentComponent}
            </div>
        </div>
    )
}

export default ResultView