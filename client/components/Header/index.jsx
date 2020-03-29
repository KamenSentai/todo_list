import styles from './style.module.scss';

const Header = () => (
  <header className={styles.container}>{process.env.name}</header>
);

export default Header;
