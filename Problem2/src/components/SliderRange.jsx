import React, { useState, useEffect } from "react";
import styles from "./RangeSlider.module.scss";

const RangeSlider = () => {
  const max = 100;
  const min = 1;
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);

  useEffect(() => {
    updateProgress();
  }, [minValue, maxValue]);

  const updateProgress = () => {
    const range = max - min;
    const valueRange = maxValue - minValue;
    const width = (valueRange / range) * 100;
    const minOffset = ((minValue - 1) / range) * 100;

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
      onChange={(e) => setMinValue(Math.min(+e.target.value, maxValue))}
    />
    <input
      type="range"
      className={styles.maxInput}
      value={maxValue}
      min="1"
      max="100"
      onChange={(e) => setMaxValue(Math.max(+e.target.value, minValue))}
    />
    <div className={styles.slider}>
      <div className={styles.progress}></div>
    </div>
  </div>
  );
};

export default RangeSlider;
