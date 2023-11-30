import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const SearchForm = (props) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(props.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_SEARCHSTRING',
      payload: value,
    });
    setValue('');
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
