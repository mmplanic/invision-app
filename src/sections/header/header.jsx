import NavigationBar from '../../components/navigation bar/navigation';
import './header.scss';
import navLogo from '../../assets/logo/Audi-Logo_2016.svg';

export default function Header() {
    

    const navLinks = [
        {
            attributes:{
                to: "/home",
                exact: true,
                className: "nav-bar__link",
            },
            content: "Homepage"
        },
        {
            attributes: {
                to: "/about",
                exact: true,
                className: "nav-bar__link",
            },
            content: "About us",
            subMenu: {
                attributes: {
                    className: "nav-bar__links--sub"
                },
                links:[
                {
                    attributes: {
                        to: "/about/team",
                        exact: true,
                        className: "nav-bar__link--sub",
                    },
                    content: 'our team'
                },
                {
                    attributes: {
                        to: "/about/leadership",
                        exact: true,
                        className: "nav-bar__link--sub",
                    },
                    content: 'leadership'
                },
                {
                    attributes: {
                        to: "/about/partners",
                        exact: true,
                        className: "nav-bar__link--sub",
                    },
                    content: 'partners'
                },
            ]}
        },
        {
            attributes: {
                to: "/products",
                className: "nav-bar__link",
                exact: true,
            },
            content: "Products"
        },
        {
            attributes: {
                to: "#footer",
                className: "nav-bar__link nav-bar__button",
                activeClassName: '',
            },
            content: "Contact us"
        },
    ];

    return (
        <div className="header">
            <NavigationBar align='right' links={navLinks} logo={navLogo} />
        </div>
    );
}