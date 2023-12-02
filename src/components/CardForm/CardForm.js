import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title, columnId: props.columnId }));

    /*dispatch({
      type: 'ADD_CARD',
      payload: { title },
      columnId: props.columnId,
    });*/
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
