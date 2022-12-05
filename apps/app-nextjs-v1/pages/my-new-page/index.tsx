import styles from './index.module.scss';
import { BaseCheckBox, CheckboxColor } from '@nx-nextjs/ui';
/* eslint-disable-next-line */
export interface MyNewPageProps {}

export function MyNewPage(props: MyNewPageProps) {
  return (
    <div className={styles['container']}>
      <BaseCheckBox />
      <CheckboxColor />
    </div>
  );
}

export default MyNewPage;
