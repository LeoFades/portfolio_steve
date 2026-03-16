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
                            "One of the most technically sound engineers I've had the pleasure
                            of working with. His ability to bridge the gap between abstract
                            architectural concepts and physical silicon reality is unmatched."
                        </p>

                        <div className={styles.author}>

                            <div className={styles.avatar}>
                                JD
                            </div>

                            <div>
                                <h5 className={styles.name}>
                                    John Doe
                                </h5>

                                <span className={styles.role}>
                                    Director of Engineering, Intel
                                </span>
                            </div>

                        </div>
                    </div>



                    {/* Testimonial 2 */}
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
                    </div>

                </div>

            </div>
        </section>
    );
}