import classnames from 'classnames';

const Link = ({ className, label, href = '#' }) =>
    <a className={className} style={{ textDecoration: 'none', color: 'black' }} href={href} role="navigation">
        {label} 
    </a>;

export const NavLink = ({ label, href = '#', className }) => <li className={classnames('nav-item', className)}>
    <Link className="nav-link mr-5" label={<h6>{label}</h6>} href={href} />
</li>

export default Link;