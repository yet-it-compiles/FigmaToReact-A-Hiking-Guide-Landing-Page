/**
 * @module Landing.jsx
 *  
 * @description 
 *  
 * @exports Landing
 */
import styles from './landing.module.scss';
import {BsArrowDown} from "react-icons/bs"

/**
 * @component Landing
 *
 * @description Responsible for 
 *
 * Accomplished by 
 *
 * @returns {JSX.Element} - An element that resembles 
 */
const Landing = () => {
  return (
    <main className={styles.container}>
      <div>
        <p>A Hiking Guide</p>
        <h1>Be Prepared For The <br/> Mountains And Beyond!</h1>
        <button>scroll down <BsArrowDown/></button>
      </div>
    </main>
  );
};
export default Landing;