import styles from './NavBar.module.scss';
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.row}>
        <a href='/' className={`${styles.icon} fa fa-tasks`}></a>
        <ul className={styles.list}>
          <li className={styles.col}>
            <a className={styles.link} href='/'>
              Home
            </a>
          </li>
          <li className={styles.col}>
            <a className={styles.link} href='/favorite'>
              Favorite
            </a>
          </li>
          <li className={styles.col}>
            <a className={styles.link} href='/about'>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
