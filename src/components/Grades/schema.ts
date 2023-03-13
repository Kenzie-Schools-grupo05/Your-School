import * as yup from "yup";

export const schemaGrade = yup
  .object({
    mathB1: yup.number().required(),
    mathB2: yup.number().required(),
    mathB3: yup.number().required(),
    portB1: yup.number().required(),
    portB2: yup.number().required(),
    portB3: yup.number().required(),
    sciencesB1: yup.number().required(),
    sciencesB2: yup.number().required(),
    sciencesB3: yup.number().required(),
    historyB1: yup.number().required(),
    historyB2: yup.number().required(),
    historyB3: yup.number().required(),
    geographyB1: yup.number().required(),
    geographyB2: yup.number().required(),
    geographyB3: yup.number().required(),
    artB1: yup.number().required(),
    artB2: yup.number().required(),
    artB3: yup.number().required(),
    physicalEduB1: yup.number().required(),
    physicalEduB2: yup.number().required(),
    physicalEduB3: yup.number().required(),
  })
  .required();

export interface iGradeForm {
  mathB1: number;
  mathB2: number;
  mathB3: number;
  portB1: number;
  portB2: number;
  portB3: number;
  sciencesB1: number;
  sciencesB2: number;
  sciencesB3: number;
  historyB1: number;
  historyB2: number;
  historyB3: number;
  geographyB1: number;
  geographyB2: number;
  geographyB3: number;
  artB1: number;
  artB2: number;
  artB3: number;
  physicalEduB1: number;
  physicalEduB2: number;
  physicalEduB3: number;
}
