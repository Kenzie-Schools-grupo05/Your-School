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

const Header = () => {
    return (
        <ContainerHeader>
            <ContainerLogoAndMenu>
                <MenuIconStyled src={menuIcon} alt="menu-access" />
                <Logo src={logo} alt="website-logo" />
            </ContainerLogoAndMenu>
            <ContainerLogout>
                <img src={LogoutButton} alt="" />
            </ContainerLogout>
        </ContainerHeader>
    );
};
export default Header;
