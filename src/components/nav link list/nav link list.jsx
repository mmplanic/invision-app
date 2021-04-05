import { NavLink } from 'react-router-dom';
import './nav link list.scss';

export default function NavLinkList({links = [], attributes, sub=false}) {
    sub = sub ? "--sub" : "";
    
    return(
        <ul className={`nav-link-list${sub}`} {...attributes} >
            {
                
                links.map((link, i) => {
                    const { attributes: attr = {}, content = "", subMenu = {} } = link;
                    const { links:subLinks = false, attributes:subAttr } = subMenu;
                    return(
                        <li className={`nav-link-list__item${sub}`} key = {`item-index-${i}`} >
                            <NavLink className={`nav-link-list__anchor${sub}`} {...attr} >
                                {content}
                            </NavLink>
                            {subLinks ? <NavLinkList links={subLinks} sub attributes={subAttr} /> : ''}
                        </li>
                    )
                })
            }
        </ul>
    )
}