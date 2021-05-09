import React, {useEffect} from 'react';
import {CounterBlock} from './CounterBlock';
import {SettingsBlock} from './SettingsBlock';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../store/store';
import {Dispatch} from 'redux';
import {
    CounterActionType,
    setError
} from '../store/counter-reducer';


export const Counter = () => {
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue);

    const dispatch = useDispatch<Dispatch<CounterActionType>>();

    const isInCorrectSettings = minValue >= maxValue || minValue < 0 || maxValue <= 0;

    useEffect(() => {
        if (isInCorrectSettings) {
            dispatch(setError('Incorrect value!'))
        } else {
            dispatch(setError(null));
        }
    }, [minValue, maxValue])


    return (
        <div className="wrap">
            <div>
                <CounterBlock/>
            </div>
            <div>
                <SettingsBlock
                    isIncorrectSettings={isInCorrectSettings}/>
            </div>
        </div>
    );
};

