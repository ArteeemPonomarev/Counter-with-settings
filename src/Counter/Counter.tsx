import React, {useState} from 'react';
import {Settings} from '../Settings/Settings';

export function Counter () {

    const [currentValue, setCurrentValue] = useState<number>(0);
    const [isSetMode, changeSetMode] = useState<boolean>(true);

    const incrementCurrentValue = () => {
        setCurrentValue(currentValue + 1)
    }

    const resetCurrentValue = () => {
        setCurrentValue(0)
    }

    const setSettings = () => {
        changeSetMode(!isSetMode)
    }

    const isIncDisable = currentValue >= 5;


    return (
        <div className="counter-block">
            <div className="display">
                {
                    isSetMode
                        ? <Settings/>
                    : <div className="display__value">
                    {currentValue}
                    </div>
                }
            </div>
            <div className="buttons-block">
                <button className="button" onClick={incrementCurrentValue} disabled={isIncDisable}>
                    inc
                </button>
                <button className="button" onClick={resetCurrentValue}>
                    reset
                </button>
                <button className="button" onClick={setSettings}>
                    set
                </button>

            </div>
        </div>
    )
}