import React from 'react';
import styles from './style.module.css';

class Field extends React.Component {
  render() {
    return (
      <>
        <label className={styles.label} htmlFor={this.props.id}>
          {this.props.name}
        </label>
        <input className={styles.input} type={this.props.type} placeholder={this.props.name} id={this.props.id} />
      </>
    );
  }
}

export default Field;
