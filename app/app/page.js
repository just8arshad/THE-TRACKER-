"use client";
import { useState } from "react";

export default function Home() {
  const [salah, setSalah] = useState({
    fajr: false,
    dhuhr: false,
    asr: false,
    maghrib: false,
    isha: false,
  });

  const [codingMinutes, setCodingMinutes] = useState(0);
  const [codingActive, setCodingActive] = useState(false);
  const [gymDone, setGymDone] = useState(false);

  const startCoding = () => {
    setCodingActive(true);
    const interval = setInterval(() => {
      setCodingMinutes((prev) => prev + 1);
    }, 60000); // 1 minute
    setTimeout(() => {
      clearInterval(interval);
      setCodingActive(false);
    }, 120 * 60000); // stop after 120 mins
  };

  const stopCoding = () => {
    setCodingActive(false);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">🕌 Deen & Discipline Tracker</h1>

      {/* Salah Tracker */}
      <div className="p-4 border rounded space-y-2">
        <h2 className="text-xl font-semibold">Salah Tracker</h2>
        {Object.keys(salah).map((s) => (
          <div key={s} className="flex justify-between items-center">
            <span className="capitalize">{s}</span>
            <input
              type="checkbox"
              checked={salah[s]}
              onChange={() =>
                setSalah((prev) => ({ ...prev, [s]: !prev[s] }))
              }
            />
          </div>
        ))}
      </div>

      {/* Coding Tracker */}
      <div className="p-4 border rounded space-y-4">
        <h2 className="text-xl font-semibold">💻 Coding Tracker</h2>
        <progress max="120" value={codingMinutes}></progress>
        <p>{codingMinutes} minutes coded today</p>
        {!codingActive ? (
          <button onClick={startCoding}>Start Coding</button>
        ) : (
          <button onClick={stopCoding}>Stop Coding</button>
        )}
      </div>

      {/* Gym Tracker */}
      <div className="p-4 border rounded space-y-2">
        <h2 className="text-xl font-semibold">🏋️ Gym Tracker</h2>
        <div className="flex justify-between items-center">
          <span>Did gym 9-10 PM?</span>
          <input
            type="checkbox"
            checked={gymDone}
            onChange={() => setGymDone(!gymDone)}
          />
        </div>
      </div>
    </div>
  );
}
