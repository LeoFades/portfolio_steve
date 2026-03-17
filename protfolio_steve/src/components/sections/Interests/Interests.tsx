import { useState } from "react";
import styles from "./Interests.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

//image imports
//baking
import baking from '@/assets/Personal_Interests/Baking/baking.png'
import baking1 from '@/assets/Personal_Interests/Baking/baking1.png'
import baking3 from '@/assets/Personal_Interests/Baking/baking3.png'
import baking4 from '@/assets/Personal_Interests/Baking/baking4.png'
import baking5 from '@/assets/Personal_Interests/Baking/baking5.png'
import baking6 from '@/assets/Personal_Interests/Baking/baking6.png'

//cooking
import cooking1 from '@/assets/Personal_Interests/Cooking/cooking1.png'
import cooking2 from '@/assets/Personal_Interests/Cooking/cooking2.png'
import cooking3 from '@/assets/Personal_Interests/Cooking/cooking3.png'
import cooking4 from '@/assets/Personal_Interests/Cooking/cooking4.png'
import cooking5 from '@/assets/Personal_Interests/Cooking/cooking5.png'
import cooking6 from '@/assets/Personal_Interests/Cooking/cooking6.png'

//hiking
import hiking from '@/assets/Personal_Interests/Hiking/hiking.png'
import hiking1 from '@/assets/Personal_Interests/Hiking/hiking1.png'
import hiking2 from '@/assets/Personal_Interests/Hiking/hiking2.png'
import hiking3 from '@/assets/Personal_Interests/Hiking/hiking3.png'
import hiking4 from '@/assets/Personal_Interests/Hiking/hiking4.png'

//jungle trekking
import jungle from '@/assets/Personal_Interests/Jungle_Trekking/jungle.jpeg'
import jungle1 from '@/assets/Personal_Interests/Jungle_Trekking/jungle1.png'
import jungle2 from '@/assets/Personal_Interests/Jungle_Trekking/jungle2.png'

// //rock climbing
// import rock from '@/assets/Personal_Interests/Rock_Climbing/rock.png'
// import rock1 from '@/assets/Personal_Interests/Rock_Climbing/rock1.png'
// import rock2 from '@/assets/Personal_Interests/Rock_Climbing/rock2.png'

// ─────────────────────────────────────────────
// ADD / EDIT YOUR INTERESTS HERE
// Each interest has a label, icon, and array of images.
// Add as many images per interest as you like.
// Make usre you import the images on top like so.
// To add a new interest card, copy one object and paste it.
// ─────────────────────────────────────────────
const INTERESTS = [
    {
        label: "Artisan Baking",
        icon: "oven",
        images: [
            baking,
            baking1,
            baking3,
            baking4,
            baking5,
            baking6,
            // add more images for this interest:
            // baking7, ... for example

        ],
    },
    {
        label: "Culinary Exploration & Home Cooking",
        icon: "restaurant",
        images: [
            cooking1,
            cooking2,
            cooking3,
            cooking4,
            cooking5,
            cooking6,
        ],
    },
    {
        label: "Outdoor Hiking & Nature Exploration",
        icon: "hiking",
        images: [
            hiking,
            hiking1,
            hiking2,
            hiking3,
            hiking4,
        ],
    },
    {
        label: "Jungle Trekking & Wilderness Exploration",
        icon: "forest",
        images: [
            jungle,
            jungle1,
            jungle2,
        ],
    },

    // ── Add a new interest card by copying this block ──
    // {
    //     label: "Your Interest",
    //     icon: "🎸",
    //     images: [
    //         image,
    //         image1,
    //     ],
    // },
];

// ── Single interest card with its own carousel ──
function InterestCard({ label, icon, images }: { label: string; icon: string; images: string[] }) {
    const [current, setCurrent] = useState(0);
    const hasMultiple = images.length > 1;

    const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
    const next = () => setCurrent((i) => (i + 1) % images.length);

    return (
        <div className={styles.card}>

            <img
                key={current}
                className={styles.image}
                src={images[current]}
                alt={label}
            />

            <div className={styles.overlay}>
                <h6 className={styles.text}>
                    <span className={'material-symbols-outlined ${styles.icon}'}>{icon}</span>
                    {label}
                </h6>
            </div>

            {/* Only show controls if more than one image */}
            {hasMultiple && (
                <div className={styles.controls}>
                    <button className={styles.arrow} onClick={prev} aria-label="Previous">
                        <ChevronLeft size={14} />
                    </button>

                    <div className={styles.dots}>
                        {images.map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button className={styles.arrow} onClick={next} aria-label="Next">
                        <ChevronRight size={14} />
                    </button>
                </div>
            )}

        </div>
    );
}

function Interests() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Personal Interests</h2>

                <div className={styles.grid}>
                    {INTERESTS.map((interest, i) => (
                        <InterestCard key={i} {...interest} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Interests;