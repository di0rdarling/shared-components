import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    bar: (props: ProgressBarProps) => ({
        width: '100%',
        height: 12,
        backgroundColor: props.primaryColour,
        padding: theme.spacing(0.6),
        borderRadius: 20
    }),
    progress: (props: ProgressBarProps) => ({
        backgroundColor: props.barColour || 'white',
        width: props.percentage === 0 ? '1%' : `${props.percentage}%`,
        maxWidth: '100%',
        height: '100%',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        padding: `0px 3px`,
        justifyContent: 'flex-end'
    }),
    markerPoint: (props: ProgressBarProps) => ({
        height: 8,
        width: 8,
        backgroundColor: props.primaryColour,
        borderRadius: '50%',
    }),
    markers: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))

export interface ProgressBarProps {
    percentage: number,
    primaryColour: string,
    barColour?: string
}

export default function ProgressBar(props: ProgressBarProps) {
    let classes = useStyles(props);

    return (
        <div>
            <div className={classes.bar}>
                <div className={classes.progress}>
                    <div className={classes.markerPoint} />
                </div>
            </div>
            <div className={classes.markers}>
                <p>0%</p>
                <p>100%</p>
            </div>
        </div>
    )
}