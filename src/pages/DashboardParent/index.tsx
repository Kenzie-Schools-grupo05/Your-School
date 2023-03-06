import React, { useContext, useEffect, useState } from "react";
import { iUser, UserContext } from "../../Providers/UserContext";

export const DashboardParent = () => {
  const { user, setUser, childs, getChildGrades } = useContext(UserContext);

  const [childName, setChildName] = useState<string | null>(null);
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
    <main>
      <section>
        <p>Olá, {user?.name}</p>
        <p>Perfil de responsável</p>
      </section>
      <section>
        <div id="selectContainer">
          <select onChange={(event) => setChildName(event.target.value)}>
            <option value="">Selecione um filho(a)</option>
            {childs?.map((child) => (
              <option value={child.name} key={crypto.randomUUID()}>
                {child.name}
              </option>
            ))}
          </select>
        </div>
        <div id="grades">
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
        </div>
      </section>
    </main>
  );
};
