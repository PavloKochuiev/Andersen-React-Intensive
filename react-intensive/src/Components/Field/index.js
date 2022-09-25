import React, { Component } from 'react';
import styles from './style.module.css';
import InputMask from '../../Helpers/InputMask';

class Field extends Component {
  render() {
    return (
      <div>
        {this.props.inputs.map((item, i) => (
          <div key={i}>
            <label className={styles.label}>{item.label}</label>
            {item.name === 'tel' ? (
              <InputMask
                className={styles.input}
                type={item.type}
                name={item.name}
                placeholder={item.label}
                onChange={this.props.handleChange}
              />
            ) : (
              <input
                className={styles.input}
                type={item.type}
                name={item.name}
                value={this.props.formValues[item.name]}
                placeholder={item.label}
                onChange={this.props.handleChange}
              />
            )}
            {this.props.formErrors[item.name] ? <p className={styles.error}>{this.props.formErrors[item.name]}</p> : ''}
          </div>
        ))}

        {this.props.textareas.map((item, i) => (
          <div key={i}>
            <label className={styles.label}>{item.label}</label>
            {item.component === 'textarea' ? (
              <textarea
                className={styles.input}
                name={item.name}
                placeholder={item.label}
                value={this.props.formValues[item.name]}
                onChange={(e) => {
                  this.props.handleChange(e);
                  this.props.textareaLengthHandler(e);
                }}
                rows='7'
              ></textarea>
            ) : (
              ''
            )}
            {this.props.textareaLength[item.name] <= this.props.maxTextareaLength ? (
              <p className={styles.error}>
                Осталось {this.props.maxTextareaLength - this.props.textareaLength[item.name]}/
                {this.props.maxTextareaLength}
              </p>
            ) : (
              <p className={styles.error}>Превышен лимит символов</p>
            )}
            {this.props.formErrors[item.name] ? <p className={styles.error}>{this.props.formErrors[item.name]}</p> : ''}
          </div>
        ))}
      </div>
    );
  }
}

export default Field;
