import React, { useState, useReducer } from 'react';
import './App.css';
import AnalogClock from './components/AnalogClock';


function App() {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>ساعت آنالوگ با React و useEffect</h2>
            <AnalogClock />
        </div>


    )

}



export default App