import React, { Component } from 'react';
import Input from '../Field/index';
import Button from '../Button/index';
import FilledForm from '../FilledForm/index';
import Title from '../Title/index';
import styles from './style.module.css';
import { isValid } from '../../Helpers/isValid';

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
      answers: value,
      errors: {},
      textareaLength: { about: 0, stack: 0, project: 0 },
      maxTextareaLength: 600,
      isSubmit: false,
      isFilledFormVisible: false,

      inputs: [
        { label: 'Имя', name: 'name', type: 'text', component: 'input' },
        { label: 'Фамилия', name: 'surname', type: 'text', component: 'input' },
        { label: 'Дата рождения', name: 'date', type: 'date', component: 'input' },
        { label: 'Номер телефона', name: 'tel', type: 'phone', component: 'input' },
        { label: 'Сайт', name: 'site', type: 'text', component: 'input' },
      ],
      multilineFields: [
        { label: 'О себе', name: 'about', type: 'text', component: 'textarea' },
        { label: 'Стак технологий', name: 'stack', type: 'text', component: 'textarea' },
        { label: 'Описание последнего проекта', name: 'project', type: 'text', component: 'textarea' },
      ],
      buttons: [
        { name: 'Отменить', type: 'reset' },
        { name: 'Сохранить', type: 'submit' },
      ],
    };

    this.handleTextareaLenght = this.handleTextareaLenght.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState((prevState) => ({
      answers: {
        ...prevState.answers,
        [name]: value,
      },
    }));
  };

  handleTextareaLenght = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState((prevState) => ({
      textareaLength: {
        ...prevState.textareaLength,
        [name]: value.length,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let data = this.isValid(this.state.answers);

    this.setState({ isSubmit: true });
    this.setState({ errors: data }, () => {
      const isFilledFormVisibleCondition =
        Object.keys(this.state.errors).length === 0 &&
        this.state.isSubmit &&
        this.state.textareaLength['about'] <= this.state.maxTextareaLength &&
        this.state.textareaLength['stack'] <= this.state.maxTextareaLength &&
        this.state.textareaLength['project'] <= this.state.maxTextareaLength;

      if (isFilledFormVisibleCondition) {
        this.setState({ isFilledFormVisible: true });
      }
    });
  };

  handleReset = () => {
    this.setState({
      answers: {
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
    this.setState({ errors: {} });
  };

  isValid = (values) => {
    isValid(values);
  };

  render() {
    return (
      <div className={styles.form}>
        {!this.state.isSubmit || !this.state.isFilledFormVisible ? (
          <form onSubmit={this.handleSubmit}>
            <Title title='Создание анкеты' />
            <Input
              inputs={this.state.inputs}
              multilineFields={this.state.multilineFields}
              answers={this.state.answers}
              errors={this.state.errors}
              textareaLength={this.state.textareaLength}
              maxTextareaLength={this.state.maxTextareaLength}
              handleChange={this.handleChange}
              handleTextareaLenght={this.handleTextareaLenght}
            />
            <Button buttons={this.state.buttons} handleReset={this.handleReset} />
          </form>
        ) : (
          <FilledForm
            inputs={this.state.inputs}
            multilineFields={this.state.multilineFields}
            answers={this.state.answers}
          />
        )}
      </div>
    );
  }
}

export default Form;
