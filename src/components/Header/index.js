import Link, { NavLink } from '../common/Link';

const Header = () => (
    <nav id="header" className="navbar navbar-expand-lg navbar-default fixed-top">
        <Link className="navbar-brand mr-5" href="#" label={<h6>LOGO</h6>} />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <NavLink label="ABOUT" />
                <NavLink label="SERVICES" />
                <NavLink label="PORTFOLIO" />
                <NavLink label="PRICING" />
                
            </ul>
            <ul className="navbar-nav mr-0">
                <NavLink label="CONTACT" />
                <NavLink label="LOGIN" />
            </ul>
        </div>
    </nav>
);

export default Header;