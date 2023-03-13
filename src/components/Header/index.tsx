import logo from "../../assets/header-logo.svg";
import menuIcon from "../../assets/menu-icon.svg";
import LogoutButton from "../../assets/logout-button.svg";
import {
  ContainerHeader,
  ContainerLogoAndMenu,
  ContainerLogout,
  Logo,
  MenuIconStyled,
} from "./style";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";

const Header = () => {
  const { handleLogout } = useContext(UserContext);

  return (
    <ContainerHeader>
      <ContainerLogoAndMenu>
        {/* <MenuIconStyled src={menuIcon} alt="menu-access" /> */}
        <Logo src={logo} alt="website-logo" />
      </ContainerLogoAndMenu>
      <ContainerLogout>
        <img
          onClick={handleLogout}
          src={LogoutButton}
          alt=""
          className="logoutBtnIcon"
        />
      </ContainerLogout>
    </ContainerHeader>
  );
};
export default Header;
