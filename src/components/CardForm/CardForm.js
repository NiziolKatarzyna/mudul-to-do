import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = (props) => {
  //stan o wartości pustego stringa, dostęp pod stałą value, funkcja modyfikacjji pod stałą setValue
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title }, props.columnId);
    setTitle('');
  };
  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      {/* Comment: atrybut value = elementowi, który zwraca stała value. onChange będzie uruchamiał funkcję włączającą setValue z odpowiednią wartością */}

      <TextInput
        placeholder=''
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Button>
        <span>add Card </span>
      </Button>
    </form>
  );
};
export default CardForm;
