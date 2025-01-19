// src/pages/Home.js
import React from 'react';
import styles from './Home.module.css'; // Import CSS Module

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to FinHacks Finance</h1>
      <p>Empowering your financial journey with innovative solutions.</p>
      <button className={styles.ctaButton}>
        Get Started
      </button>
    </div>
  );
};

export default Home;
