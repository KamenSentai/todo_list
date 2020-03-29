import Button from '@/components/Button/';
import styles from './styles.module.scss';

const Navigation = () => (
  <nav className={styles.container}>
    <Button path="signin">Sign in</Button>
    <Button path="signup">Sign up</Button>
  </nav>
);

export default Navigation;
