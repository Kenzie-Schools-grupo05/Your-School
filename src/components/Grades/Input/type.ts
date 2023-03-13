import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { iGradeForm } from "../schema";

interface iInput extends InputHTMLAttributes<HTMLInputElement> {
  name:
    | "mathB1"
    | "mathB2"
    | "mathB3"
    | "portB1"
    | "portB2"
    | "portB3"
    | "sciencesB1"
    | "sciencesB2"
    | "sciencesB3"
    | "historyB1"
    | "historyB2"
    | "historyB3"
    | "geographyB1"
    | "geographyB2"
    | "geographyB3"
    | "artB1"
    | "artB2"
    | "artB3"
    | "physicalEduB1"
    | "physicalEduB2"
    | "physicalEduB3";
  type: string;
  disabled: boolean;
  defaultValue: string;
  classStyle: string;
  register: UseFormRegister<iGradeForm>;
}

export default iInput