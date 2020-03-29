import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Button = ({ children, path }) => (
  <Link href={`/${path}`}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className={styles.container}>
      {children}
    </a>
  </Link>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  path: PropTypes.string,
};

Button.defaultProps = {
  path: '',
};

export default Button;
