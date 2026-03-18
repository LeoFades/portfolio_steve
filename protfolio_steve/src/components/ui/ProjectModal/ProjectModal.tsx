import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '@/pages/Projects/Projects.types';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (!project) return;
        setCurrentImage(0);
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, project]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) onClose();
    };

    if (!project) return null;

    const images = project.images;
    const hasMultiple = images.length > 1;
    const prevImage = () => setCurrentImage((i) => (i - 1 + images.length) % images.length);
    const nextImage = () => setCurrentImage((i) => (i + 1) % images.length);

    return createPortal(
        <div className={styles.modalOverlay} ref={overlayRef} onClick={handleOverlayClick}>
            <div className={styles.modalContainer} role="dialog" aria-modal="true">

                {/* ── Header ── */}
                <div className={styles.modalHeader}>
                    <div className={styles.modalHeaderLeft}>
                        <span className={styles.modalHeaderIcon}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </span>
                        <div>
                            <p className={styles.modalProjectName}>{project.name}</p>
                            <p className={styles.modalArchiveRef}>{project.archiveRef}</p>
                        </div>
                    </div>
                    <button className={styles.modalCloseBtn} onClick={onClose} aria-label="Close modal">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* ── Scrollable body ── */}
                <div className={styles.modalBody}>

                    {/* ── Hero ── */}
                    <div className={styles.modalHero}>
                        <img
                            key={currentImage}
                            src={images[currentImage]}
                            alt={`${project.title} image ${currentImage + 1}`}
                            className={styles.modalHeroImg}
                        />
                        <div className={styles.modalHeroOverlay}>
                            <h1 className={styles.modalHeroTitle}>{project.title}</h1>
                            <p className={styles.modalHeroSubtitle}>{project.subtitle}</p>
                        </div>
                        {hasMultiple && (
                            <>
                                <button
                                    className={`${styles.heroArrow} ${styles.heroArrowLeft}`}
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    className={`${styles.heroArrow} ${styles.heroArrowRight}`}
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </>
                        )}
                    </div>

                    {/* ── Thumbnail strip ── */}
                    {hasMultiple && (
                        <div className={styles.thumbStrip}>
                            {images.map((src, i) => (
                                <button
                                    key={i}
                                    className={`${styles.thumb} ${i === currentImage ? styles.thumbActive : ''}`}
                                    onClick={() => setCurrentImage(i)}
                                    aria-label={`View image ${i + 1}`}
                                >
                                    <img src={src} alt={`Thumbnail ${i + 1}`} />
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Content grid */}
                    <div className={styles.modalContentGrid}>

                        {/* Left column */}
                        <div className={styles.modalLeft}>
                            <section className={styles.modalSection}>
                                <h2 className={styles.modalSectionHeading}>
                                    <span className={styles.modalSectionIcon}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <rect x="1" y="1" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M4 5h6M4 7.5h6M4 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    TECHNICAL SUMMARY
                                </h2>
                                {project.description.map((para, i) => (
                                    <p key={i} className={styles.modalBodyText}>{para}</p>
                                ))}
                            </section>

                            <section className={styles.modalSection}>
                                <h2 className={styles.modalSectionHeading}>
                                    <span className={styles.modalSectionIcon}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M1 4h12M1 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M4 1v12M10 1v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    KEY OUTCOMES
                                </h2>
                                <ul className={styles.modalOutcomesList}>
                                    {project.keyOutcomes.map((outcome, i) => (
                                        <li key={i} className={styles.modalOutcomeItem}>
                                            <span className={styles.modalOutcomeCheck}>
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                                                    <path d="M4.5 7L6.5 9L9.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Right column */}
                        <div className={styles.modalRight}>
                            <div className={styles.modalCard}>
                                <h3 className={styles.modalCardHeading}>
                                    <span className={styles.modalSectionIcon}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                                            <circle cx="6" cy="6" r="2" fill="currentColor" />
                                        </svg>
                                    </span>
                                    CORE TECHNOLOGIES
                                </h3>
                                <div className={styles.modalTags}>
                                    {project.coreTech.map((tech) => (
                                        <span key={tech} className={styles.modalTag}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.modalCard}>
                                <h3 className={styles.modalCardHeading}>
                                    <span className={styles.modalSectionIcon}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <rect x="1" y="1" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
                                            <path d="M4 4h4M4 6h4M4 8h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    SYSTEM SPECS
                                </h3>
                                <div className={styles.modalSpecs}>
                                    {project.systemSpecs.map((spec) => (
                                        <div key={spec.label} className={styles.modalSpecRow}>
                                            <span className={styles.modalSpecLabel}>{spec.label}</span>
                                            <span className={styles.modalSpecValue}>{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Footer ── */}
                <div className={styles.modalFooter}>

                    <div className={styles.modalFooterStatus}>
                        <span>SYSTEM_STATUS:&nbsp;<span className={styles.modalStatusValue}>{project.systemStatus}</span></span>
                        <span className={styles.modalFooterDivider}>//</span>
                        <span>VIEW_PORT:&nbsp;<span className={styles.modalStatusValue}>{project.viewPort}</span></span>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}