import { useRouter } from 'next/router';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { joinClassNames } from '@/helpers/';
import styles from './styles.module.scss';

const Header = () => {
  const { route } = useRouter();
  const homeRoute = '/';
  const isHome = homeRoute === route;

  return (
    <header className={joinClassNames(styles.container, !isHome && styles.hasLink)}>
      {!isHome && (
        <Link href={homeRoute}>
          <a className={styles.link}>
            <Icon hover="primary" name="Return" width="20px" />
          </a>
        </Link>
      )}
      <h1 className={styles.title}>{process.env.name}</h1>
    </header>
  );
};

export default Header;
