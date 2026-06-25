import styles from './Journey.module.css';

export default function Journey() {
    return (
        <section id="journey" className={styles.section}>
            <div className={styles.container}>

                <h2 className={styles.title}>Professional Journey</h2>

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

                        <div className={styles.metaRow}>
                            <span className={styles.date}>
                                Jan 2026 - Feb 2026
                            </span>

                            <span className={styles.location}>
                                Sarawak, Malaysia
                            </span>
                        </div>

                                <ul className={styles.descriptionList}>
                                    <li>
                                        Led end-to-end reverse engineering workflows from 3D scan to functional prototype.
                                    </li>
                                    <li>
                                        Restored availability of a discontinued 1997 Mercedes-Benz W202 brake light housing, delivering functional
                                        replacements for 5+ vehicles.
                                    </li>
                                    <li>
                                        Improved durability by replacing the housing’s brittle clip mechanism with a screw-based mechanism.
                                    </li>
                                    <li>
                                        Integrated modern LED modules while preserving OEM mounting interfaces.
                                    </li>
                                    <li>
                                        Produced commemorative mementos for prominent startup programs, including Sarawak SaaS Accelerator and DIVA.
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    Mechanical & Electrical Project Engineer — Monash Automation
                                </h4>
                            <div className={styles.metaRow}>
                                <span className={styles.date}>
                                    Apr 2025 - Present
                                </span>

                                <span className={styles.location}>
                                    Melbourne, Australia
                                </span>
                            </div>

                                <ul className={styles.descriptionList}>
                                    <li>
                                        Collaborated on the mechanical reskinning and AI-enabled voice-command integration of a Unitree Go1 robotic dog.
                                    </li>
                                    <li>
                                        Currently developing an AI microscope for microplastic detection with automated X-Y scanning platform.
                                    </li>
                                    <li>
                                        Currently contribuiting to a WiFi-based patient vital sensing project for heart rate and respiratory monitoring.
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    Treasurer & Electrical Technician — Shell Eco Marathon Team Monash
                                </h4>
                            
                            <div className={styles.metaRow}>
                                <span className={styles.date}>
                                    Feb 2024 - Jun 2025
                                </span>

                                <span className={styles.location}>
                                    Kuala Lumpur, Malaysia
                                </span>
                            </div>

                                <ul className={styles.descriptionList}>
                                    <li>
                                        Managed SEM Team Monash’s RM70,000+ budget, ensuring accurate financial tracking for international competition
                                        in Lombok, Indonesia.
                                    </li>
                                    <li>
                                        Oversaw finance transactions and expense approvals for team operations, coordinating with Monash Finance.
                                    </li>
                                    <li>
                                        Applied PID control system for vacuum former, maintaining ±2°C temperature stability and producing
                                        competition-qualified windshields.
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    MyVaccination Frontline Volunteer — Ministry of Youth and Sports of Malaysia
                                </h4>
                            
                            <div className={styles.metaRow}>
                                <span className={styles.date}>
                                    Feb 2021 - Jul 2021
                                </span>

                                <span className={styles.location}>
                                    Sarawak, Malaysia
                                </span>
                            </div>

                                <ul className={styles.descriptionList}>
                                    <li>
                                        Assisted doctors and nurses in vaccination operations during the national COVID-19 rollout, helping 5,000+
                                        patients daily.
                                    </li>
                                </ul>
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

                        <div className={styles.metaRow}>
                                <span className={styles.date}>
                                    Feb 2023 - Present
                                </span>

                                <span className={styles.location}>
                                    Melbourne, Australia
                                </span>
                        </div>

                                <div className={styles.badge}>
                                    GPA 3.83/4.0   |   WAM 85.64/100
                                </div>

                                <ul className={styles.descriptionList}>
                                    <li>
                                        Majoring in Robotics and Mechatronics Engineering with a minor in Artificial Intelligence in Engineering.
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    Monash University Foundation Year — Monash University
                                </h4>

                        <div className={styles.metaRow}>
                                <span className={styles.date}>
                                    Jul 2021 - Jun 2022
                                </span>

                                <span className={styles.location}>
                                    Kuala Lumpur, Malaysia
                                </span>
                        </div>

                                <div className={styles.badge}>
                                    MUFY Score: 97.29/100   |   Top Scorer
                                </div>

                                <ul className={styles.descriptionList}>
                                    <li>
                                        Completed the course with a High Distinction score of 97.29 out of 100.
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.item}>
                                <div className={styles.dot}></div>

                                <h4 className={styles.role}>
                                    Sijil Pelajaran Malaysia
                                </h4>

                            <div className={styles.metaRow}>
                                <span className={styles.date}>
                                    Jan 2016 - Apr 2021
                                </span>

                                <span className={styles.location}>
                                    Sarawak, Malaysia
                                </span>
                            </div>

                                <div className={styles.badge}>
                                    SPM: Straight A's (6A+,4A)
                                </div>

                                <ul className={styles.descriptionList}>
                                    <li>
                                        Graduated high school and completed the Malaysian Certificate of Education with 10 As from the STEM stream.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}