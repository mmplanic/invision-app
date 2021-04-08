//import NavLinkList from '../nav link list/nav link list';
import { useState } from 'react';
import './NavBar.scss';

function NavBar({ logoSrc, expandAt = '', children}) {
    const [active, setActive] = useState(false);

    if (expandAt !== '') {
        if (expandAt !== "medium" && expandAt !== "large") { // check if prop value is correct
            expandAt = 'small';
        }
    }


    const toggleClick = _ => { setActive(!active); }

    return (
        <nav className={`nav-bar ${expandAt?('--' + expandAt):""}`}>
            {logoSrc ? <img className='nav-bar__logo' src={logoSrc} alt='logo' width={40} height={40} /> : null}
            <ul className={`menu ${active ? "active" : ""}`} onClick={toggleClick}>
                {children}
                
            </ul>
            <MenuToggleButton onClick={toggleClick} isActive={active} removeAt={expandAt} className={'nav-bar__menu-toggle-button'} />
        </nav>
    )
}


function MenuToggleButton({ onClick, isActive, removeAt = '', className = '' }) {

    if (removeAt !== '') {
        if (removeAt !== "medium" && removeAt !== "large") { // check if prop value is correct
            removeAt = 'small';
        }
        removeAt = `--${removeAt}`;
    }

    return (
        <div className={`menu-toggle-button ${isActive ? "active" : ""} ${removeAt} ${className}`} onClick={onClick}>
            <input className="menu-toggle-button__bar bar-1" type="button" />
            <input className="menu-toggle-button__bar bar-2" type="button" />
            <input className="menu-toggle-button__bar bar-3" type="button" />
        </div>
    )
}


function SubMenu({ children, className='' }) {
    return(
        <ul className={`sub-menu ${className}`}>
            {children.map((child, i) => {
                return (
                    <li key={`sub-item--${i}`} className="menu-sub__item" >
                        {child}
                    </li>
                )
            })}
        </ul>
    )
}


function MenuLink({ expanded = false, disabled=false, className="", children }) {

    const [active, setActive] = useState(expanded);

    if (children === undefined)return null;

    return (

        <li className={`menu-link ${active ? "active" : ""} ${className}`}>

            {children[0] || children }

            {children?.[1] ?
                <>
                    <button type="button" className="menu-link__expand-btn" onClickCapture={e => { setActive(!active); e.stopPropagation(); }} >{active ? "-" : "+"}</button>
                    { children[1] }
                </> : null} 
            
            {/* <NavLink exact={exact} className={"menu-link__anchor"} activeClassName={activeClassName} to={to} >{content}</NavLink>
            {children ? <button type="button" className="menu-link__expand-btn" onClickCapture={e => { setActive(!active); e.stopPropagation(); }} >{ active?"-":"+" }</button>:null }
            {children} */}
        </li>
    )
}

function MenuButton(props) { 
    const { disabled = false, className = "", children } = props;
    
    let attr = {};
    
    for (const key in props) { // getEventListeners if passed as props
        if (Object.hasOwnProperty.call(props, key) && key.startsWith('on')) {
            const value = props[key];
            attr[key] = value;
        }
    }
    
    return (

        <li className={`menu-button ${className}`} {...attr}>
            {children}
        </li>
    )
}


NavBar.MenuLink = MenuLink;
NavBar.SubMenu = SubMenu;
NavBar.MenuButton = MenuButton;

export default NavBar;