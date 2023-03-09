import { AxiosError } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { iLoginFormValues } from "../components/FormLogin/type";
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
    id: number;
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
    studentGrade: iUser;
    schoolGrades: (studentId: number) => Promise<void>;
    submit: SubmitHandler<iLoginFormValues>;
}

interface iClassRoom {
    class: string;
    grade: iGrade;
    schoolGrades: (studentId: number) => Promise<void>;
    studentGrade: iUser;
    // setStudentGrade: React.Dispatch<React.SetStateAction<iUser>|[]>
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProvider) => {
    const [user, setUser] = useState<iUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [childs, setChilds] = useState<iUser[] | null | undefined>(null);
    const [classRoom, setClassRoom] = useState<iClassRoom[] | null | undefined>(
        null
    );

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        return navigate("/");
    };

    const listClassRooms = async () => {
        const teacherToken =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByb2Zlc3NvckBtYWlsLmNvbSIsImlhdCI6MTY3ODE3MTc0OCwiZXhwIjoxNjc4MTc1MzQ4LCJzdWIiOiIzIn0.WSVJ8DhNH3Gyx-tIjqeWBiwCOyobrgE8SZOpVqdb2FA";

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

    const [studentGrade, setStudentGrade] = useState<iUser>({} as iUser);

    async function schoolGrades(studentId: number) {
        const tokenLS =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjc4MzE2OTUyLCJleHAiOjE2NzgzMjA1NTIsInN1YiI6IjEifQ.eRwpHIAA5cBMSSnKYkbe6u6ErOoxhSWzOQLIpunIBFk";

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
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
