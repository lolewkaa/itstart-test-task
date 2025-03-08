import React from "react";
import styles from "./style.module.css";
import Popup from "../popup/popup.tsx";
import Button from "../../../ui/Button/Button.tsx";

type PropsPopupDelete = {
  // eslint-disable-next-line no-unused-vars
  setOpenPopupDelete: (arg: boolean) => void;
  message: string;
  handleDeleteSeminar: () => void;
};

const PopupDelete: React.FC<PropsPopupDelete> = ({
  message,
  setOpenPopupDelete,
  handleDeleteSeminar,
}) => {

  return (
    <Popup onClose={() => setOpenPopupDelete(false)}>
      <h2 className={styles.popup__text}>{message}</h2>
      <div className={styles.popup__box}>
      <Button
        clickButton={handleDeleteSeminar}
        buttonStyle={styles.popup__close}
        text="Да"
      />
      <Button
        clickButton={() => setOpenPopupDelete(false)}
        buttonStyle={styles.popup__close}
        text="Отмена"
      />
      </div>
    </Popup>
  );
};

export default PopupDelete;