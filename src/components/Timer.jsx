import React, { useState, useEffect } from "react";

export default function Timer({ resetTimer }) {
    const [timer, setTimer] = useState(40);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else {
            resetTimer(); 
        }

        return () => clearInterval(interval);
    }, [timer]);
    useEffect(() => {
        setTimer(40);
    }, [resetTimer]);

    return (
        <div className="bg-Nude border-2 border-Misty rounded-full px-4 py-2 flex items-center justify-center">
            <p className="font-bold text-xl text-Cream">{timer}</p>
        </div>
    );
}
