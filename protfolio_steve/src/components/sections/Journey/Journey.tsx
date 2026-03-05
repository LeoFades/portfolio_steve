import styles from './Journey.module.css';

export default function Journey() {
    return (
        <section id="journey" className={styles.section}>
            <div className={styles.container}>

                <h2 className={styles.title}>Professional  Journey</h2>

                <div className={styles.grid}>

                    {/* Professional Experience */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Professional Experience</h3>

                        <div className={styles.timeline}>
                            <div className={styles.line}></div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    Senior Design Engineer — Intel Corp.
                                </h4>

                                <span className={styles.date}>
                                    2021 — Present
                                </span>

                                <p className={styles.description}>
                                    Leading the silicon validation team for next-generation server processors.
                                    Implementing automated verification pipelines reducing time-to-market by
                                    14%. Specializing in power-aware RTL synthesis and multi-corner timing
                                    closure.
                                </p>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    Silicon Validation Lead — AMD
                                </h4>

                                <span className={styles.date}>
                                    2017 — 2019
                                </span>

                                <p className={styles.description}>
                                    Execution of comprehensive test plans for mobile GPU architectures.
                                    Managed cross-functional teams across three timezones to ensure
                                    zero-defect shipment for flagship products.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Academic Path */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Academic Path</h3>

                        <div className={styles.timeline}>
                            <div className={styles.line}></div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    M.S. Electrical Engineering — MIT
                                </h4>

                                <span className={styles.date}>
                                    2019 — 2021
                                </span>

                                <div className={styles.badge}>
                                    GPA 4.0/4.0
                                </div>

                                <p className={styles.description}>
                                    Research focused on hardware-accelerated neural networks.
                                    Thesis: "Stochastic Computing for Energy-Efficient Edge Inference."
                                </p>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    B.S. Computer Engineering — Stanford
                                </h4>

                                <span className={styles.date}>
                                    2013 — 2017
                                </span>

                                <p className={styles.description}>
                                    Core foundations in computer architecture, digital system design,
                                    and semiconductor physics.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}