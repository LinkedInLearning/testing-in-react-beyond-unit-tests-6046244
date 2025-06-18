import { useState } from 'react';

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  return (
    <button  aria-pressed={isOn}
    onClick={() => setIsOn((prev) => !prev)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}