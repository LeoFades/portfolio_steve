import styles from "./Projects.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectModal from "@/components/ui/ProjectModal/ProjectModal";
import type { Project } from "@/pages/Projects/Projects.types";
import projectsData from "@/data/projects.json";

export default function Projects() {
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Show first 3 projects from the JSON
    const featured = (projectsData as Project[]).slice(0, 3);

    return (
        <section id="projects" className={styles.section}>

            <div className={styles.container}>

                <h2 className={styles.title}>
                    Featured Projects
                </h2>

                <div className={styles.grid}>
                    {featured.map((project) => (
                        <div
                            key={project.id}
                            className={styles.card}
                            onClick={() => setSelectedProject(project)}
                        >
                            <img
                                src={project.image}
                                className={styles.image}
                                alt={project.title}
                            />

                            <div className={styles.overlay}>

                                <span className={styles.projectId}>
                                    {project.category} / {String(project.id).padStart(2, '0')}
                                </span>

                                <h4 className={styles.projectTitle}>
                                    {project.title}
                                </h4>

                                <p className={styles.description}>
                                    {project.summary}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.buttonContainer}>
                    <button
                        className={styles.Button}
                        onClick={() => navigate('/projects')}
                    >
                        VIEW ALL
                    </button>
                </div>

            </div>

            {/* Single modal instance outside the map */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />

        </section>
    );
}