import styles from './Background.module.css'
// import Particles from '../Particles/Particles'
import Grainient from '../Grainient/Grainient'

function Background() {
    return (

        <div className={styles.background}>
            {/* <div className={styles.particles}>
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
            </div> */}

            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Grainient
                    color1="#0a0609"
                    color2="#320f3d"
                    color3="#0f0826"
                    timeSpeed={0.25}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>
        </div>




    )
}

export default Background