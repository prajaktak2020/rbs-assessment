import classnames from 'classnames';
import { Col, Row } from '../../grid';
import { PostCard as Card } from '../../common/Card';
import instaBtn from './images/instagram-btn.png';
import withScrollingAnimation from '../../common/withScrollingAnimation';

const Post = ({ reverse, src, content, author }) => (<Row className={classnames({ 'reverse-columns': reverse })}>
    <Col size={['md-6']}>
        <Card className="shadow rounded" >
            <div className="position-relative">
                <img src={src} style={{ objectFit: 'cover', height: 200, width: 200 }}></img>
                <img src={instaBtn} className="position-absolute" style={{ objectFit: 'contain', top: -20, right: 20 }} />
            </div>
            
        </Card>
    </Col>
    <Col size={['md-6']}>
        <Card className="shadow rounded" cardHeader={<h4>@{author}</h4>}>
            {content}
        </Card>
    </Col>
</Row>
);

export default withScrollingAnimation(Post);