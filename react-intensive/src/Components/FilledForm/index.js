import React, { Component } from 'react';
import styles from './style.module.css';

class FilledForm extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.answers['name']} {this.props.answers['surname']}
        </h1>
        {this.props.inputs.map((item, i) => (
          <div key={i} className={styles.input}>
            {item.label}: {this.props.answers[item.name]}
          </div>
        ))}
        {this.props.multilineFields.map((item, i) => (
          <div key={i} className={styles.input}>
            {item.label}: {this.props.answers[item.name]}
          </div>
        ))}
      </div>
    );
  }
}

export default FilledForm;
