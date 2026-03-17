import styles from './Certifications.module.css';

export default function Certifications() {
    return (
        <section id="skills" className={styles.section}>

            <h3 className={styles.title}>
                Certs & Recognitions
            </h3>

            <div className={styles.grid}>

                <div className={styles.card}>
                    <div className={styles.icon}>
                        <span className="material-symbols-outlined">
                            workspace_premium
                        </span>
                    </div>

                    <h6 className={styles.cardTitle}>
                        SolidWorks CSWA Certified
                    </h6>

                    <p className={styles.cardText}>
                        Solidworks Associate
                    </p>
                </div>


                <div className={styles.card}>
                    <div className={styles.icon}>
                        <span className="material-symbols-outlined">
                            military_tech
                        </span>
                    </div>

                    <h6 className={styles.cardTitle}>
                        Monash Dean's List
                    </h6>

                    <p className={styles.cardText}>
                        Academic Excellence
                    </p>
                </div>


                <div className={styles.card}>
                    <div className={styles.icon}>
                        <span className="material-symbols-outlined">
                            verified_user
                        </span>
                    </div>

                    <h6 className={styles.cardTitle}>
                        NVIDIA DLI
                    </h6>

                    <p className={styles.cardText}>
                        AI for Robotics
                    </p>
                </div>


                <div className={styles.card}>
                    <div className={styles.icon}>
                        <span className="material-symbols-outlined">
                            leaderboard
                        </span>
                    </div>

                    <h6 className={styles.cardTitle}>
                        Top 10% Hackathon
                    </h6>

                    <p className={styles.cardText}>
                        Regional Engineering Cup
                    </p>
                </div>

            </div>
        </section>
    );
}