import NavBar from "../../components/navigation bar/NavBar";
import navLogo from '../../assets/logo/Audi-Logo_2016.svg';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <NavBar logoSrc={navLogo} expandAt='medium'>
            <NavBar.MenuLink>
                <NavLink to="/home">Homepage</NavLink>
            </NavBar.MenuLink>

            <NavBar.MenuLink>
                <NavLink to="/about">About us</NavLink>
                <NavBar.SubMenu>
                    <NavLink to="/about/team">our team</NavLink>
                    <NavLink to="/about/leadership">leadership</NavLink>
                    <NavLink to="/about/partners">partners</NavLink>
                </NavBar.SubMenu>
            </NavBar.MenuLink>

            <NavBar.MenuLink>
                <NavLink to="/products">Products</NavLink>
            </NavBar.MenuLink>

            <NavBar.MenuButton>
                <NavLink to="#footer">Contact Us</NavLink>
            </NavBar.MenuButton>

        </NavBar>
    )
}