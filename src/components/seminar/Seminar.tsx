import { SeminarType } from "../../types/types";
import Button from "../../ui/Button/Button";
import classes from "./style.module.css";

type PropsSeminar = {
  seminar: SeminarType;
  openPopupWithWarning: () => void;
  openPopupEdit: () => void;
};

const Seminar: React.FC<PropsSeminar> = ({
  seminar,
  openPopupWithWarning,
  openPopupEdit,
}) => {
  return (
    <div className={classes.seminar}>
      <div className={classes.seminar__box}>
        <p className={classes.seminar__title}>{seminar.title}</p>
        <p className={classes.seminar__text}>{seminar.description}</p>
        <p className={classes.seminar__text}>Дата: {seminar.date}</p>
        <p className={classes.seminar__text}>Время: {seminar.time}</p>
      </div>
      <div>
        <img className={classes.seminar__img} src={seminar.photo}></img>
        <div className={classes.seminar__buttons_box}>
          <Button
            buttonStyle={classes.seminar__button}
            clickButton={openPopupWithWarning}
            text="Удалить"
            type="button"
          />
          <Button
            buttonStyle={classes.seminar__button}
            clickButton={openPopupEdit}
            text="Редактировать"
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default Seminar;
