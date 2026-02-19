import React, { useState, useEffect } from 'react';

const AnalogClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    // Logic for rotation
    const secDegrees = (seconds / 60) * 360;
    const minDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hourDegrees = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30);
    console.log("hourDegrees: ",hourDegrees);
    

    // Format Digital Time (Adding leading zeros)
    const digitalTime = time.toLocaleTimeString('en-GB'); // Formats to HH:MM:SS

    const handStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transformOrigin: 'bottom center',
        transition: seconds === 0 ? 'none' : 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px' }}>
            
            {/* Analog Clock Container */}
            <div style={{
                position: 'relative',
                width: '300px',
                height: '300px',
                backgroundImage: 'url("./images/clock-02.png")',
                backgroundSize: 'cover',
                borderRadius: '50%',
                boxShadow: '0 0 20px rgba(0,0,0,0.2)'
            }}>

                {/* Hour Hand */}
                <img
                    src="./images/houre.png"
                    alt="hour"
                    style={{
                        ...handStyle,
                        transform: `translate(-50%, -100%) rotate(${hourDegrees}deg)`,
                        height: '50px', // Adjusted to be visible
                        zIndex: 3
                    }}
                />

                {/* Minute Hand */}
                <img
                    src="./images/minute.png"
                    alt="minute"
                    style={{
                        ...handStyle,
                        transform: `translate(-50%, -100%) rotate(${minDegrees}deg)`,
                        height: '100px',
                        zIndex: 4
                    }}
                />

                {/* Second Hand */}
                <img
                    src="./images/second.png"
                    alt="second"
                    style={{
                        ...handStyle,
                        transform: `translate(-50%, -100%) rotate(${secDegrees}deg)`,
                        height: '110px',
                        zIndex: 5
                    }}
                />

                {/* Center Pin */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '12px', height: '12px',
                    backgroundColor: '#000', borderRadius: '50%',
                    zIndex: 6,
                    border: '2px solid white'
                }}></div>
            </div>

            {/* Digital Clock Display */}
            <div style={{
                marginTop: '30px',
                padding: '10px 20px',
                backgroundColor: '#333',
                color: '#fff',
                borderRadius: '8px',
                fontSize: '24px',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                letterSpacing: '2px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
            }}>
                {digitalTime}
            </div>
        </div>
    );
};

export default AnalogClock;