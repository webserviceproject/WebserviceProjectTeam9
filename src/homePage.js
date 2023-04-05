import './App.css';
import mainlogo from './Images/mainLogo.jpeg'
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


function HomePage() {
    const history = useHistory();
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    
    useEffect(
        () => {
            let setTime = () => {
                console.log("setTime is called");
                setCurrentDateTime(new Date());
            }
            let interval = setInterval(setTime, 1000);
            return () => {
                clearInterval(interval);
            }
        },
        []
    );

    return (
        <div className="home" >
            <div style={{ height: "624px", position: "relative" }}>
                <div style={{ transform: 'translatey(300px)' }}>
                    <div className='Line1'> <h1>This is the Evergreen Destination</h1></div>
                    <div className='Line2'> <h1>For Players Match Making</h1></div>
                    <p style={{ color: "red" }}><i><b>The current time is {currentDateTime.toString()}</b></i></p>
                    <div className='Button'>  <button onClick={handleClick}>Let's Begin</button></div>
                </div>
                <div className="image" style={{ backgroundImage: `url(${mainlogo})` }}></div>

            </div>
        </div>

    )

    function handleClick() {
        history.push(
            {
                pathname: "/start"
            });
    }




}
export default HomePage;
