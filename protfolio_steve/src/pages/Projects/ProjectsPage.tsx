import { useState, useMemo } from 'react';
import type { Project } from './Projects.types';
import projectsData from '@/data/projects.json';
import ProjectModal from '@/components/ui/ProjectModal/ProjectModal';
import styles from './ProjectsPage.module.css';
import AnimatedContent from '@/components/ui/FloatIn/FloatIn';

type Category = 'All Projects' | 'Hardware' | 'Software' | 'VLSI' | 'Research';
type SortOption = 'Recent' | 'Alphabetical';

const CATEGORIES: Category[] = ['All Projects', 'Hardware', 'Software', 'VLSI', 'Research'];
const SORT_OPTIONS: SortOption[] = ['Recent', 'Alphabetical'];
const ITEMS_PER_PAGE = 6;

const CATEGORY_ICONS: Partial<Record<Category, React.ReactNode>> = {
    Hardware: (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="6.5" cy="6.5" r="2" fill="currentColor" />
        </svg>
    ),
    Software: (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M3 4.5L1 6.5L3 8.5M10 4.5L12 6.5L10 8.5M7.5 3L5.5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    VLSI: (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <rect x="2" y="2" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <rect x="4.5" y="4.5" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1" />
        </svg>
    ),
    Research: (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="5.5" cy="5.5" r="3.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M8.5 8.5L11.5 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
    ),
};

const CATEGORY_COLORS: Partial<Record<Project['category'], { bg: string; color: string; border: string }>> = {
    Hardware: { bg: '#1a1a0d', color: '#b5a84e', border: '#2a280f' },
    Software: { bg: '#0d1a1a', color: '#4ea0b5', border: '#0f2828' },
    VLSI: { bg: '#1a0d1a', color: '#b54ea0', border: '#280f28' },
    Research: { bg: '#0d1a0d', color: '#4eb55a', border: '#0f280f' },
};

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('All Projects');
    const [sortBy, setSortBy] = useState<SortOption>('Recent');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showTip, setShowTip] = useState(true);

    const filtered = useMemo(() => {
        let list = [...(projectsData as Project[])];
        if (activeCategory !== 'All Projects') {
            list = list.filter((p) => p.category === activeCategory);
        }
        if (sortBy === 'Alphabetical') {
            list.sort((a, b) => a.title.localeCompare(b.title));
        }
        return list;
    }, [activeCategory, sortBy]);

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginated = filtered.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleCategoryChange = (cat: Category) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value as SortOption);
        setCurrentPage(1);
    };

    const getPaginationRange = (): (number | '...')[] => {
        if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
        if (currentPage <= 3) return [1, 2, 3, '...', totalPages];
        if (currentPage >= totalPages - 2) return [1, '...', totalPages - 2, totalPages - 1, totalPages];
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    };

    return (
        <div className={styles.projectsContainer}>
            <AnimatedContent>
                <div className={styles.projectsPage}>

                    {/* ── Page header ── */}
                    <header className={styles.projectsHeader}>
                        <h1 className={styles.projectsTitle}>ALL PROJECTS</h1>
                        <p className={styles.projectsSubtitle}>
                            A comprehensive repository of engineering ventures, technical<br />
                            implementations, and architectural explorations across multiple domains.
                        </p>
                    </header>

                    {/* ── Filters row ── */}
                    <div className={styles.projectsFiltersRow}>
                        <div className={styles.projectsFilterTabs}>
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    className={`${styles.filterTab} ${activeCategory === cat ? styles.filterTabActive : ''}`}
                                    onClick={() => handleCategoryChange(cat)}
                                >
                                    {cat !== 'All Projects' && (
                                        <span className={styles.filterTabIcon}>{CATEGORY_ICONS[cat]}</span>
                                    )}
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className={styles.projectsSort}>
                            <span className={styles.sortLabel}>Sort by:</span>
                            <select className={styles.sortSelect} value={sortBy} onChange={handleSortChange}>
                                {SORT_OPTIONS.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                            <span className={styles.sortChevron}>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* ── Grid ── */}
                    {paginated.length > 0 ? (
                        <div className={styles.projectsGrid}>
                            {paginated.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    onClick={() => setSelectedProject(project)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className={styles.projectsEmpty}>
                            <p>No projects found in this category.</p>
                        </div>
                    )}

                    {/* ── Pagination ── */}
                    {totalPages > 1 && (
                        <div className={styles.projectsPagination}>
                            <button
                                className={`${styles.pageBtn} ${styles.pageBtnArrow}`}
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                aria-label="Previous page"
                            >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M7.5 2L3.5 6L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {getPaginationRange().map((item, i) =>
                                item === '...' ? (
                                    <span key={`ellipsis-${i}`} className={styles.pageEllipsis}>…</span>
                                ) : (
                                    <button
                                        key={item}
                                        className={`${styles.pageBtn} ${currentPage === item ? styles.pageBtnActive : ''}`}
                                        onClick={() => setCurrentPage(item as number)}
                                    >
                                        {item}
                                    </button>
                                )
                            )}

                            <button
                                className={`${styles.pageBtn} ${styles.pageBtnArrow}`}
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                aria-label="Next page"
                            >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M4.5 2L8.5 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* ── Pro-tip banner ── */}
                    {showTip && (
                        <div className={styles.projectsTip}>
                            <span className={styles.projectsTipIcon}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                                    <path d="M7 6.5v4M7 4.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </span>
                            <div>
                                <p className={styles.tipTitle}>Pro-tip</p>
                                <p className={styles.tipBody}>Click any project card to open its technical specification modal and performance benchmarks.</p>
                            </div>
                            <button className={styles.tipDismiss} onClick={() => setShowTip(false)}>Dismiss</button>
                        </div>
                    )}

                    {/* ── Modal ── */}
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </div>
            </AnimatedContent>
        </div>
    );
}

/* ── Card sub-component ── */
interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
    const catStyle = CATEGORY_COLORS[project.category] ?? { bg: '#1a1a1a', color: '#888', border: '#2a2a2a' };

    return (
        <article
            className={styles.projectCard}
            onClick={onClick}
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => { if (e.key === 'Enter') onClick(); }}
        >
            <div className={styles.cardImageWrap}>
                <img src={project.image} alt={project.title} className={styles.cardImage} />
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardTitleRow}>
                    <h2 className={styles.cardTitle}>{project.title}</h2>
                    <span
                        className={styles.cardBadge}
                        style={{
                            background: catStyle.bg,
                            color: catStyle.color,
                            borderColor: catStyle.border,
                        }}
                    >
                        {project.category.toUpperCase()}
                    </span>
                </div>
                <p className={styles.cardSummary}>{project.summary}</p>
                <div className={styles.cardTags}>
                    {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={styles.cardTag}>{tag}</span>
                    ))}
                </div>
            </div>
        </article>
    );
}