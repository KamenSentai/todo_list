import Link from 'next/link';
import Icon from '@/components/Icon';
import { useRouter } from 'next/router';
import styles from './style.module.scss';

const Header = () => {
  const { route } = useRouter();
  const homeRoute = '/';
  const isHome = homeRoute === route;

  return (
    <header className={[
      styles.container,
      !isHome && styles.hasLink,
    ]
      .filter((className) => !!className)
      .join(' ')}
    >
      {!isHome && (
        <Link href={homeRoute}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles.link}>
            <Icon name="Return" width="20px" />
          </a>
        </Link>
      )}
      <h1 className={styles.title}>{process.env.name}</h1>
    </header>
  );
};

export default Header;
