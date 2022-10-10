import React from 'react';
import InputMask from '../../Helpers/InputMask';
import styles from './style.module.css';

function Field({
  inputs,
  multilineFields,
  answers,
  errors,
  textareaLength,
  maxTextareaLength,
  handleChange,
  handleChangeInputMask,
  multilineLenghtChangeHandler,
}) {
  return (
    <div>
      {inputs.map((item, i) => (
        <div key={i}>
          <label className={styles.label}>{item.label}:</label>
          {item.name === 'tel' ? (
            <InputMask
              className={styles.input}
              type={item.type}
              name={item.name}
              placeholder={item.label}
              handleChangeInputMask={handleChangeInputMask}
              onChange={handleChange}
            />
          ) : (
            <input
              className={styles.input}
              type={item.type}
              name={item.name}
              value={answers[item.name]}
              placeholder={item.label}
              onChange={handleChange}
            />
          )}
          {errors[item.name] ? <p className={styles.error}>{errors[item.name]}</p> : null}
        </div>
      ))}

      {multilineFields.map((item, i) => (
        <div key={i}>
          <label className={styles.label}>{item.label}:</label>
          {item.component === 'textarea' ? (
            <textarea
              name={item.name}
              placeholder={item.label}
              value={answers[item.name]}
              onChange={(e) => {
                handleChange(e);
                multilineLenghtChangeHandler(e);
              }}
              rows='7'
            ></textarea>
          ) : null}
          {textareaLength[item.name] <= maxTextareaLength ? (
            <p className={styles.error}>
              Осталось {maxTextareaLength - textareaLength[item.name]}/{maxTextareaLength}
            </p>
          ) : (
            <p className={styles.error}>Превышен лимит символов в поле</p>
          )}
          {errors[item.name] ? <p className={styles.error}>{errors[item.name]}</p> : ''}
        </div>
      ))}
    </div>
  );
}

export default Field;
