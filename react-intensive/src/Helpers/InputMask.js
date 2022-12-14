import React, { useState, useEffect, useRef } from 'react';
import styles from './style.module.css';

const InputMask = () => {
  const [card, setCard] = useState();
  const inputCard = useRef();

  const handleChangeInputMask = () => {
    const cardValue = inputCard.current.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);
    inputCard.current.value = !cardValue[2]
      ? cardValue[1]
      : `${cardValue[1]}-${cardValue[2]}${`${cardValue[3] ? `-${cardValue[3]}` : ''}`}${`${
          cardValue[4] ? `-${cardValue[4]}` : ''
        }`}`;
    const numbers = inputCard.current.value.replace(/(\D)/g, '');
    setCard(numbers);
  };

  useEffect(() => {
    handleChangeInputMask();
  }, [card]);

  return (
    <>
      <input className={styles.input} type='text' ref={inputCard} onChange={handleChangeInputMask} />
    </>
  );
};

export default InputMask;
