import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = (props) => {
  const dispatch = useDispatch();
  //stan o wartości pustego stringa, dostęp pod stałą value, funkcja modyfikacjji pod stałą setValue
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    setTitle('');
    setIcon('');
  };
  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      {/* Comment: atrybut value = elementowi, który zwraca stała value. onChange będzie uruchamiał funkcję włączającą setValue z odpowiednią wartością */}
      <label className={styles.label}>Title:</label>
      <TextInput
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className={styles.label}>Icon:</label>
      <TextInput
        placeholder='Icon'
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>
        <span>add column</span>
      </Button>
    </form>
  );
};
export default ColumnForm;
