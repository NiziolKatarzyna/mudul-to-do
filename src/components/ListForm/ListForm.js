import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };
  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <label className={styles.label}>Title:</label>
      <TextInput
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className={styles.label}>Description:</label>
      <TextInput
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>
        <span>add list</span>
      </Button>
    </form>
  );
};
export default ListForm;
