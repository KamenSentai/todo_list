import Button from '@/components/Button/';
import styles from './styles.module.scss';

const Navigation = () => (
  <nav className={styles.container}>
    <Button href="signin" isLink isPrimary>Sign in</Button>
    <Button href="signup" isLink isPrimary>Sign up</Button>
  </nav>
);

export default Navigation;
