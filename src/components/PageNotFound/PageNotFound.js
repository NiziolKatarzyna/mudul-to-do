import styles from './PageNotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const PageNotFound = () => {
  return (
    <div className={styles.pageNotFound}>
      <PageTitle>404 not found</PageTitle>
    </div>
  );
};

export default PageNotFound;
