'use client'
import { useState } from 'react'

export default function App() {
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

  const toggleSalah = (name: string) => {
    setSalah((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const toggleGym = () => setGymDone(!gymDone);

  const startCoding = () => {
    setCodingActive(true);
    const timer = setInterval(() => {
      setCodingMinutes((prev) => {
        if (!codingActive) clearInterval(timer);
        return prev + 1;
      });
    }, 60000);
  };

  const stopCoding = () => {
    setCodingActive(false);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">🕌 Deen & Discipline</h1>

      <div className="p-4 border rounded space-y-2">
        <h2 className="text-xl font-semibold">Salah Tracker</h2>
        {Object.keys(salah).map((s) => (
          <div key={s} className="flex justify-between items-center">
            <span className="capitalize">{s}</span>
            <input type="checkbox" checked={salah[s]} onChange={() => toggleSalah(s)} />
          </div>
        ))}
      </div>

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

      <div className="p-4 border rounded space-y-2">
        <h2 className="text-xl font-semibold">🏋️ Gym</h2>
        <div className="flex justify-between items-center">
          <span>Did gym 9–10 PM?</span>
          <input type="checkbox" checked={gymDone} onChange={toggleGym} />
        </div>
      </div>
    </div>
  );
}
