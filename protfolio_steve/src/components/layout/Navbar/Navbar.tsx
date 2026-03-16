import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';
import resumePDF from '@/assets/SteveBeriak_Resume.pdf';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>

                    <Link to="/" className={styles.logo} onClick={closeMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className={styles.logoIcon}
                        >
                            <path d="M2 2H8.6667V8.6667H15.3333V15.3333H22V22H2V2Z" fill="#808080" />
                        </svg>
                        <div>STEVE BERIAK</div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className={styles.nav}>
                        <a href="/#journey">JOURNEY</a>
                        <Link to="/projects">PROJECTS</Link>
                        <a href="/#goals">GOALS</a>
                        <a href="/#contact">CONTACT</a>
                    </nav>

                    {/* Desktop resume button */}
                    <a
                        href={resumePDF}
                        download="SteveBeriak_Resume.pdf"
                        className={styles.resumeButton}
                    >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.resumeLogo}>
                            <path d="M4.66667 7L1.75 4.08333L2.56667 3.2375L4.08333 4.75417V0H5.25V4.75417L6.76667 3.2375L7.58333 4.08333L4.66667 7ZM1.16667 9.33333C0.845833 9.33333 0.571181 9.2191 0.342708 8.99063C0.114236 8.76215 0 8.4875 0 8.16667V6.41667H1.16667V8.16667H8.16667V6.41667H9.33333V8.16667C9.33333 8.4875 9.2191 8.76215 8.99063 8.99063C8.76215 9.2191 8.4875 9.33333 8.16667 9.33333H1.16667Z" fill="white" />
                        </svg>
                        <div>RESUME</div>
                    </a>

                    {/* Hamburger button — mobile only */}
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span className={`${styles.bar} ${menuOpen ? styles.barTopOpen : ''}`} />
                        <span className={`${styles.bar} ${menuOpen ? styles.barMidOpen : ''}`} />
                        <span className={`${styles.bar} ${menuOpen ? styles.barBotOpen : ''}`} />
                    </button>

                </div>
            </header>

            {/* Mobile dropdown */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <a href="/#journey" onClick={closeMenu}>JOURNEY</a>
                <Link to="/projects" onClick={closeMenu}>PROJECTS</Link>
                <a href="/#goals" onClick={closeMenu}>GOALS</a>
                <a href="/#contact" onClick={closeMenu}>CONTACT</a>
                <a
                    href={resumePDF}
                    download="SteveBeriak_Resume.pdf"
                    className={styles.mobileResume}
                    onClick={closeMenu}
                >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.66667 7L1.75 4.08333L2.56667 3.2375L4.08333 4.75417V0H5.25V4.75417L6.76667 3.2375L7.58333 4.08333L4.66667 7ZM1.16667 9.33333C0.845833 9.33333 0.571181 9.2191 0.342708 8.99063C0.114236 8.76215 0 8.4875 0 8.16667V6.41667H1.16667V8.16667H8.16667V6.41667H9.33333V8.16667C9.33333 8.4875 9.2191 8.76215 8.99063 8.99063C8.76215 9.2191 8.4875 9.33333 8.16667 9.33333H1.16667Z" fill="white" />
                    </svg>
                    RESUME
                </a>
            </div>
        </>
    );
}

export default Navbar;