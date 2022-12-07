import styles from './checkbox.module.scss';

/* eslint-disable-next-line */
export interface CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <div className={styles['container']}>
      <BaseCheckBox />
    </div>
  );
}

export default Checkbox;
