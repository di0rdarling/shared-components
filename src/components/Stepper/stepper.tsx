import React from 'react';
import { makeStyles } from '@material-ui/core';
import { palette } from '../../palette';

const useStyles = makeStyles({
    stepper: {
        height: 5,
        width: '100%',
        backgroundColor: palette.lightBlue,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stageWrapper: {
        marginTop: -8
    },
    stage: {
        height: 10,
        width: 10,
        backgroundColor: palette.blue,
        borderRadius: '50%',
    },
    stageLarge: {
        height: 20,
        width: 20,
        backgroundColor: palette.blue,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    current: {
        height: 8,
        width: 8,
        backgroundColor: 'white',
        borderRadius: '50%'
    },
    checked: {
        fontSize: 16,
        fill: 'white'
    },
    label: {
        position: 'absolute',
        top: 12,
        left: -10,
        whiteSpace: 'nowrap'
    }
})

export interface StepperStage {
    label: string,
    status: 'completed' | 'uncompleted' | 'current'
}

export interface StepperProps {
    stages: StepperStage[]
}


export default function Stepper(props: StepperProps) {

    let classes = useStyles();

    return (
        <div className={classes.stepper}>
            {props.stages.map(stage => (
                <div style={{
                    position: 'relative'
                }}>
                    <div className={stage.status === 'uncompleted' ? classes.stage : classes.stageLarge}>
                        {(stage.status === 'completed' &&
                            <svg height="12px" viewBox="0 -46 417.81333 417" width="12px" xmlns="http://www.w3.org/2000/svg">
                                <path fill='white' d="m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0" />
                            </svg>
                        ) ||
                            (stage.status === 'current' && <div className={classes.current} />)}
                    </div>
                    <div className={classes.label}>
                        <p>{stage.label}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}