/**
 * @module Header.jsx
 *  
 * @description 
 *  
 * @exports Header
 */

import styles from './header.module.scss';

const PAGE_LINKS = [
    {name: "Equipment", link: "/"}, 
    {name: "About Us", link: "/"}, 
    {name: "Blog", link: "/"}, 
]

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
      <section><h1>MNTN</h1></section>

      <section>
        <ul>
            {PAGE_LINKS.map((eachLink, index) => (
                <li key={index}>{eachLink.name}</li>
            ))}
        </ul>
      </section>

      <button type="submit">Account</button>
    </nav>
  );
};
export default Header;