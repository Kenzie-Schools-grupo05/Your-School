import { AxiosError } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
<<<<<<< HEAD
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify/dist/core/toast";
=======
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLoginFormValues } from "../components/FormLogin/type";
>>>>>>> d2af81548ea43ad1ac81a45ee16a9f7b6c30984a
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
<<<<<<< HEAD
  type: string;
  email: string;
  password: string;
  name: string;
  age: number;
  cpf: string;
  cpfParent?: string;
  class?: string;
  grades?: iGrade;
=======
    type: string;
    email: string;
    password: string;
    name: string;
    age: number;
    cpf: string;
    cpfParent?: string;
    class?: string;
    grades?: iGrade;
    id: number;
>>>>>>> d2af81548ea43ad1ac81a45ee16a9f7b6c30984a
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
<<<<<<< HEAD
  getChildGrades: (cpfParent: string) => Promise<void>;
  user: iUser | null;
  setUser: (props: iUser) => void;
  childs: iUser[] | null | undefined;
  classRoom: iClassRoom[] | null | undefined;
  listClassRooms: () => Promise<void>;
  handleLogout: () => void;
}

interface iClassRoom {
  class: string;
  grade: iGrade;
=======
    getChildGrades: (cpfParent: string) => Promise<void>;
    user: iUser | null;
    setUser: (props: iUser) => void;
    childs: iUser[] | null | undefined;
    classRoom: iClassRoom[] | null | undefined;
    listClassRooms: () => Promise<void>;
    studentGrade: iUser;
    schoolGrades: (studentId: number) => Promise<void>;
    submit: SubmitHandler<iLoginFormValues>;
    submitRegister: SubmitHandler<iRegisterFormValues>;
    getClassStudents: () => Promise<void>;
    changeStudentGrade: (data: iGrade) => Promise<void>;
    addStudentToClass: (data: iClassRoom) => Promise<void>;
}

interface iClassRoom {
    class: string;
    grade: iGrade;
    schoolGrades: (studentId: number) => Promise<void>;
    studentGrade: iUser;
    // setStudentGrade: React.Dispatch<React.SetStateAction<iUser>|[]>
}

