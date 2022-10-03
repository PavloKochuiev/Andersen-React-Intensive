export const isValid = (values) => {
    const errors = {};
    const regexNameSurname = /[A-Z]|[А-Я]/u;
    const regexSite = /\b(http|https)/;

    if (!values.name) {
      errors.name = 'Поле имя пустое!';
    } else if (!regexNameSurname.test(values.name)) {
      errors.name = 'Это не валидное имя! Первая буква должна быть заглавной.';
    }

    if (!values.surname) {
      errors.surname = 'Поле фамилия пустое!';
    } else if (!regexNameSurname.test(values.surname)) {
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
      errors.site = 'Это не валидный адрес! Адрес должен начинаться с https:// .';
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
