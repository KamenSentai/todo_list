import PropTypes from 'prop-types';
import styles from './style.module.scss';

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

export default Container;
