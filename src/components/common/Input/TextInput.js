import classnames from 'classnames';

const TextInput = ({ label, className, value, onChange }) => <div className={classnames('p-3', className)}>
    <label style={{ fontSize: 12 }} className="w-100 text-left" >{label}</label>
    <input style={{
        fontSize: 12,
        backgroundColor: '#ffdac9',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'None'
    }} placeholder={label} className="w-100" type="text" value={value} onChange={onChange} />
</div>;

export default TextInput;