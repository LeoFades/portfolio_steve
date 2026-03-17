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
                                    Project Engineer Intern — Stinablis Sdn Bhd
                                </h4>

                                <span className={styles.date}>
                                    Jan 2026 - Feb 2026
                                </span>

                                <p className={styles.description}>
                                    Led end-to-end reverse engineering workflows from 3D scan to functional prototype.
                                </p>
                                <p className={styles.description}>
                                    Restored availability of a discontinued 1997 Mercedes-Benz W202 brake light housing, delivering functional
                                    replacements for 5+ vehicles.
                                </p>
                                <p className={styles.description}>
                                    Improved durability by replacing the housing’s brittle clip mechanism with screws mechanism.
                                </p>
                                <p className={styles.description}>
                                    Integrated modern LED modules while preserving OEM mounting interfaces.
                                </p>
                                <p className={styles.description}>
                                    Produced commemorative mementos for prominent startup programs, including Sarawak SaaS Accelerator and DIVA.
                                </p>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    Mechanical & Electrical Project Engineer — Monash Automation
                                </h4>

                                <span className={styles.date}>
                                    Apr 2025 - Present
                                </span>

                                <p className={styles.description}>
                                    Implemented AI integration and mechanical reskinning initiatives for a
                                    Unitree Go1, enabling voice-command interaction.



                                </p>
                                <p className={styles.description}>
                                    Developed real-time voice command interface by integrating ChatGPT API with Raspberry Pi 4.
                                </p>
                                <p className={styles.description}>
                                    Contributed to mechanical redesign and external reskinning of the robot dog.
                                </p>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    Treasurer & Electrical Technician — Shell Eco Marathon Team Monash
                                </h4>

                                <span className={styles.date}>
                                    Feb 2024 - Jun 2025
                                </span>

                                <p className={styles.description}>
                                    Managed SEM Team Monash’s RM70,000+ budget, ensuring accurate financial
                                    tracking for international competition (Lombok, Indonesia).


                                </p>
                                <p className={styles.description}>
                                    Oversaw finance transactions and expense approvals for team operations, coordinating with Monash Finance.

                                </p>
                                <p className={styles.description}>
                                    Applied PID control system for vacuum former, maintaining ±2°C temperature stability and producing competition
                                    qualified windshields.
                                </p>

                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    MyVaccination Frontline Volunteer — Ministry of Youth and Sports of Malaysia
                                </h4>

                                <span className={styles.date}>
                                    Feb 2021 - Jul 2021
                                </span>

                                <p className={styles.description}>
                                    Assisted doctors & nurses in vaccination operations during the national
                                    COVID-19 rollout, helping 5,000+ patients daily.

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
                                    Bachelor of Engineering — Monash University
                                </h4>

                                <span className={styles.date}>
                                    Feb 2023 - Present
                                </span>

                                <div className={styles.badge}>
                                    GPA 3.83/4.0 | WAM 85.64/100
                                </div>

                                <p className={styles.description}>
                                    Major in Robotic and Mechatronics Engineering. Minor in Artificial Intellegent in Engineering.
                                </p>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    Monash University Foundation Year — Monash University
                                </h4>

                                <span className={styles.date}>
                                    Jul 2021 - Jun 2022
                                </span>

                                <p className={styles.description}>
                                    Completed course with a High Distinction score of 97.29 out of 100.
                                </p>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    Sijil Pelajaran Malaysia
                                </h4>

                                <span className={styles.date}>
                                    Jan 2016 - Apr 2021
                                </span>

                                <p className={styles.description}>
                                    Gruaduated high school and completed the Malaysian Certificate of Education with
                                    10 As from the STEM stream.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}