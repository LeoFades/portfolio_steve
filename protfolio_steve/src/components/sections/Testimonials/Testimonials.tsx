import styles from './Testimonials.module.css';
import { Star } from 'lucide-react';

export default function Testimonials() {
    return (
        <section id="testimonials" className={styles.section}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className={styles.subtitle}>
                        Validations
                    </span>

                    <h2 className={styles.title}>
                        Professional Peer Review
                    </h2>
                </div>


                <div className={styles.grid}>

                    {/* Testimonial 1 */}
                    <div className={styles.card}>

                        <div className={styles.quoteIcon}>
                            <span className="material-symbols-outlined">format_quote</span>
                        </div>

                        <div className={styles.stars}>
                            <Star size={16} fill="currentColor" color="currentColor" />
                            <Star size={16} fill="currentColor" color="currentColor" />
                            <Star size={16} fill="currentColor" color="currentColor" />
                            <Star size={16} fill="currentColor" color="currentColor" />
                            <Star size={16} fill="currentColor" color="currentColor" />
                        </div>

                        <p className={styles.text}>
                            "During his time with us, Steve excelled in mechanical design tasks, showing an
                            impressive command of SolidWorks. He was able to translate concepts into detailed
                            parts efficiently and with a high attention to detail. What set Steve apart, however,
                            was his teamwork; he was always willing to support colleagues and accepted feeback
                            constructively. He is a talented designer with a positive work ethic, and he would
                            be an asset to any engineering team."
                        </p>

                        <div className={styles.author}>

                            <div className={styles.avatar}>
                                DR
                            </div>

                            <div>
                                <h5 className={styles.name}>
                                    Dylan Rudy
                                </h5>

                                <span className={styles.role}>
                                    Chief Technology Officer, Stinablis Sdn Bhd
                                </span>
                            </div>

                        </div>
                    </div>



                    {/* Testimonial 2 */}
                    {/* <div className={styles.card}>

                        <div className={styles.quoteIcon}>
                            <span className="material-symbols-outlined">format_quote</span>
                        </div>

                        <div className={styles.stars}>
                            <Star size={16} fill="currentColor" color="currentColor" />
                            <Star size={16} fill="currentColor" color="currentColor" />
                            <Star size={16} fill="currentColor" color="currentColor" />
                            <Star size={16} fill="currentColor" color="currentColor" />
                            <Star size={16} fill="currentColor" color="currentColor" />
                        </div>

                        <p className={styles.text}>
                            "The work delivered on our recent 5nm tape-out was flawless.
                            Attention to detail in timing constraints saved us weeks of
                            re-work. A true asset to any high-stakes semiconductor project."
                        </p>

                        <div className={styles.author}>

                            <div className={styles.avatar}>
                                SM
                            </div>

                            <div>
                                <h5 className={styles.name}>
                                    Sarah Miller
                                </h5>

                                <span className={styles.role}>
                                    Principal Architect, Nvidia
                                </span>
                            </div>

                        </div>
                    </div> */}

                </div>

            </div>
        </section>
    );
}