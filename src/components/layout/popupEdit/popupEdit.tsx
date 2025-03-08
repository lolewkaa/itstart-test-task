import React from "react";
import styles from "./style.module.css";
import Popup from "../popup/popup.tsx";
import { SeminarType } from "../../../types/types.ts";
import Form from "../../form/Form.tsx";

type PropsPopupEdit = {
  // eslint-disable-next-line no-unused-vars
  setOpenPopupEdit: (arg: boolean) => void;
  message: string;
  isEditedSeminar: SeminarType;
};

const PopupEdit: React.FC<PropsPopupEdit> = ({ message, setOpenPopupEdit, isEditedSeminar }) => {
  return (
    <Popup onClose={() => setOpenPopupEdit(false)}>
      <h2 className={styles.popup__text}>{message}</h2>
      <Form setOpenPopupEdit={setOpenPopupEdit} seminar={isEditedSeminar} />
    </Popup>
  );
};

export default PopupEdit;
