import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Input = ({ placeholder, type }) => (
  <div className={styles.container}>
    <input className={styles.input} placeholder={placeholder} type={type} />
    <div className={styles.border} />
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
