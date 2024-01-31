import React, { useState, useEffect } from "react";

export default function Timer({ resetTimer }) {
    const [timer, setTimer] = useState(5);

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
        setTimer(5);
    }, [resetTimer]);

    return (
        <div className="bg-black border-2-black rounded-full px-2 py-1 flex items-center justify-center">
            <p className="text-bold text-xl text-white">{timer}</p>
        </div>
    );
}
