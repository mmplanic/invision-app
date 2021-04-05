import NavLinkList from '../nav link list/nav link list';
import './navigation.scss';

export default function NavigationBar({ align = 'left', logo, links }) {
    
    if (align !== "center" && align !== "right") {
        align = '';
    }

    return (
        <div className="nav-bar">

            {logo ? <img className='nav-bar__logo' src={logo} alt='logo' /> : null}

            {links ? <div className={ `nav-bar__links-wrapper ${align}` }>
                <NavLinkList links={links} attributes={{ className: "nav-bar__links" }} />
            </div> : null}
            
            
        </div>
    );
}