/**
 * @module Header.jsx
 *  
 * @description 
 *  
 * @exports Header
 */

import styles from './header.module.scss';

/**
 * @component Header
 *
 * @description 
 *
 * @returns {JSX.Element}
 */
const Header = () => {
  return (
    <nav className={styles.container}>
      <h1>Header Page</h1>
    </nav>
  );
};
export default Header;