import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.row}>
        <Link to='/' className={`${styles.icon} fa fa-tasks`} />
        <ul className={styles.list}>
          <li className={styles.col}>
            <Link to='/' className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.col}>
            <Link to='/favorite' className={styles.link}>
              Favorite
            </Link>
          </li>
          <li className={styles.col}>
            <Link to='/about' className={styles.link}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
