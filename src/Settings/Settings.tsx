import React, {ChangeEvent} from 'react';

type SettingsPropsType = {
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    minValue: number
    maxValue: number
    isIncorrectSettings: boolean
}

export const Settings:React.FC<SettingsPropsType> = (props) => {
    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+e.currentTarget.value)
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }


    const classForIncorrectSettings =  props.isIncorrectSettings ? 'incorrect-settings' : '';

    return(
        <div>
            <div>maxValue: <input type="number" onChange={changeMaxValue} value={props.maxValue} className={classForIncorrectSettings}/></div>
            <div>minValue: <input type="number" onChange={changeMinValue} value={props.minValue} className={classForIncorrectSettings}/></div>

        </div>
    )
}