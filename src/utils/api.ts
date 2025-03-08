import axios from "axios";
import { SeminarType } from "../types/types";

//получаем данные
export const fetchSeminarsRepos = async (): Promise<SeminarType[]> => {
  const url = `http://localhost:3000/seminars`;
  const response = await axios.get(url)
  return response.data;
};

//удаляем данные
export const deleteSeminarRepo = async (seminarId: string | number): Promise<void> => {
    const url = `http://localhost:3000/seminars/${seminarId}`;
    
    try {
      await axios.delete(url);
    } catch (error) {
      console.error(`Ошибка при удалении семинара с ID ${seminarId}:`, error);
    }
  };

  //обновляем данные
  export const updateSeminarRepo = async (seminarId: string | number, updatedData: object): Promise<void> => {
    const url = `http://localhost:3000/seminars/${seminarId}`;

    try {
        await axios.put(url, updatedData);
    } catch (error) {
        console.error(`Ошибка при обновлении семинара с ID ${seminarId}:`, error);
    }
};