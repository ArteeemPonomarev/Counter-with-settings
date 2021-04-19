import React, {useState} from 'react';
import {Settings} from '../Settings/Settings';
import {Button} from '../Button/Button';

export function Counter () {

    const [currentValue, setCurrentValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(1);
    const [minValue, setMinValue] = useState<number>(0);
    const [isSetMode, changeSetMode] = useState<boolean>(true);

    const incrementCurrentValue = () => {
        setCurrentValue(currentValue + 1)
    }

    const resetCurrentValue = () => {
        setCurrentValue(minValue)
    }

    const setSettings = () => {
        setCurrentValue(minValue)
        changeSetMode(!isSetMode)
    }

    const isIncDisable = currentValue >= maxValue;

    const setMinVal = (value: number) => {setMinValue(value)};
    const setMaxVal = (value: number) => {setMaxValue(value)};

    const classForStopCounting = isIncDisable ? 'display__value stop-counting' : 'display__value';
    const isInCorrectSettings = minValue >= maxValue || minValue < 0 || maxValue <= 0;
    return (
        <div className="counter-block">
            <div className="display">
                {
                    isSetMode
                        ? <Settings
                            setMinValue={setMinVal}
                            setMaxValue={setMaxVal}
                            maxValue={maxValue}
                            minValue={minValue}
                            isIncorrectSettings={isInCorrectSettings}/>
                    : <div className={classForStopCounting}>
                    {currentValue}
                    </div>
                }
            </div>
            <div className="buttons-block">
                <Button className="button" onClick={incrementCurrentValue} disabled={isIncDisable || isSetMode}>
                    inc
                </Button>
                <Button className="button" onClick={resetCurrentValue} disabled={isSetMode}>
                    reset
                </Button>
                <Button className="button" onClick={setSettings} disabled={isInCorrectSettings}>
                    set
                </Button>

            </div>
        </div>
    )
}