import React from 'react';
import styles from './style.module.css';

class Button extends React.Component {
  render() {
    return (
      <div className={styles.buttons}>
        {this.props.buttons.map((item, i) => (
          <div key={i}>
            {item.type === 'reset' ? (
              <button className={styles.button} type={item.type} onClick={this.props.handleReset}>
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
}

export default Button;
