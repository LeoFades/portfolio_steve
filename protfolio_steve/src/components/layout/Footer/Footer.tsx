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
                    © 2026 Steve_Beriak. Designed and developed by Leo_Fades.
                </div>

                <div className={styles.links}>

                    <div className={styles.tooltipWrapper}>
                        <span className={`material-symbols-outlined ${styles.icon}`}>info</span>

                        <div className={styles.tooltip}>
                            <p>This portfolio was designed and developed by {' '}
                                <a
                                    href="https://www.linkedin.com/in/leofades"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.tooltipLink}
                                >
                                    Leo Fades
                                </a>
                                .
                            </p>

                        </div>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;