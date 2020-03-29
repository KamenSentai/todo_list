import Button from '@/components/Button/';
import styles from './style.module.scss';

const Navigation = () => (
  <div className={styles.container}>
    <Button path="signin">Sign in</Button>
    <Button path="signup">Sign up</Button>
  </div>
);

export default Navigation;
