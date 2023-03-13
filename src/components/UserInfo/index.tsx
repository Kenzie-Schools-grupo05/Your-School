import { UserInfoStyle } from "./style";

interface iUserInfo {
  name: string;
  classRoom: string;
}

export const UserInfo = ({ name, classRoom }: iUserInfo) => {
  return (
    <>
      <UserInfoStyle>
        <h1>Olá, {name}</h1>
        <p>Professor(a) - {classRoom}</p>
      </UserInfoStyle>
    </>
  );
};
