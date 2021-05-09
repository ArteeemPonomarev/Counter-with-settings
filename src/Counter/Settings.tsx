import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {CounterActionType, setEditMode, setMaxValue, setMinValue} from '../store/counter-reducer';
import {AppStateType} from '../store/store';

type SettingsPropsType = {
    isIncorrectSettings: boolean
}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue);

    const dispatch = useDispatch<Dispatch<CounterActionType>>()

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEditMode(true));
        dispatch(setMinValue(e.currentTarget.valueAsNumber));
    };

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEditMode(true));
        dispatch(setMaxValue(e.currentTarget.valueAsNumber));
    };

    const classForIncorrectSettings = props.isIncorrectSettings ? 'incorrect-settings input-value' : 'input-value';

    return (
        <div>
            <div className='input-field'>
                maxValue: <input type="number"
                                 onChange={changeMaxValue}
                                 value={maxValue}
                                 className={classForIncorrectSettings}/>
            </div>
            <div className='input-field'>
                startValue: <input type="number"
                                   onChange={changeMinValue}
                                   value={minValue}
                                   className={classForIncorrectSettings}/>
            </div>
        </div>
    )
}