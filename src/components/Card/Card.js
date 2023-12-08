import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id)); // Przekazujemy id karty do akcji
  };

  const handleRemoveCard = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };
  return (
    <li className={styles.card}>
      <span>{props.title}</span>
      <button
        className={`${styles.icon} fa fa-star-o ${
          props.isFavorite ? styles.isFavorite : ''
        }`}
        onClick={handleToggleFavorite} // Wywołujemy funkcję po kliknięciu przycisku
      />
      <button
        className={`${styles.icon} fa fa-trash`}
        onClick={handleRemoveCard}
      />
    </li>
  );
};

export default Card;
