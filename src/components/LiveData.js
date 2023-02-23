import React from "react";

import styles from "../css/Live.module.css";

const LiveData = ({ updating }) => {
  return (
    <div className={styles.live}>
      <div className={styles.live_top}>
        <div className={styles.live_top_pulse} />
        <span className={styles.live_top_span}>
          Live (Data updated in every 30 seconds)
        </span>
      </div>
      <div className={styles.live_top}>
        {updating && <span className={styles.live_top_span}>Updating...</span>}
      </div>
    </div>
  );
};

export default LiveData;
