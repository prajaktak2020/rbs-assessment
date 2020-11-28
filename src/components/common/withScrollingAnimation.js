import ScrollAnimation from 'react-animate-on-scroll';

export const fadeUpAnimation = 'animate__animated animate__fadeInUp';
export const fadeDownAnimation = 'animate__animated animate__fadeInDown';

const withScrollingAnimation = (Comp) => ({ animateIn = fadeUpAnimation, animateOut, ...props }) =>
    <ScrollAnimation animateOut={animateOut} animateIn={animateIn}>
        <Comp {...props} />
    </ScrollAnimation>;

export default withScrollingAnimation;