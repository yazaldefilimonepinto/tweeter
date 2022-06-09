import styles from '@/styles/components/Header/styles.module.scss';
import profile from '@/assets/images/profile.jpeg';
import { NavLink } from './Link';
export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <svg width="41" height="30" viewBox="0 0 41 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.1752 23.5172L31.1324 14.7828C30.7713 14.1574 29.8686 14.1574 29.5075 14.7828L24.4647 23.5172C24.1036 24.1426 24.555 24.9244 25.2771 24.9244H35.3628C36.0849 24.9244 36.5363 24.1427 36.1752 23.5172ZM35.1947 12.4375C33.0281 8.6849 27.6118 8.68491 25.4452 12.4375L20.4024 21.1719C18.2359 24.9244 20.9441 29.6151 25.2771 29.6151H35.3628C39.6958 29.6151 42.404 24.9244 40.2375 21.1719L35.1947 12.4375Z"
              fill="#2F80ED"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.6734 23.3664L16.5616 5.85216C16.2005 5.22674 15.2978 5.22673 14.9367 5.85217L4.82479 23.3664C4.46371 23.9918 4.91507 24.7736 5.63725 24.7736H25.861C26.5832 24.7736 27.0345 23.9919 26.6734 23.3664ZM20.6238 3.50681C18.4573 -0.245762 13.0409 -0.245757 10.8744 3.50681L0.76252 21.0211C-1.40403 24.7736 1.30416 29.4644 5.63725 29.4644H25.861C30.1941 29.4644 32.9023 24.7736 30.7357 21.0211L20.6238 3.50681Z"
              fill="#2F80ED"
            />
          </svg>
          tweeter
        </a>
        <div className={styles.nav__menu}>
          <ul className={styles.nav__list}>
            <li>
              <NavLink title="Home" path="/">
                <i className={`${styles.nav__icon} bx bx-home`}></i>
              </NavLink>
            </li>

            <li>
              <NavLink title="Explore" path="/explore">
                <i className={`${styles.nav__icon} bx bx-bolt-circle`}></i>
              </NavLink>
            </li>

            <li>
              <NavLink title="BookMarks" path="/bookmarks">
                <i className={`${styles.nav__icon} bx bx-bookmark`}></i>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.profile}>
          <div className={styles.nav__img}>
            <img src={profile.src} alt="profile" />
          </div>
          <span className={styles.profile__name}>Daniel Jensen</span>
          <i className={`${styles.icon} bx bx-caret-down`}></i>
        </div>
      </nav>
    </header>
  );
}
