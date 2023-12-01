import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = (props) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(props.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString({ value }));
    /*dispatch({
      type: 'UPDATE_SEARCHSTRING',
      payload: value,
    });*/
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
