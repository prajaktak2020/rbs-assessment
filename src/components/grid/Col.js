import classNames from 'classnames';
import ScrollAnimation from 'react-animate-on-scroll';

const Col = ({ className, size = ['sm-12'], children, style }) => (
    <div className={classNames(size.map(el => `col-${el}`).join(' '), className)} style={style}>
        {children}
    </div>
);

export const AnimatedCol = ({ children, animateOut, animateIn, ...props }) =>
    <Col {...props}>
        <ScrollAnimation animateOut={animateOut} animateIn={animateIn}>
            {children}
        </ScrollAnimation>
    </Col>;

export default Col;