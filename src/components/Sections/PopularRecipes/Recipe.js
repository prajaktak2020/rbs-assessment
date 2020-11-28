/* eslint-disable jsx-a11y/alt-text */
import styles from './popularRecipes.module.css';
import chefChoice from './images/chef-stamp.png';
import goButton from './images/go-btn.png';
import Card from '../../common/Card';

const Recipe = ({ image, servings, isCover, isChefsChoice, userName, title, description }) => (
    <div style={{ maxWidth: 270, position: 'relative' }}>
        {isChefsChoice && <img src={chefChoice}
            style={{ position: 'absolute', right: -30, top: -30, objectFit: 'cover' }}></img>}
        <div className={styles.servings} style={{ left: isCover ? 10 : 35, top: 0 }}><h3 className="mb-0">{servings}</h3> Servings </div>
        <img src={image} style={{ objectFit: 'cover', height: isCover ? 250 : 200, width: isCover ? 250 : 200 }}></img>
        <img src={goButton} style={{ objectFit: 'cover', zIndex: 10, position: 'absolute', top: isCover ? 190 : 140, right: isCover ? 10 : 35 }}></img>

        <Card className="w-100 border-none p-3 text-left" cardHeader={<h6 className="text-center font-weight-bold justify" >{title}</h6>}>
            {description}
        </Card>
        <div style={{ position: 'absolute', bottom: 0, right: 20 }}><h5>{userName}</h5></div>
    </div>
);

export default Recipe;