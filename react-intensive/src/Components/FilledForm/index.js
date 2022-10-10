import React from 'react';
import styles from './style.module.css';

function FilledForm({inputs, multilineFields, answers}) {
  return (
    <div>
        <div>
          <h3>{answers['name']} {answers['surname']}</h3>
          {inputs.map((item, i) => (
            <div key={i} className={styles.input}>
              <div>{item.label}: {answers[item.name]}</div>
            </div>
          ))}
          {multilineFields.map((item, i) => (
            <div key={i} className={styles.input}>
              <div>{item.label}: {answers[item.name]}</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default FilledForm;