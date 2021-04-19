import React from 'react';

type ButtonPropsType = {
    className: string
    children: string
    onClick: () => void
    disabled: boolean
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            className={props.className}>
            {props.children}
        </button>
    );
};


