import React, { useContext, useEffect, useState } from "react";
import { Grades } from "../../components/Grades";
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
      await getChildGrades(user?.cpf);
      // await getChildGrades("99999999999");
    };
    getChilds();
  }, []);

  useEffect(() => {
    const childFind = childs?.find((child) => child.name === childName);
    setSelectedChild(childFind);
  }, [childName]);

  return (
    <StyledMain>
      <section id="user__infos">
        <div>
          <h2>Olá, {user?.name}</h2>
          <p>Perfil de responsável</p>
        </div>
      </section>
      <section className="sectionContainer">
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
       
        <Grades disabled={false} selectedChild={selectedChild} />
      </section>
    </StyledMain>
  );
};
