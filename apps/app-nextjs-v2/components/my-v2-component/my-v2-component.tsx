import styles from './my-v2-component.module.scss';

/* eslint-disable-next-line */
export interface MyV2ComponentProps {}

export function MyV2Component(props: MyV2ComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyV2Component!</h1>
    </div>
  );
}

export default MyV2Component;
