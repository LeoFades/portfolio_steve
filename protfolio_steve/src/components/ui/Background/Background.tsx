import styles from './Background.module.css'
import Particles from '../Particles/Particles'

function Background() {
    return (

        <div className={styles.background}>
            <div className={styles.particles}>
                <Particles
                    particleColors={["#ffffff"]}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div>
        </div>




    )
}

export default Background