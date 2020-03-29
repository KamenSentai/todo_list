import Button from '@/components/Button/';
import styles from './style.module.scss';

const Navigation = () => (
  <nav className={styles.container}>
    <Button path="signin">Sign in</Button>
    <Button path="signup">Sign up</Button>
  </nav>
);

export default Navigation;
