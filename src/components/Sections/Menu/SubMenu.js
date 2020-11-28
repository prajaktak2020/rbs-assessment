import './menu.css'

const SubMenu = ({ title, description, price }) => (
    <div className="text-left">
        <p className="font-weight-bold mt-5">{title}</p>
        <p>{description}</p>
        <span className="box-border pl-2 pr-2" style={{borderColor:'rgb(224, 183, 175'}}>{price}</span>
    </div>
);

export default SubMenu;