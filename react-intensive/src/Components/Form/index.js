import Title from '../Title';
import Field from '../Field';
import MultilineField from '../MultilineField';
import Button from '../Button';
import React from 'react';
import styles from './style.module.css';

class Form extends React.Component {
  render() {
    return (
      <>
        <form className={styles.form}>
          <Title title='Создание анкеты' />
          <Field name='Имя' id='name' type='text' />
          <Field name='Фамилия' id='surname' type='text' />
          <Field name='Дата рождения' id='dateOfBirth' type='date' />
          <Field name='Номер телефона' id='phone' type='tel' />
          <Field name='Сайт' id='site' type='url' />
          <MultilineField name='О себе' id='about' rows='7' />
          <MultilineField name='Стек технологий' id='stack' rows='7' />
          <MultilineField name='Описание последнего проекта' id='lastProject' rows='7' />
          <div className={styles.buttons}>
            <Button name='Отменить' type='reset' />
            <Button name='Сохранить' type='submit' />
          </div>
        </form>
      </>
    );
  }
}

export default Form;
