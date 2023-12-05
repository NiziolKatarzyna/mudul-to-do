import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = (props) => {
  const cards = useSelector((state) => getFavoriteCards(state.cards));

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.container}>
        <div className={styles.column}>
          {cards.length > 0 ? (
            <ul className={styles.cards}>
              {cards.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  isFavorite={card.isFavorite}
                  id={card.id}
                />
              ))}
            </ul>
          ) : (
            <p>No cards...</p>
          )}
        </div>
      </article>
    </div>
  );
};

export default Favorite;
