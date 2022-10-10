import React from 'react';
import styles from './style.module.css';

function Title({ title }) {
  return <p className={styles.title}>{title}</p>;
}

export default Title;
