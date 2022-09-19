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
        <Title />
        <Field />
        <Field />
        <Field />
        <Field />
        <Field />
        <MultilineField />
        <MultilineField />
        <MultilineField />
        <div>
          <Button />
          <Button />
        </div>
      </>
    );
  }
}

export default Form;
