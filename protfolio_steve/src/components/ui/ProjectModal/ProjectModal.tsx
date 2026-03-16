import { useEffect, useRef } from 'react';
import type { Project } from '@/pages/Projects/Projects.types';
import './ProjectModal.module.css';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) onClose();
    };

    if (!project) return null;

    return (
        <div className="modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
            <div className="modal-container" role="dialog" aria-modal="true">

                {/* ── Header ── */}
                <div className="modal-header">
                    <div className="modal-header-left">
                        <span className="modal-header-icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </span>
                        <div>
                            <p className="modal-project-name">{project.name}</p>
                            <p className="modal-archive-ref">{project.archiveRef}</p>
                        </div>
                    </div>
                    <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* ── Scrollable body ── */}
                <div className="modal-body">

                    {/* Hero */}
                    <div className="modal-hero">
                        <img src={project.image} alt={project.title} className="modal-hero-img" />
                        <div className="modal-hero-overlay">
                            <h1 className="modal-hero-title">{project.title}</h1>
                            <p className="modal-hero-subtitle">{project.subtitle}</p>
                        </div>
                    </div>

                    {/* Content grid */}
                    <div className="modal-content-grid">

                        {/* Left column */}
                        <div className="modal-left">
                            <section className="modal-section">
                                <h2 className="modal-section-heading">
                                    <span className="modal-section-icon">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <rect x="1" y="1" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
                                            <path d="M4 5h6M4 7.5h6M4 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    TECHNICAL SUMMARY
                                </h2>
                                {project.description.map((para, i) => (
                                    <p key={i} className="modal-body-text">{para}</p>
                                ))}
                            </section>

                            <section className="modal-section">
                                <h2 className="modal-section-heading">
                                    <span className="modal-section-icon">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                            <path d="M1 4h12M1 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M4 1v12M10 1v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    KEY OUTCOMES
                                </h2>
                                <ul className="modal-outcomes-list">
                                    {project.keyOutcomes.map((outcome, i) => (
                                        <li key={i} className="modal-outcome-item">
                                            <span className="modal-outcome-check">
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
                        <div className="modal-right">
                            <div className="modal-card">
                                <h3 className="modal-card-heading">
                                    <span className="modal-section-icon">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                                            <circle cx="6" cy="6" r="2" fill="currentColor" />
                                        </svg>
                                    </span>
                                    CORE TECHNOLOGIES
                                </h3>
                                <div className="modal-tags">
                                    {project.coreTech.map((tech) => (
                                        <span key={tech} className="modal-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-card">
                                <h3 className="modal-card-heading">
                                    <span className="modal-section-icon">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <rect x="1" y="1" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
                                            <path d="M4 4h4M4 6h4M4 8h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    SYSTEM SPECS
                                </h3>
                                <div className="modal-specs">
                                    {project.systemSpecs.map((spec) => (
                                        <div key={spec.label} className="modal-spec-row">
                                            <span className="modal-spec-label">{spec.label}</span>
                                            <span className="modal-spec-value">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Footer ── */}
                <div className="modal-footer">
                    <div className="modal-footer-actions">
                        <button className="modal-footer-btn">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <circle cx="11" cy="3" r="2" stroke="currentColor" strokeWidth="1.2" />
                                <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.2" />
                                <circle cx="3" cy="7" r="2" stroke="currentColor" strokeWidth="1.2" />
                                <path d="M5 6.1L9.1 4M5 7.9L9.1 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                            </svg>
                            SHARE_RESOURCE
                        </button>
                        <button className="modal-footer-btn">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M7 1v8M4 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            GET_DOCS.PDF
                        </button>
                    </div>
                    <div className="modal-footer-status">
                        <span>SYSTEM_STATUS:&nbsp;<span className="modal-status-value">{project.systemStatus}</span></span>
                        <span className="modal-footer-divider">//</span>
                        <span>VIEW_PORT:&nbsp;<span className="modal-status-value">{project.viewPort}</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}