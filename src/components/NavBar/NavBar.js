import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.row}>
        <Link to='/' className={`${styles.icon} fa fa-tasks`} />
        <ul className={styles.list}>
          <li className={styles.col}>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.linkActive : undefined}`
              }
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li className={styles.col}>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.linkActive : undefined}`
              }
              to='/favorite'
            >
              Favorite
            </NavLink>
          </li>
          <li className={styles.col}>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.linkActive : undefined}`
              }
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
