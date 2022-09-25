import React, { Component } from 'react';
import Input from '../Field/index';
import Button from '../Button/index';
import FilledForm from '../FilledForm/index';
import Title from '../Title/index';
import styles from './style.module.css';

class Form extends Component {
  constructor() {
    super();

    const value = {
      name: '',
      surname: '',
      date: '',
      tel: '',
      site: '',
      about: '',
      stack: '',
      project: '',
    };

    this.state = {
      inputs: [
        { label: 'Имя', name: 'name', type: 'text', component: 'input' },
        { label: 'Фамилия', name: 'surname', type: 'text', component: 'input' },
        { label: 'Дата рождения', name: 'date', type: 'date', component: 'input' },
        { label: 'Номер телефона', name: 'tel', type: 'phone', component: 'input' },
        { label: 'Сайт', name: 'site', type: 'text', component: 'input' },
      ],
      textareas: [
        { label: 'О себе', name: 'about', type: 'text', component: 'textarea' },
        { label: 'Стак технологий', name: 'stack', type: 'text', component: 'textarea' },
        { label: 'Описание последнего проекта', name: 'project', type: 'text', component: 'textarea' },
      ],
      buttons: [
        { name: 'Отменить', type: 'reset' },
        { name: 'Сохранить', type: 'submit' },
      ],
      formValues: value,
      formErrors: {},
      maxTextareaLength: 600,
      textareaLength: { about: 0, stack: 0, project: 0 },
      isSubmit: false,
      answersFormVisibility: false,
    };

    this.textareaLengthHandler = this.textareaLengthHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateFunction = this.validateFunction.bind(this);
    this.resetFunction = this.resetFunction.bind(this);
  }

  textareaLengthHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState((prevState) => ({
      textareaLength: {
        ...prevState.textareaLength,
        [name]: value.length,
      },
    }));
  };

  handleChange = (e) => {
    let { name, value } = e.target;

    this.setState((prevState) => ({
      formValues: {
        ...prevState.formValues,
        [name]: value.trim(),
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let result = this.validateFunction(this.state.formValues);

    this.setState({ isSubmit: true });
    this.setState({ formErrors: result }, () => {
      const answersFormVisibilityCondition =
        Object.keys(this.state.formErrors).length === 0 &&
        this.state.isSubmit &&
        this.state.textareaLength['about'] <= this.state.maxTextareaLength &&
        this.state.textareaLength['stack'] <= this.state.maxTextareaLength &&
        this.state.textareaLength['project'] <= this.state.maxTextareaLength;

      if (answersFormVisibilityCondition) {
        this.setState({ answersFormVisibility: true });
      }
    });
  };

  validateFunction = (values) => {
    const errors = {};
    const regexName = /[A-Z]|[А-Я]/u;
    const regexSite = /\b(http|https)/;

    if (!values.name) {
      errors.name = 'Поле имя пустое!';
    } else if (!regexName.test(values.name)) {
      errors.name = 'Это не валидное имя! Первая буква должна быть заглавной.';
    }
    if (!values.surname) {
      errors.surname = 'Поле фамилия пустое!';
    } else if (!regexName.test(values.surname)) {
      errors.surname = 'Это не валидное имя! Первая буква должна быть заглавной.';
    }
    if (!values.date) {
      errors.date = 'Поле дата рождения пустое!';
    }
    if (!values.tel) {
      errors.tel = 'Поле телефон пустое!';
    } else if (values.tel.length < 12) {
      errors.tel = 'Это не валидный номер!';
    }
    if (!values.site) {
      errors.site = 'Поле сайт пустое!';
    } else if (!regexSite.test(values.site)) {
      errors.site = 'Это не валидный адресс! Адрес должен начинаться с https:// .';
    }
    if (!values.about) {
      errors.about = 'Поле о себе пустое!';
    }
    if (!values.stack) {
      errors.stack = 'Поле стак технологий пустое!';
    }
    if (!values.project) {
      errors.project = 'Поле описание последнего проекта пустое!';
    }

    return errors;
  };

  resetFunction = () => {
    this.setState({
      formValues: {
        name: '',
        surname: '',
        date: '',
        tel: '',
        site: '',
        about: '',
        stack: '',
        project: '',
      },
    });
    this.setState({ formErrors: {} });
    this.setState({ isSubmit: false });
  };

  render() {
    return (
      <div className={styles.form}>
        {!this.state.answersFormVisibility || !this.state.isSubmit ? (
          <form onSubmit={this.handleSubmit}>
            <Title title='Создание анкеты' />
            <Input
              inputs={this.state.inputs}
              textareas={this.state.textareas}
              formValues={this.state.formValues}
              formErrors={this.state.formErrors}
              textareaLength={this.state.textareaLength}
              maxTextareaLength={this.state.maxTextareaLength}
              handleChange={this.handleChange}
              textareaLengthHandler={this.textareaLengthHandler}
            />
            <Button buttons={this.state.buttons} resetFunction={this.resetFunction} />
          </form>
        ) : (
          <FilledForm inputs={this.state.inputs} textareas={this.state.textareas} formValues={this.state.formValues} />
        )}
      </div>
    );
  }
}

export default Form;
