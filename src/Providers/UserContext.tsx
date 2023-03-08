import { AxiosError } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface iUserProvider {
  children: ReactNode;
}

export interface iRequestError {
  error: string;
  response: iRequestErrorResponse | undefined;
}

export interface iRequestErrorResponse {
  data: string | undefined;
}

export interface iUser {
  type: string;
  email: string;
  password: string;
  name: string;
  age: number;
  cpf: string;
  cpfParent?: string;
  class?: string;
  grades?: iGrade;
}

export interface iGrade {
  mathematics: string[];
  portuguese: string[];
  sciences: string[];
  history: string[];
  geography: string[];
  art: string[];
  physicalEducation: string[];
}

interface iUserContext {
  getChildGrades: (cpfParent: string) => Promise<void>;
  user: iUser | null;
  setUser: (props: iUser) => void;
  childs: iUser[] | null | undefined;
  classRoom: iClassRoom[] | null | undefined;
  listClassRooms: () => Promise<void>;
}

interface iClassRoom {
  class: string;
  grade: iGrade;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProvider) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [childs, setChilds] = useState<iUser[] | null | undefined>(null);
  const [classRoom, setClassRoom] = useState<iClassRoom[] | null | undefined>(
    null
  );

  const handleLogout = () => {
    const navigate = useNavigate();
    localStorage.clear();
    return navigate("/");
  };

  const getChildGrades = async (cpfParent: string) => {
    // const tokenLS = localStorage.getItem('@TOKEN');
    // token abaixo somente para testes
    const tokenLS =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjc4MTI0NDY5LCJleHAiOjE2NzgxMjgwNjksInN1YiI6IjEifQ.SuHsZ-uZQztSHzFDHIdEPXPlQK0_uVdKxaw0oDTc9pg";
    try {
      const users = await api.get<iUser[]>(`/users?cpfParent=${cpfParent}`, {
        headers: {
          Authorization: `Bearer ${tokenLS}`,
        },
      });
      setChilds(users.data);
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>;
      console.log(currentError);
    }
  };

  const listClassRooms = async () => {
    const teacherToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByb2Zlc3NvckBtYWlsLmNvbSIsImlhdCI6MTY3ODIxOTQ3NywiZXhwIjoxNjc4MjIzMDc3LCJzdWIiOiIzIn0.1938W4cktDp4RuDme2gO3gLHVgfgB8Y2LczBqTgIUNI";

    try {
      const response = await api.get<iClassRoom[]>("/classes", {
        headers: {
          Authorization: `Bearer ${teacherToken}`,
        },
      });
      setClassRoom(response.data);
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>;
      console.log(currentError);
    }
  };



  return (
    <UserContext.Provider
      value={{
        getChildGrades,
        user,
        setUser,
        childs,
        classRoom,
        listClassRooms,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
