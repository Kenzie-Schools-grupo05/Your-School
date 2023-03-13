import { AxiosError } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { iLoginFormValues } from "../components/FormLogin/type";
import { iGradeForm } from "../components/Grades/schema";
import { api } from "../services/api";
import { toast } from "react-toastify";

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
  id: number | undefined;
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

export interface iNewGrade {
  class: string;
  grades: iGrade;
}

export interface iNewStudent {
  id: number | undefined;
  name: string;
  grade: iNewGrade;
}

interface iUserContext {
  getChildGrades: (cpfParent: string | undefined) => Promise<void>;
  user: iUser | null;
  setUser: (props: iUser) => void;
  childs: iUser[] | null | undefined;
  classRoom: iClassRoom[] | null | undefined;
  listClassRooms: () => Promise<void>;
  schoolGrades: (studentId: number | undefined) => Promise<void>;
  studentGrade: iUser | null;
  showStudentGrade: (student: iUser) => void;
  submit: SubmitHandler<iLoginFormValues>;
  submitRegister: SubmitHandler<iRegisterFormValues>;
  getClassStudents: (classRoom: string) => Promise<void>;
  changeStudentGrade: (
    data: iGrade,
    id: number | undefined,
    classRoom: string
  ) => Promise<void>;
  addStudentToClass: (id: number | undefined, data: iNewGrade) => Promise<void>;
  handleLogout: () => void;
  loading: boolean;
  showClassesBtn: () => void;
  hideClassesBtn: () => void;
  showClasses: boolean;
  showStudents: boolean;
  students: iUser[] | null;
  submitChangeGrades: SubmitHandler<iGradeForm>;
  changedGrades: iGrade | null;
  getNoClassStudents: (classRoom: string) => Promise<void>;
  newStudents: iUser[] | null;
  newClass: iNewGrade;
  showNewStudents: boolean;
  deleteStudent: (id: number | undefined) => Promise<void>;
}

interface iClassRoom {
  class: string;
  grade: iGrade;
  schoolGrades: (studentId: number) => Promise<void>;
  studentGrade: iUser;
}

export interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  type: string;
  cpfParent: string;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iUserProvider) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [childs, setChilds] = useState<iUser[] | null | undefined>(null);
  const [classRoom, setClassRoom] = useState<iClassRoom[] | null | undefined>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [studentGrade, setStudentGrade] = useState<iUser | null>(null);
  const [showClasses, setShowClasses] = useState(false);
  const [students, setStudents] = useState<iUser[] | null>(null);
  const [showStudents, setShowStudents] = useState(false);
  const [changedGrades, setChangedGrades] = useState<iGrade | null>(null);
  const [newStudents, setNewStudents] = useState<iUser[] | null>(null);
  const [newClass, setNewClass] = useState<iNewGrade>({} as iNewGrade);
  const [showNewStudents, setShowNewStudents] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const autoLogin = () => {
      const userToken = localStorage.getItem("@TOKEN");
      const userID = localStorage.getItem("@ID");

      if (userToken) {
        const userAuthorization = async () => {
          try {
            setLoading(true);
            const response = await api.get<iUser>(`/users/${userID}`, {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            });
            setUser(response.data);
            navigate("/dashboard");
          } catch (error) {
            const currentError = error as AxiosError;
          } finally {
            setLoading(false);
          }
        };
        userAuthorization();
      }
    };
    autoLogin();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    return navigate("/");
  };

  const getChildGrades = async (cpfParent: string | undefined) => {
    const tokenLS = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
      const users = await api.get<iUser[]>(`/users?cpfParent=${cpfParent}`, {
        headers: {
          Authorization: `Bearer ${tokenLS}`,
        },
      });
      setChilds(users.data);
      toast.success("Estudante localizado com sucesso!");
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>;
      toast.error("Estudante não encontrado.");
    } finally {
      setLoading(false);
    }
  };

  const listClassRooms = async () => {
    const teacherToken = localStorage.getItem("@TOKEN");
    try {
      setLoading(true);
      const response = await api.get<iClassRoom[]>("/classes", {
        headers: {
          Authorization: `Bearer ${teacherToken}`,
        },
      });
      setClassRoom(response.data);
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>;
      toast.error("Erro ao carregar a requisição!");
    } finally {
      setLoading(false);
    }
  };

  const getClassStudents = async (classRoom: string) => {
    const teacherToken = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
      const response = await api.get<iUser[]>(`/users?class=${classRoom}`, {
        headers: {
          Authorization: `Bearer ${teacherToken}`,
        },
      });
      setStudents(response.data);
      setShowClasses(false);
      setShowStudents(true);
    } catch (error) {
      toast.error("Erro ao carregar a requisição!");
    } finally {
      setLoading(false);
    }
  };

  const changeStudentGrade = async (
    data: iGrade,
    id: number | undefined,
    classRoom: string
  ) => {
    const teacherToken = localStorage.getItem("@TOKEN");

    const newGrade: iNewGrade = {
      class: classRoom,
      grades: data,
    };

    try {
      setLoading(true);
      const response = await api.patch<iUser>(`/users/${id}`, newGrade, {
        headers: {
          Authorization: `Bearer ${teacherToken}`,
        },
      });
    
      setStudentGrade(response.data)
      toast.success("Nota alterada com sucesso!");
    } catch (error) {
      toast.error("Erro na alteração da nota!");
    } finally {
      setChangedGrades(null)
      setLoading(false);
    }
  };

  const addStudentToClass = async (id: number | undefined, data: iNewGrade) => {
    const teacherToken = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
      const response = await api.patch<iUser>(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${teacherToken}`,
        },
      });
      toast.success("Estudante adicionado com sucesso!");
    } catch (error) {
      toast.error("Erro ao adicionar aluno!");
    } finally {
      setLoading(false);
    }
  };

  const schoolGrades = async (studentId: number | undefined) => {
    const tokenLS = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
      const response = await api.get<iUser>(`/users/${studentId}`, {
        headers: {
          Authorization: `Bearer ${tokenLS}`,
        },
      });
      setStudentGrade(response.data);
    } catch (error) {
      toast.error("Erro ao carregar a requisição!");
    } finally {
      setLoading(false);
    }
  };

  const submit: SubmitHandler<iLoginFormValues> = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("login", data);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@ID", response.data.user.id);
      setUser(response.data.user);
      toast.success("Login feito com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Erro no login!");
    } finally {
      setLoading(false);
    }
  };

  const submitRegister: SubmitHandler<iRegisterFormValues> = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("register", data);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@ID", response.data.user.id);
      toast.success("Cadastro feito com sucesso!");
    } catch (error) {
      toast.error("Erro ao cadastrar");
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  const showClassesBtn = () => {
    setShowStudents(false);
    setShowClasses(true);
    setShowNewStudents(false);
    setStudentGrade(null);
  };
  const hideClassesBtn = () => {
    setShowClasses(false);
    setStudentGrade(null);
  };

  const showStudentGrade = (student: iUser) => {
    setStudentGrade(student);
    setShowClasses(false);
    setShowStudents(false);
  };

  const submitChangeGrades: SubmitHandler<iGradeForm> = (data) => {
    const newObj: iGrade = {
      mathematics: [
        data.mathB1.toString(),
        data.mathB2.toString(),
        data.mathB3.toString(),
      ],
      portuguese: [
        data.portB1.toString(),
        data.portB2.toString(),
        data.portB3.toString(),
      ],
      sciences: [
        data.sciencesB1.toString(),
        data.sciencesB2.toString(),
        data.sciencesB3.toString(),
      ],
      history: [
        data.historyB1.toString(),
        data.historyB2.toString(),
        data.historyB3.toString(),
      ],
      geography: [
        data.geographyB1.toString(),
        data.geographyB2.toString(),
        data.geographyB3.toString(),
      ],
      art: [
        data.artB1.toString(),
        data.artB2.toString(),
        data.artB3.toString(),
      ],
      physicalEducation: [
        data.physicalEduB1.toString(),
        data.physicalEduB2.toString(),
        data.physicalEduB3.toString(),
      ],
    };

    setChangedGrades(newObj);
  };

  const deleteStudent = async (id: number | undefined) => {
    const teacherToken = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
      const response = await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer: ${teacherToken}`
        }
      })
      toast.success("Estudante deletado com sucesso!");

    } catch (error) {
      console.error(error);
      toast.error("Erro ao deletar estudante!");

    }finally{
      setLoading(false);
    }
  }

  const getNoClassStudents = async (classRoom: string) => {
    const teacherToken = localStorage.getItem("@TOKEN");
    const defaultGrades: iNewGrade = {
      class: classRoom,
      grades: {
        mathematics: ["", "", ""],
        portuguese: ["", "", ""],
        sciences: ["", "", ""],
        history: ["", "", ""],
        geography: ["", "", ""],
        art: ["", "", ""],
        physicalEducation: ["", "", ""],
      },
    };

    try {
      const response = await api.get<iUser[]>("/users", {
        headers: {
          Authorization: `Bearer ${teacherToken}`,
        },
      });
      const filteredStudents = response.data.filter((user) => {
        return user.type === "student" && !user.class;
      });
      setNewStudents(filteredStudents);

      setShowNewStudents(true);
      setShowClasses(false);
      setNewClass(defaultGrades);
      toast.success("Estudante deletado com sucesso!");

    } catch (error) {
      console.error(error);
      toast.error("Nenhum estudante está sem turma!");

    }
  };

  

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
        handleLogout,
        showClassesBtn,
        hideClassesBtn,
        showClasses,
        showStudents,
        students,
        showStudentGrade,
        changedGrades,
        submitChangeGrades,
        getNoClassStudents,
        newClass,
        newStudents,
        showNewStudents,
        loading,
        deleteStudent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
