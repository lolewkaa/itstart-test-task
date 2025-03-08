import axios from "axios";
import { SeminarType } from "../types/types";

export const fetchSeminarsRepos = async (): Promise<SeminarType[]> => {
  // const url = `http://localhost:3000/seminars`;
  const url = `https://lolewkaa.github.io/itstart-test-task/db.json`
  const response = await axios.get(url)
  return response.data.seminars;
};

export const deleteSeminarRepo = async (seminarId: string | number): Promise<void> => {
    const url = `http://localhost:3000/seminars/${seminarId}`;
    
    try {
      await axios.delete(url);
    } catch (error) {
      console.error(`Ошибка при удалении семинара с ID ${seminarId}:`, error);
    }
  };

  export const updateSeminarRepo = async (seminarId: string | number, updatedData: object): Promise<void> => {
    const url = `http://localhost:3000/seminars/${seminarId}`;

    try {
        await axios.put(url, updatedData);
    } catch (error) {
        console.error(`Ошибка при обновлении семинара с ID ${seminarId}:`, error);
    }
};