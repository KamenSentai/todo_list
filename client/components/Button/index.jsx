import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './styles.module.scss';

const Button = ({ children, path }) => (
  <Link href={`/${path}`}>
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
