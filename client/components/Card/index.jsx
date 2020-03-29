import PropTypes from 'prop-types';
import styles from './style.module.scss';

const Card = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
};

export default Card;
