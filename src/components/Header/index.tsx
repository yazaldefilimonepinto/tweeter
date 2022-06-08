import styles from '@/styles/components/Header/styles.module.scss';
import profile from '@/assets/images/profile.jpeg';
export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#">tweeter</a>
        <div>
          <ul>
            <li>
              <a href="#home">
                <i className="bx bx-home"></i>
                <span>Home</span>
              </a>
            </li>

            <li>
              <a href="#explore">
                <i className="bx bx-bolt-circle"></i>
                <span>Explore</span>
              </a>
            </li>

            <li>
              <a href="#bookmarks">
                <i className="bx bx-bookmark"></i>
                <span>BookMarks</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.profile}>
          <div className={styles.nav__img}>
            <img src={profile.src} alt="profile" />
          </div>
          <span>Daniel Jensen</span>
          <i className="bx bx-caret-down"></i>
        </div>
      </nav>
    </header>
  );
}
