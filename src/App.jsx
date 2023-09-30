/**
 * @module App.jsx
 *  
 * @description This file is responsible for 
 *  
 * @exports App
 */
import Header from "./layout/header/Header"
import Landing from "./pages/landing/Landing";
import SideNav from "./layout/side-nav/SideNav"

import styles from "./app.module.scss"

/**
 * @component App
 *
 * @description 
 *
 * @returns {JSX.Element}
 */
const App = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <Landing/>
      <SideNav/>
    </div>
  );
};

export default App;