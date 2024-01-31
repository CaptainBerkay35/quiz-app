import React, { useState, useEffect } from "react";

export default function Timer({ resetTimer }) {
    const [timer, setTimer] = useState(1000);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else {
            resetTimer(); // Süre dolduğunda resetTimer fonksiyonunu çağırarak yeni soruya geç.
        }

        return () => clearInterval(interval);
    }, [timer]);

    useEffect(() => {
        setTimer(1000);
    }, [resetTimer]);

    return (
        <div className="bg-Nude border-2 border-Misty rounded-full px-4 py-2 flex items-center justify-center">
            <p className="font-bold text-xl text-Cream">{timer}</p>
        </div>
    );
}
