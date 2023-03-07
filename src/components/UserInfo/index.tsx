import { UserInfoStyle } from "./style"

interface iUserInfo {
    name: string;
    classRoom: string;
}

const UserInfo = ({name, classRoom}: iUserInfo) => {
    return(
        <>
            <UserInfoStyle>
                <h1>Oi, {name}</h1>
                <p>Professor(a) - {classRoom}</p>
            </UserInfoStyle>
        </>
    )
}

export default  UserInfo