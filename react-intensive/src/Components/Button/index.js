import React from 'react';
import styles from './style.module.css';

function Button({ buttons, handleReset }) {
  return (
    <div className={styles.buttons}>
      {buttons.map((item, i) => (
        <div key={i}>
          {item.type === 'reset' ? (
            <button className={styles.button} type={item.type} onClick={handleReset}>
              {item.name}
            </button>
          ) : (
            <button className={styles.button} type={item.type}>
              {item.name}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Button;
