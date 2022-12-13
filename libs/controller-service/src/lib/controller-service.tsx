import styles from './controller-service.module.css';

/* eslint-disable-next-line */
export interface ControllerServiceProps {}

export function ControllerService(props: ControllerServiceProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ControllerService!</h1>
    </div>
  );
}

export default ControllerService;
