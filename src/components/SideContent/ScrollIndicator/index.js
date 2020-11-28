import { useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './scrollIndicator.module.css';

const sections = ['banner', 'meet-community', 'location', 'menu', 'popular-recipes', 'contact-us'];

const ScrollIndicator = ({ steps = 6 }) => {
    const [currentStep, setCurrentStep] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            sections.every((section, index) => {
                var elementTarget = document.getElementById(section);
                if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight - 40)) {
                    return true;
                } else {
                    setCurrentStep(index);
                    return false;
                }
            });
        };

        return () => {
            window.onscroll = undefined;
        };
    }, []);
    return (<div className={styles.wrapper}>
        {Array.from(Array(steps)).map((step, index) =>
            <>
                <div className={classnames(styles.step, { [styles.active]: index === currentStep })}>

                </div>
                {index === currentStep && <div className={styles.activeLabel} >{`0${index + 1}`}</div>}
            </>
        )}
    </div>);
}

export default ScrollIndicator;