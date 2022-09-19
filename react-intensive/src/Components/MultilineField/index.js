import React from 'react';
import styles from './style.module.css';

class MultilineField extends React.Component {
  render() {
    return (
      <>
        <p className={styles.title}>{this.props.title}</p>
        <textarea
          className={styles.textArea}
          type={this.props.type}
          placeholder={this.props.name}
          id={this.props.id}
          rows={this.props.rows}
        ></textarea>
      </>
    );
  }
}

export default MultilineField;
