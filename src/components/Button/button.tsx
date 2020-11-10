import React from 'react'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    button: (props: ButtonProps) => ({
        backgroundColor: props.primaryColour,
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        textTransform: 'uppercase',
        display: 'grid',
        position: 'relative',
        border: 'none',
        outline: 'none',
        borderRadius: '5%',
        color: props.fontColour ? props.fontColour : 'black',
        fontWeight: 'bold',
        '&:hover $span': {
            width: '100%',
        },
    }),
    span: (props: ButtonProps) => ({
        height: 4,
        width: '0%',
        backgroundColor: props.secondaryColour,
        position: 'absolute',
        bottom: 0,
        transition: 'width 0.5s'
    })
}))

export interface ButtonProps {
    /**
     * The button primary colour.
     */
    primaryColour: string

    /**
     * The button secondary colour.
     * Appears on hover.
     */
    secondaryColour: string

    /**
     * The button font colour.
     */
    fontColour?: string

    /**
     * The button label.
     */
    label: string

    /**
     * The button onClick action.
     */
    onClick: () => void
}

export default function Button(props: ButtonProps) {
    let classes = useStyles(props)
    return (
        <div>
            <button onClick={props.onClick} className={classes.button}>
                {props.label}
                <span className={classes.span} />
            </button>
        </div>
    )
}