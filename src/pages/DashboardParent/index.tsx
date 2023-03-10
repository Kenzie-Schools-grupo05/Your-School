import React, { useContext, useEffect, useState } from "react";
import { Grades } from "../../components/Grades";
import { GradeStudent } from "../../components/GradeStudent";
import { iUser, UserContext } from "../../Providers/UserContext";
import { StyledMain } from "./style";

export const DashboardParent = () => {
  const { user, setUser, childs, getChildGrades } = useContext(UserContext);

  const [childName, setChildName] = useState<string>("");
  const [selectedChild, setSelectedChild] = useState<iUser | null | undefined>(
    null
  );

  useEffect(() => {
    const getChilds = async () => {
      //await getChildGrades(user.cpf);
      await getChildGrades("99999999999");
    };
    getChilds();
  }, []);

  useEffect(() => {
    const childFind = childs?.find((child) => child.name === childName);
    setSelectedChild(childFind);
  }, [childName]);

  console.log(childs);

  return (
    <StyledMain>
      <section id="user__infos">
        <div>
          <h2>Olá, {user?.name}</h2>
          <p>Perfil de responsável</p>
        </div>
      </section>
      <section>
        <div id="selectContainer">
          <select
            onChange={(event) => setChildName(event.target.value)}
            value={childName}
          >
            <option value="">Selecione um filho(a)</option>
            {childs?.map((child) => (
              <option value={child.name} key={crypto.randomUUID()}>
                {child.name}
              </option>
            ))}
          </select>
        </div>
        {/* <div id="grades">
          <h2>Boletim</h2>
          <ul>
            <li>
              <span>Matéria</span>
              <span>1ª Bimestre</span>
              <span>2ª Bimestre</span>
              <span>3ª Bimestre</span>
              <span>4ª Bimestre</span>
            </li>
            <li>
              <span>Matemática</span>
              {selectedChild?.grades?.mathematics.map((grade) => (
                <span key={crypto.randomUUID()}>{grade}</span>
              ))}
            </li>
            <li>
              <span>Português</span>
              {selectedChild?.grades?.portuguese.map((grade) => (
                <span key={crypto.randomUUID()}>{grade}</span>
              ))}
            </li>
            <li>
              <span>História</span>
              {selectedChild?.grades?.history.map((grade) => (
                <span key={crypto.randomUUID()}>{grade}</span>
              ))}
            </li>
            <li>
              <span>Geografia</span>
              {selectedChild?.grades?.portuguese.map((grade) => (
                <span key={crypto.randomUUID()}>{grade}</span>
              ))}
            </li>
            <li>
              <span>Ciências</span>
              {selectedChild?.grades?.sciences.map((grade) => (
                <span key={crypto.randomUUID()}>{grade}</span>
              ))}
            </li>
            <li>
              <span>Artes</span>
              {selectedChild?.grades?.art.map((grade) => (
                <span key={crypto.randomUUID()}>{grade}</span>
              ))}
            </li>
            <li>
              <span>Educação Física</span>
              {selectedChild?.grades?.physicalEducation.map((grade) => (
                <span key={crypto.randomUUID()}>{grade}</span>
              ))}
            </li>
          </ul>
        </div> */}
        <Grades disabled={false} selectedChild={selectedChild} />
      </section>
    </StyledMain>
  );
};
