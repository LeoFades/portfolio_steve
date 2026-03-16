import steveHero from '../../../assets/steveHero.png'
import styles from "./Hero.module.css";

function Hero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.grid}>
                <div className={styles.content}>


                    <h1 className={styles.title}>
                        <div className={styles.titletext}>Steve Beriak</div>
                        <span className={styles.highlight}>Mechatronics </span>
                        <span className={styles.highlight}>Engineer </span>
                    </h1>

                    <div className={styles.subTitleWrapper}>
                        <p className={styles.subTitle}>
                            Mechanical | Artificial Intellegence
                        </p>
                    </div>

                    {/* <div className={styles.stats}>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>42+</span>
                            <span className={styles.statLabel}>Systems Deployed</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>03</span>
                            <span className={styles.statLabel}>Patents Pending</span>
                        </div>
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>+15%</span>
                            <span className={styles.statLabel}>Efficiency Gain</span>
                        </div>
                    </div> */}

                    <div className={styles.buttonWrapper}>
                        <button className={styles.heroButton} onClick={() => {
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Explore Portfolio
                        </button>
                        <button className={styles.heroButtonSecondary} onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Contact Me
                        </button>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.frame}></div>
                    <div className={styles.cornerTopRight}></div>
                    <div className={styles.cornerBottomLeft}></div>
                    <img
                        className={styles.heroImage}
                        src={steveHero}
                        alt="Professional monochrome portrait of a male engineer in a studio setting"
                    />
                    <div className={styles.overlay}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;