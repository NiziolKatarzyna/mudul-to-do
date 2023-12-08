import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';

const Favorite = () => {
  const cards = useSelector(getFavoriteCards);

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.container}>
        <div className={styles.column}>
          {cards.length ? (
            <ul className={styles.cards}>
              {cards.map((card) => (
                <Card key={card.id} {...card} />
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
