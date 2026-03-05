import styles from "./ProjectModal.module.css";

type ProjectModalProps = {
    open: boolean;
    onClose: () => void;
};

function ProjectModal({ open, onClose }: ProjectModalProps) {
    if (!open) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>

            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                {/* HEADER */}
                <header className={styles.header}>

                    <div className={styles.headerLeft}>

                        <span className="material-symbols-outlined">
                            developer_board
                        </span>

                        <div>
                            <h2 className={styles.projectEntry}>Project Entry</h2>
                            <p className={styles.projectRef}>
                                ARCHIVE_REF: 3NM_PHYSICAL_IP_V1
                            </p>
                        </div>

                    </div>

                    <button
                        className={styles.closeBtn}
                        onClick={onClose}
                    >
                        <span className="material-symbols-outlined">
                            close
                        </span>
                        BACK TO MATRIX
                    </button>

                </header>

                {/* BODY */}
                <div className={styles.content}>

                    {/* HERO */}
                    <div className={styles.hero}>

                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDClbr85ZoO9jrDC9v_lCozRV-soPFLIxTgDBPE6VjAERuwqXPDI_emFMRsqsqePDECGCnj41wAYZxH55zMvaOPbOSjft-bWO1YiBW2-RElVQE2reVHkuNQOhx_oXe55hbVbTAqMRVZHA0alqHtK4M9Gb3deEHy8BG2GOhga1c4Q_SbtCAsp4296FopOV82J6_eBQw0tnfhjgWRc8O6-9WRH7a7IplD6lGhhiE3pYR5hpNPJjG-nqyLA3O2pGEBhUFofXlXglZcUzQ"
                            className={styles.heroImage}
                        />

                        <div className={styles.heroText}>
                            <h1>3NM_PHYSICAL_IP</h1>
                            <p>Next-Generation Silicon Architecture & Verification</p>
                        </div>

                    </div>

                    {/* GRID */}
                    <div className={styles.grid}>

                        <div className={styles.leftColumn}>

                            <section>

                                <h3 className={styles.sectionTitle}>
                                    <span className="material-symbols-outlined">
                                        description
                                    </span>
                                    Technical Summary
                                </h3>

                                <p>
                                    This project involved the architectural design and physical
                                    implementation of high-performance logic IP optimized for
                                    the 3nm FinFET process.
                                </p>

                            </section>

                            <section>

                                <h3 className={styles.sectionTitle}>
                                    <span className="material-symbols-outlined">
                                        checklist_rtl
                                    </span>
                                    Key Outcomes
                                </h3>

                                <ul className={styles.list}>

                                    <li>
                                        <span className="material-symbols-outlined">
                                            check_circle
                                        </span>
                                        Successful tape-out with zero critical DRC violations.
                                    </li>

                                    <li>
                                        <span className="material-symbols-outlined">
                                            check_circle
                                        </span>
                                        12% reduction in cell area.
                                    </li>

                                    <li>
                                        <span className="material-symbols-outlined">
                                            check_circle
                                        </span>
                                        Automated IR-drop verification script.
                                    </li>

                                </ul>

                            </section>

                        </div>

                        <div className={styles.rightColumn}>

                            <section className={styles.techBox}>

                                <h3>Core Technologies</h3>

                                <div className={styles.tags}>

                                    <span>Verilog</span>
                                    <span>Cadence Innovus</span>
                                    <span>VLSI</span>
                                    <span>FinFET 3nm</span>
                                    <span>TCL</span>

                                </div>

                            </section>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProjectModal;