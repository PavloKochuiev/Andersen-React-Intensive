import React from 'react';
import styles from './style.module.css';

class Title extends React.Component {
  render() {
    return (
        <p className={styles.title}>{this.props.title}</p>
    );
  }
}

export default Title;
