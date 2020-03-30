import Button from '@/components/Button/';
import styles from './styles.module.scss';

const Navigation = () => (
  <nav className={styles.container}>
    <Button href="/signin" isPrimary>Sign in</Button>
    <Button href="/signup" isPrimary>Sign up</Button>
  </nav>
);

export default Navigation;
