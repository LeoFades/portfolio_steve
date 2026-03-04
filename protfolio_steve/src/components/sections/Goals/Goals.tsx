import styles from "./Goals.module.css";

function Goals() {
    return (
        <section className={styles.section} id="goals">
            <div className={styles.container}>
                <div className={styles.wrapper}>

                    <div className={styles.left}>
                        <h2 className={styles.subheading}>Current Objective</h2>
                        <h3 className={styles.title}>
                            "Breakthrough into the semiconductor industry"
                        </h3>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.right}>
                        <p className={styles.description}>
                            Description - Steve likes to eat ice cream thanks for buying me
                            icecream all the time bro, I like the magnum
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Goals;