import React from 'react';
import styles from './style.module.css';

class Button extends React.Component {
  render() {
    return <>
        <button className={styles.button} type={this.props.type}>{this.props.title}</button>
        </>;
  }
}

export default Button;