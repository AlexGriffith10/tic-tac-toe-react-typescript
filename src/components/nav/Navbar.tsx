import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export const NavBar: React.FC = () => {
return (
    <div className={styles.NavMenu}>
        <nav className={styles.Nav}>
      <NavLink to='/about' className={styles.NavLink}>
        About
      </NavLink>
      <NavLink to='/contact' className={styles.NavLink}>
        Contact
      </NavLink>
      <NavLink to='/play' className={styles.NavLink}>
        Play
      </NavLink>
    </nav>
    </div>
)
}
