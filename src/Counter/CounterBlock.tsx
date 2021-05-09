import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../store/store';
import {Dispatch} from 'redux';
import {CounterActionType, setCurrentValue} from '../store/counter-reducer';


type CounterBlockPropsType = {}


export const CounterBlock: React.FC<CounterBlockPropsType> = (props) => {
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue);
    const currentValue = useSelector<AppStateType, number>(state => state.counter.currentValue);
    const error = useSelector<AppStateType, string | null>(state => state.counter.error);
    const isSetMode = useSelector<AppStateType, boolean>(state => state.counter.isSetMode);

    const dispatch = useDispatch<Dispatch<CounterActionType>>();


    const incrementCurrentValue = () => {
        dispatch(setCurrentValue(currentValue + 1))
    };


    const resetCurrentValue = () => {
        dispatch(setCurrentValue(minValue));
    };

    const displayMessage = error
        ? <div className={'error-message'}>{error}</div>
        : <div className={'display-message'}>enter values and press set</div>


    const isIncDisable = currentValue >= maxValue;
    const classForStopCounting = isIncDisable ? 'display__value stop-counting' : 'display__value';

    return (
        <div className="counter-block">
            <div className={`display `}>
                {
                    isSetMode
                        ? displayMessage
                        : <div className={classForStopCounting}>{currentValue}</div>

                }
            </div>

            <div className="buttons-block">
                <button className="button" onClick={incrementCurrentValue}
                        disabled={isIncDisable || isSetMode}>
                    inc
                </button>
                <button className="button" onClick={resetCurrentValue}
                        disabled={minValue === currentValue || isSetMode}>
                    reset
                </button>
            </div>
        </div>
    );
};


