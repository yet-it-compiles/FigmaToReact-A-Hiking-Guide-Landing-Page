/**
 * @module SideNav.jsx
 *  
 * @description 
 *  
 * @exports SideNav
 */
import styles from './side-nav.module.scss';

/**
 * @component SideNav
 *
 * @description 
 *
 * @returns {JSX.Element}
 */
const SideNav = () => {
  return (
    <nav className={styles.container}>
      <h1>SideNav Page</h1>
    </nav>
  );
};
export default SideNav;