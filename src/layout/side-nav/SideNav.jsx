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
      <ul>
        <li>Start</li>
        <li>01</li>
        <li>02</li>
        <li>03</li>
      </ul>
    </nav>
  );
};
export default SideNav;