export interface iRegisterFormValues {
    email: string;
    password: string;
    confirmPassword: string;
    cpf: string;
    type: string;
>>>>>>> d2af81548ea43ad1ac81a45ee16a9f7b6c30984a
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProvider) => {
    const [user, setUser] = useState<iUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [childs, setChilds] = useState<iUser[] | null | undefined>(null);
    const [classRoom, setClassRoom] = useState<iClassRoom[] | null | undefined>(
        null
    );

<<<<<<< HEAD
  useEffect(() => {
    const autoLogin = () => {
      const navigate = useNavigate();
      const userToken = localStorage.getItem("@TOKEN");
      const userID = localStorage.getItem("@ID");

      if (userToken) {
        const userAuthorization = async () => {
          try {
            const response = await api.get<iUser>(`/users/${userID}`, {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            });
            setUser(response.data);
            navigate("/dashboard");
          } catch (error) {
            const currentError = error as AxiosError;
            console.log(currentError.response?.data);
          }
        };
        userAuthorization();
      }
    };
    autoLogin();
  }, []);

  const handleLogout: () => void = () => {
    const navigate: NavigateFunction = useNavigate();
    localStorage.clear();
    toast.success("Desconectado");
    return navigate("/");
  };
=======
    const navigate = useNavigate();
>>>>>>> d2af81548ea43ad1ac81a45ee16a9f7b6c30984a

    const handleLogout = () => {
        localStorage.clear();
        return navigate("/");
    };

    const getChildGrades = async (cpfParent: string) => {
        // const tokenLS = localStorage.getItem('@TOKEN');
        // token abaixo somente para testes
        const tokenLS =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjc4MzcyNTM1LCJleHAiOjE2NzgzNzYxMzUsInN1YiI6IjEifQ.Bk_PrFUEGummqWS4XjxpEds5zzNF9rMGpLDXTp6Hyj0";
        try {
            const users = await api.get<iUser[]>(
                `/users?cpfParent=${cpfParent}`,
                {
                    headers: {
                        Authorization: `Bearer ${tokenLS}`,
                    },
                }
            );
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

    const getClassStudents = async () => {
        const teacherToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByb2Zlc3NvckBtYWlsLmNvbSIsImlhdCI6MTY3ODM3NTAwNCwiZXhwIjoxNjc4Mzc4NjA0LCJzdWIiOiIzIn0.zOVJbyKovxbCl8C9uENfyQwbdRt6HOyXxs8kEBhzwyM";

        try {
            const response = await api.get<iUser[]>("/users?class=502", {
                headers: {
                    Authorization: `Bearer ${teacherToken}`,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    const changeStudentGrade = async (data: iGrade) => {
        const teacherToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByb2Zlc3NvckBtYWlsLmNvbSIsImlhdCI6MTY3ODM3NTAwNCwiZXhwIjoxNjc4Mzc4NjA0LCJzdWIiOiIzIn0.zOVJbyKovxbCl8C9uENfyQwbdRt6HOyXxs8kEBhzwyM";

        try {
            const response = await api.patch<iUser>("/users/1", data, {
                headers: {
                    Authorization: `Bearer ${teacherToken}`,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    const addStudentToClass = async (data: iClassRoom) => {
        const teacherToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByb2Zlc3NvckBtYWlsLmNvbSIsImlhdCI6MTY3ODM3NTAwNCwiZXhwIjoxNjc4Mzc4NjA0LCJzdWIiOiIzIn0.zOVJbyKovxbCl8C9uENfyQwbdRt6HOyXxs8kEBhzwyM";

        try {
            const response = await api.patch<iUser>("/users/1", data, {
                headers: {
                    Authorization: `Bearer ${teacherToken}`,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    const [studentGrade, setStudentGrade] = useState<iUser>({} as iUser);

    async function schoolGrades(studentId: number) {
        const tokenLS =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjc4MzcxOTkwLCJleHAiOjE2NzgzNzU1OTAsInN1YiI6IjEifQ.1sqClQSeGf4fnMPPtuwVNOJJRSd2hCx9_pSDsUosmOw";

        try {
            const response = await api.get<iUser>(`/users/${1}`, {
                headers: {
                    Authorization: `Bearer ${tokenLS}`,
                },
            });
            setStudentGrade(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const submit: SubmitHandler<iLoginFormValues> = async (data) => {
        try {
            const response = await api.post("login", data);
            localStorage.setItem("@TOKEN", response.data.accessToken);
            localStorage.setItem("@ID", response.data.user.id);
            setUser(response.data.user);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        } finally {
            navigate("/dashboard");
        }
    };

    const submitRegister: SubmitHandler<iRegisterFormValues> = async (data) => {
        try {
            const response = await api.post("register", data);
            localStorage.setItem("@TOKEN", response.data.accessToken);
            localStorage.setItem("@ID", response.data.user.id);
        } catch (error) {
            console.log(error);
        } finally {
            window.location.href = "/";
        }
    };

<<<<<<< HEAD
  return (
    <UserContext.Provider
      value={{
        getChildGrades,
        user,
        setUser,
        childs,
        classRoom,
        listClassRooms,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
=======
    return (
        <UserContext.Provider
            value={{
                getChildGrades,
                user,
                setUser,
                childs,
                schoolGrades,
                studentGrade,
                classRoom,
                listClassRooms,
                submit,
                getClassStudents,
                changeStudentGrade,
                addStudentToClass,
                submitRegister,
            }}
        >
            {children}
        </UserContext.Provider>
    );
>>>>>>> d2af81548ea43ad1ac81a45ee16a9f7b6c30984a
};
