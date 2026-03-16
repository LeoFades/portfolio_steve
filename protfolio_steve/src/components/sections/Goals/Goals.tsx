import styles from "./Goals.module.css";

function Goals() {
    return (
        <section className={styles.section} id="goals">
            <div className={styles.container}>
                <div className={styles.wrapper}>

                    <div className={styles.left}>
                        <h2 className={styles.subheading}>About me</h2>
                        <h3 className={styles.title}>
                            “Give me a problem, and I’ll build my way to the answer.”
                        </h3>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.right}>
                        <p className={styles.description}>
                            I build intelligent systems where hardware and software meet, working across robotics,
                            embedded systems, AI, and mechanical design to turn ideas into functional prototypes.
                            Curious and adaptable, I enjoy solving complex problems and collaborating in diverse teams.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Goals;