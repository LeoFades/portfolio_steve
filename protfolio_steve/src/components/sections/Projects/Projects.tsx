import styles from "./Projects.module.css";

import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

export default function Projects() {

    const projects = [
        {
            id: "Project_01 / Hardware",
            title: "NEURAL_CORE_X",
            description:
                "Custom RISC-V implementation optimized for tensor operations in low-power environments.",
            image: project1
        },
        {
            id: "Project_02 / Software",
            title: "OS_KERNEL_LITE",
            description:
                "Real-time microkernel for safety-critical embedded systems with guaranteed execution bounds.",
            image: project2
        },
        {
            id: "Project_03 / VLSI",
            title: "3NM_PHYSICAL_IP",
            description:
                "Standard cell library optimization for ultra-deep submicron nodes targeting energy efficiency.",
            image: project3
        }
    ];

    return (
        <section id="projects" className={styles.section}>

            <div className={styles.container}>

                <h2 className={styles.title}>
                    Featured Projects
                </h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>

                            <img
                                src={project.image}
                                className={styles.image}
                                alt={project.title}
                            />

                            <div className={styles.overlay}>

                                <span className={styles.projectId}>
                                    {project.id}
                                </span>

                                <h4 className={styles.projectTitle}>
                                    {project.title}
                                </h4>

                                <p className={styles.description}>
                                    {project.description}
                                </p>

                            </div>

                        </div>
                    ))}
                </div>

                <div className={styles.buttonContainer}>
                    <button className={styles.Button}>
                        VIEW ALL
                    </button>
                </div>


            </div>

        </section>
    );
}