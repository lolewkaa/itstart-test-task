import { useEffect, useState } from "react";
import classes from "./style.module.css";
import { useDispatch } from "react-redux";
import { deleteSeminar, getSeminars } from "../../store/slices/seminarsSlice";
import { useAppSelector } from "../../hooks/ReduxHooks";
import Seminar from "../../components/seminar/Seminar";
import { deleteSeminarRepo, fetchSeminarsRepos } from "../../utils/api";
import Preloader from "../../ui/Preloader/Preloader";
import { SeminarType } from "../../types/types";
import PopupDelete from "../../components/layout/popupDelete/popupDelete";
import PopupEdit from "../../components/layout/popupEdit/popupEdit";

const MainPage = () => {
  const dispatch = useDispatch();
  const seminars = useAppSelector((state) => state.seminars.value);
  const [isPreloaderActive, setIsPreloaderActive] = useState(false);
  const [openPopupDelete, setOpenPopupDelete] = useState(false);
  const [openPopupEdit, setOpenPopupEdit] = useState(false);
  const [isDeletedSeminar, setIsDeletedSeminar] = useState<SeminarType | null>(null);
  const [isEditedSeminar, setIsEditedSeminar] = useState<SeminarType | null>(null);

  useEffect(() => {
    setIsPreloaderActive(true);
    //имитация процесса загрузки данных
    const timer = setTimeout(async () => {
      try {
        const repos = await fetchSeminarsRepos();
        dispatch(getSeminars(repos));
      } catch (error) {
        if (error instanceof Error) {
          console.error("Ошибка:", error.message);
        } else {
          console.error("Неизвестная ошибка:", error);
        }
      } finally {
        setIsPreloaderActive(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDeleteSeminar = (item: SeminarType) => {
    //удаляем объект из стора
    dispatch(deleteSeminar(item.id));
    //удаляем объект с сервера
    deleteSeminarRepo(item.id);
    setOpenPopupDelete(false);
  };

  const openPopupWithWarning = (item: SeminarType) => {
    setOpenPopupDelete(true);
    setIsDeletedSeminar(item);
  };

  const openPopupWithEdit = (item: SeminarType) => {
    setOpenPopupEdit(true);
    setIsEditedSeminar(item);
  };

  return (
    <>
      <div className={classes.main}>
        <div className={classes.main__container}>
          {isPreloaderActive && <Preloader />}
          {seminars.map((el) => (
            <Seminar
              openPopupWithWarning={() => openPopupWithWarning(el)}
              openPopupEdit={() => openPopupWithEdit(el)}
              key={el.id}
              seminar={el}
            />
          ))}
        </div>
      </div>
      {openPopupDelete && isDeletedSeminar && (
        <PopupDelete
          handleDeleteSeminar={() => handleDeleteSeminar(isDeletedSeminar)}
          setOpenPopupDelete={setOpenPopupDelete}
          message="Вы уверены что хотите удалить семинар?"
        />
      )}
      {openPopupEdit && isEditedSeminar && <PopupEdit isEditedSeminar={isEditedSeminar} setOpenPopupEdit={setOpenPopupEdit} message="Отредактируйте нужную информацию" />}
    </>
  );
};

export default MainPage;
