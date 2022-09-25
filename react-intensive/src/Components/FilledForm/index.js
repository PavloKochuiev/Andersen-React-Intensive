import React, { Component } from 'react';
import styles from './style.module.css';

class FilledForm extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.formValues['name']} {this.props.formValues['surname']}
        </h1>
        {this.props.inputs.map((item, i) => (
          <div key={i} className={styles.input}>
              {item.label}: {this.props.formValues[item.name]}
          </div>
        ))}
        {this.props.textareas.map((item, i) => (
          <div key={i} className={styles.input}>
              {item.label}: {this.props.formValues[item.name]}
          </div>
        ))}
      </div>
    );
  }
}

export default FilledForm;
