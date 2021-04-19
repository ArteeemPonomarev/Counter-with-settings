import React from 'react';
import './App.css';
import {CounterSecond} from './Counter2/CounterSecond';
import {CounterFirst} from './Counter1/CounterFirst';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
            <CounterFirst/>
            {/*<CounterSecond/>*/}
            </div>
        </div>
    );
}

export default App;
