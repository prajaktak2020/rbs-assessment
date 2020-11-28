import classnames from 'classnames';
import withScrollingAnimation from './withScrollingAnimation';

const Card = ({ className, bodyClass, cardHeader, children }) => <div className={classnames('card', className)}>
    {cardHeader && <div className="card-header border-none text-left">
        {cardHeader}
    </div>}
    <div className={classnames('card-body', bodyClass)}>
        {children}
    </div>
</div>;


export const PostCard = ({ children, ...rest }) => <Card {...rest}
    className="border-none" bodyClass="text-left">
    {children}
</Card>;

export const AnimatedPostCard = withScrollingAnimation(PostCard);

export default Card;