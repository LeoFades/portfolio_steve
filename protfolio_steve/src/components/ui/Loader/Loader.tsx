import styles from "./Loader.module.css";
import CountUp from "../CountUp/CountUp";
import Beams from "@/components/Beams";

function Loader() {
    return (
        <div className={styles.loaderWrapper}>

            <div className={styles.background}>
                <Beams
                    beamWidth={3}
                    beamHeight={30}
                    beamNumber={20}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={30}
                />
            </div>
            <div className={styles.loaderContent}>

                <h1 className={styles.logo}>STEVE BERIAK</h1>





                <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={0.8}
                    className={styles.countUpText}
                />


            </div>
        </div>
    );
}

export default Loader;