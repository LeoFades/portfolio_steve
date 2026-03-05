import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                <div className={styles.brand}>

                    <div className={styles.logo}>
                        <svg viewBox="0 0 48 48">
                            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" />
                        </svg>
                    </div>

                    <span className={styles.brandText}>
                        Engineer_Core_V1
                    </span>

                </div>

                <div className={styles.copyright}>
                    © 2024 Build_2301_Final. No rights reserved. Design for efficiency.
                </div>

                <div className={styles.links}>

                    <a href="#" className={styles.icon}>
                        <span className="material-symbols-outlined">code</span>
                    </a>

                    <a href="#" className={styles.icon}>
                        <span className="material-symbols-outlined">share</span>
                    </a>

                    <a href="#" className={styles.icon}>
                        <span className="material-symbols-outlined">settings</span>
                    </a>

                </div>

            </div>

        </footer>
    );
}

export default Footer;