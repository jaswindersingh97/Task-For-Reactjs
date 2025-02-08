import React, { useState, useEffect } from "react";
import styles from "./RangeSlider.module.scss";

const RangeSlider = ({
  type='continuous', //Type: Continuous | Discreet
  steps=10, //Number of steps for discreet range  
  max = 100,
  min = 0
}) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
console.log(minValue,maxValue)
  useEffect(() => {
    updateProgress();
  }, [minValue, maxValue]);

  const updateProgress = () => {
    const range = max - min;
    const valueRange = maxValue - minValue;
    const width = (valueRange / range) * 100;
    const minOffset = ((minValue - min) / range) * 100;

    document.documentElement.style.setProperty("--progress-width", `${width}%`);
    document.documentElement.style.setProperty("--progress-left", `${minOffset}%`);
  };
  return (
  <div className={styles.range}>
    <input
      type="range"
      className={styles.minInput}
      value={minValue}
      min={min}
      max={max}
      step={steps&&type==='discreet'?steps:1}
      onChange={(e) => setMinValue(Math.min(+e.target.value, maxValue))}
    />
    <input
      type="range"
      className={styles.maxInput}
      value={maxValue}
      min={min}
      max={max}
      step={steps&&type==='discreet'?steps:1}

      onChange={(e) => setMaxValue(Math.max(+e.target.value, minValue))}
    />
    <div className={styles.slider}>
      <div className={styles.progress}></div>
      {type === "discreet" && steps && (
         <div className={styles.sliderTrack}>
           {Array.from({ length: Math.floor((max - min) / steps) + 1 }, (_, i) => (
             <div key={i} onClick={(e)=>e.stopPropagation()} className={styles.sliderStep} />
           ))}
         </div>
       )}
    </div>
  </div>
  );
};

export default RangeSlider;
