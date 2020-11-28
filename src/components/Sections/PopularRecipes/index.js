import styles from './popularRecipes.module.css';
import { Col, Row } from '../../grid';
import Recipe from './Recipe';
import * as images from './images';

const dummyRecipeContent = 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';

const PopularMenu = () => (
    <div id="popular-recipes" className="container-fluid pb-5" >
        <div className="text-left ml-5 pl-5" style={{ maxWidth: 250 }}>
            <h4 className={`ml-5 ${styles['recipe-header']} font-weight-bold mb-0`}> POPULAR</h4>
            <h1 className={`ml-5 ${styles['recipe-header']} font-weight-bold`}>RECIPES</h1>
            <hr className={styles['recipe-hr']} />
        </div>
        <Row className="pl-5 pt-5">
            <Col size={['md-1']}></Col>
            <Col className="pl-5" size={['sm-12', 'md-3']}>
                <Recipe servings="4"
                    title="FETA WITH PEACH"
                    userName="Dony Lee"
                    isCover
                    image={images.feta}
                    isChefsChoice description={dummyRecipeContent} />
            </Col>
            <Col className="pl-5" size={['sm-12', 'md-3']}>
                <div className={styles.filler}></div>
                <Recipe servings="2"
                    title="CHEESE SPINACH WITH MUSHROOM"
                    userName="John Doe"
                    image={images.spinach}
                    isChefsChoice description={dummyRecipeContent} />
            </Col>
            <Col className="pl-5" size={['sm-12', 'md-3']}>
                <Recipe servings="2"
                    title="AVACADO TOAST"
                    userName="Larry King"
                    image={images.toast}
                    description={dummyRecipeContent} />
            </Col>
        </Row>
       
    </div>
);

export default PopularMenu;