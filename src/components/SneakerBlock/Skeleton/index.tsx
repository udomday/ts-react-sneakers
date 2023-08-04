import React from "react";

import styles from "./Skeleton.module.scss";

export const Skeleton: React.FC = () => {
  return (
    <div className={styles.root}>
      <span>
        <div style={{ width: "180px", minHeight: "91px" }}></div>
      </span>
      <span className={styles.root__body}>
        <div style={{ width: "180px", minHeight: "15px" }}></div>
        <div style={{ width: "93px", minHeight: "15px" }}></div>
      </span>
      <span className={styles.root__bottom}>
        <div style={{ width: "80px", minHeight: "24px" }}></div>
        <div style={{ width: "32px", minHeight: "32px" }}></div>
      </span>
    </div>
  );
};
