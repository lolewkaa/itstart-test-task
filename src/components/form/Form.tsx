import { useState } from "react";
import { SeminarType } from "../../types/types";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import classes from "./style.module.css";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import { editSeminar } from "../../store/slices/seminarsSlice";
import { updateSeminarRepo } from "../../utils/api";

type PropsForm = {
    seminar: SeminarType;
    setOpenPopupEdit: (arg: boolean) => void;
  };
  

const Form: React.FC<PropsForm> = ({seminar, setOpenPopupEdit}) => {
  const dispatch = useAppDispatch();
  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split('.');
    return `${year}-${month}-${day}`; 
  };
  const [newSeminar, setNewSeminar] = useState({
    ...seminar,
    date: formatDate(seminar.date || ''), 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewSeminar({...newSeminar, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editSeminar(newSeminar))
    setOpenPopupEdit(false)
    updateSeminarRepo(newSeminar.id, newSeminar)
};
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.form__container}>
        <Input inputStyle={classes.form__input} labelStyle={classes.form__label} label="Введите новое название" value={newSeminar.title} name="title" type="text" handleChange={handleChange} />
        <Input inputStyle={classes.form__input} labelStyle={classes.form__label} label="Введите новое описание" value={newSeminar.description} name="description" type="text" handleChange={handleChange} />
        <Input inputStyle={classes.form__input} labelStyle={classes.form__label} label="Введите новую дату" value={newSeminar.date} name="date" type="date" handleChange={handleChange} />
        <Input inputStyle={classes.form__input} labelStyle={classes.form__label} label="Введите новое время" value={newSeminar.time} name="time" type="time" handleChange={handleChange} />
        <Input inputStyle={classes.form__input} labelStyle={classes.form__label} label="Вставьте новую ссылку" value={newSeminar.photo} name="photo" type="text" handleChange={handleChange} />
        </div>
        <Button buttonStyle={classes.form__btn} type="submit" text="Отправить" />
    </form>
    
  );
};

export default Form;