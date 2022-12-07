import styles from './styles.module.scss';

/* eslint-disable-next-line */
export interface StylesProps {}

export function Styles(props: StylesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Styles!</h1>
    </div>
  );
}

export default Styles;
