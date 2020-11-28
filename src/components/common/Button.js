import classnames from 'classnames';

const Button = ({ label, onClick, className, type, size = 'sm', ...rest }) =>
    <button className={classnames(`btn btn-${size}`, { [`btn-${type}`]: type }, className)}
        onClick={onClick} {...rest}>{label}</button>;

export default Button;
