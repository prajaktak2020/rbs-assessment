import Logo from '../../../assets/stamp.png'
import styles from './banner.module.css'

const Banner = () => (
    <div id="banner" className="container-fluid" style={{ color: "white", textAlign: "center" }}>
        <div className={styles['top-Section']}>
            <img src={Logo} alt="img" style={{ position: 'relative', top: 60, right: 300 }} />
            <div className={styles.heading}>
                <div className={styles['banner-h2']} >THE BEST FOODIE</div>
                <div className={styles['banner-h1']}>EXPERIENCE</div>
                <div className={styles['banner-h3']}>NOW IN LONDON</div>
            </div>
        </div>
    </div>
);

export default Banner;