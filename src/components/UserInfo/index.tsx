import { UserInfoStyle } from "./style";

interface iUserInfo {
  name: string;
  classRoom: string;
}

<<<<<<< HEAD
const UserInfo = ({ name, classRoom }: iUserInfo) => {
  return (
    <>
      <UserInfoStyle>
        <h1>Olá, {name}</h1>
        <p>Professor(a) - {classRoom}</p>
      </UserInfoStyle>
    </>
  );
};

export default UserInfo;
=======
export const UserInfo = ({name, classRoom}: iUserInfo) => {
    return(
        <>
            <UserInfoStyle>
                <h1>Oi, {name}</h1>
                <p>Professor(a) - {classRoom}</p>
            </UserInfoStyle>
        </>
    )
}
>>>>>>> 56f10654ba05f20fa2c152e363a8cf0b9a1be4f6
