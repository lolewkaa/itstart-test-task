import React from "react";
import styles from "./popup.module.css";

type PropsPopup = {
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

const Popup: React.FC<PropsPopup> = ({ onClose, children }) => (
  <div className={styles.popup__container}>
    <div className={styles.popup}>{children}</div>
    <div onClick={onClose} className={styles.popup__overlay}></div>
  </div>
);

export default Popup;
