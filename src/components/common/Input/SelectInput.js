import Select from 'react-select';

const overrideStyles = (current) => ({
    ...current,
    backgroundColor: '#ffdac9',
    color: '#767676',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    fontSize: 12,
    '&:focus': {
        backgroundColor: '#ffdac9',
        border: 'none',
    },
});
const styles = {
    singleValue: overrideStyles,
    valueContainer: overrideStyles,
    indicatorsContainer: overrideStyles,
    control: (current) => ({
        ...overrideStyles(current),
        borderBottom: '2px solid #767676',
    }) ,
};

const SelectInput = ({ label, ...props }) => (
    <div className="pl-3 pr-2" >
        <label style={{ fontSize: 12 }} className="w-100 text-left">{label}</label>
        <Select styles={styles} searchable={false} {...props} />
    </div>
);

export default SelectInput;
