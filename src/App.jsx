/**
 * @module App.jsx
 *  
 * @description This file is responsible for 
 *  
 * @exports App
 */
import Header from "./layout/header/Header"
import Landing from "./pages/landing/Landing";

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
    <main className={styles.container}>
    {/* <h1>App Page</h1> */}
    <Header/>
    <Landing/>
      
    </main>
  );
};

export default App;