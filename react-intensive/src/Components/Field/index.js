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
                handleChangeInputMask={this.props.handleChangeInputMask}
                onChange={this.props.handleChange}
              />
            ) : (
              <input
                className={styles.input}
                type={item.type}
                name={item.name}
                value={this.props.answers[item.name]}
                placeholder={item.label}
                onChange={this.props.handleChange}
              />
            )}
            {this.props.errors[item.name] ? <p className={styles.error}>{this.props.errors[item.name]}</p> : null}
          </div>
        ))}

        {this.props.multilineFields.map((item, i) => (
          <div key={i}>
            <label className={styles.label}>{item.label}</label>
            {item.component === 'textarea' ? (
              <textarea
                rows='7'
                className={styles.input}
                name={item.name}
                placeholder={item.label}
                value={this.props.answers[item.name]}
                onChange={(e) => {
                  this.props.handleChange(e);
                  this.props.handleTextareaLenght(e);
                }}
              ></textarea>
            ) : null}
            {this.props.textareaLength[item.name] <= this.props.maxTextareaLength ? (
              <p className={styles.error}>
                Осталось {this.props.maxTextareaLength - this.props.textareaLength[item.name]}/
                {this.props.maxTextareaLength} символов
              </p>
            ) : (
              <p className={styles.error}>Превышен лимит символов!</p>
            )}
            {this.props.errors[item.name] ? <p className={styles.error}>{this.props.errors[item.name]}</p> : null}
          </div>
        ))}
      </div>
    );
  }
}

export default Field;
