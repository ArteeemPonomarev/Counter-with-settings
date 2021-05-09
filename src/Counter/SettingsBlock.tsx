import React from 'react';
import {Settings} from './Settings';
import {CounterActionType, setCurrentValue, setEditMode} from '../store/counter-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../store/store';


type SettingsBlockPropsType = {
    isIncorrectSettings: boolean
}

export const SettingsBlock: React.FC<SettingsBlockPropsType> = (props) => {

    const error = useSelector<AppStateType, string | null>(state => state.counter.error);
    const isSetMode = useSelector<AppStateType, boolean>(state => state.counter.isSetMode);
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue);

    const dispatch = useDispatch<Dispatch<CounterActionType>>();

    const setSettings = () => {
        dispatch(setCurrentValue(minValue));
        dispatch(setEditMode(false))
    };

    return (
        <div className="counter-block">
            <div className="display">
                <Settings
                    isIncorrectSettings={props.isIncorrectSettings}/>
            </div>
            <div className="buttons-block">
                <button className="button" onClick={setSettings} disabled={!isSetMode || !!error}>
                    set
                </button>
            </div>
        </div>
    );
};


