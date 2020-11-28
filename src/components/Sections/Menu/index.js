import Button from '../../common/Button';
import { fadeDownAnimation, fadeUpAnimation } from '../../common/withScrollingAnimation';
import { Col, AnimatedCol, Row } from '../../grid';
import './menu.css'
import SubMenu from './SubMenu';

const dummyMenu = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

const Menu = () => (
    <div id="menu" className="container-fluid p-2 " >
        <h2 className="text-center p-2 mb-5 menu-header">
            OUR MENU
        </h2>
        <hr className="menu-hr" />
        <Button type="know-more" label="KNOW MORE" />
        <Row className="p-5 ml-5">
            <Col size={['md-1']}></Col>
            <AnimatedCol animateIn={fadeUpAnimation} animateOut={fadeUpAnimation} size={['sm-12', 'md-3']} className="border-right ">
                <h2 className="category-header text-left">  STARTERS</h2>
                <SubMenu title="KANDA BHAJI"
                    description={dummyMenu}
                    price="$5" />
                <SubMenu title="MANCHURIAN"
                    description={dummyMenu}
                    price="$7" />
            </AnimatedCol>
            <AnimatedCol animateIn={fadeDownAnimation} animateOut={fadeDownAnimation} size={['sm-12', 'md-2']} className="border-right">
                <h2 className="category-header text-left">MAIN COURSES</h2>
                <SubMenu title="SIZZLERS"
                    description={dummyMenu}
                    price="$10" />
                <SubMenu title="TAWA PULAV"
                    description={dummyMenu}
                    price="$15" />
            </AnimatedCol>
            <AnimatedCol animateIn={fadeUpAnimation} animateOut={fadeUpAnimation}  size={['sm-12', 'md-3']} className="border-right">
                <h2 className="category-header text-left">SIDES</h2>
                <SubMenu title="SALAD"
                    description={dummyMenu}
                    price="$6" />
                <SubMenu title="KANDA BHAJI"
                    description={dummyMenu}
                    price="$7" />
            </AnimatedCol>
            <AnimatedCol animateIn={fadeDownAnimation} animateOut={fadeDownAnimation} size={['sm-12', 'md-3']}>
                <h2 className="category-header text-left">DESSERTS</h2>
                <SubMenu title="BROWNIE"
                    description={dummyMenu}
                    price="$9" />
                <SubMenu title="RASMALAI"
                    description={dummyMenu}
                    price="$11" />
            </AnimatedCol>
        </Row>

    </div>
);

export default Menu;