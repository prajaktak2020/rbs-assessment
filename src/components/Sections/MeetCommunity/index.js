import { Row, Col } from '../../grid';
import { AnimatedPostCard as Card } from '../../common/Card';
import Intro from './Intro';
import './meetCommunity.css'
import Post from './Post';
import instapic3 from './images/instapic3.jpg';
import instapic2 from './images/instapic2.jpg';

const MeetCommunity = () => (
    <div id="meet-community" className="container-fluid p-5" style={{ minHeight: 400 }}>
        <Row>
            <Col size={['sm-12', 'md-3']}>

            </Col>
            <Col size={['sm-12', 'md-3']}>
                <Intro />
            </Col>

            <Col size={['sm-12', 'md-6']}>
                <Post src={instapic2} author="buzzfeedfood" content="sample dummy content sample dummy 
                    content sample dummy content sample dummy content">
                </Post>
            </Col>

            <Col size={['sm-12', 'md-6']}>
                <Post reverse src={instapic3} author="buzzfeedfood" content="sample dummy content sample dummy 
                    content sample dummy content sample dummy content">
                </Post>
            </Col>
            <Col size={['sm-12', 'md-3']}>
                <Card className="border-none">
                    <div className="mt-3">
                        Lorem ipsum suttrum veda chud re setru putru itne re
                        Lorem ipsum suttrum veda chud re setru putru itne re
                        Lorem ipsum suttrum veda chud re setru putru itne re
                    </div>
                </Card>
            </Col>
        </Row>

    </div>
);

export default MeetCommunity;