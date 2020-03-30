import PropTypes from 'prop-types';
import { joinClassNames } from '@/helpers/';
import styles from './styles.module.scss';

const Input = ({
  error,
  index,
  label,
  onChange,
  type,
  value,
}) => (
  <div className={styles.container}>
    <input
      id={index}
      className={joinClassNames(styles.input, !!value && styles.isFilled)}
      onChange={onChange}
      type={type}
      value={value}
    />
    <label className={styles.label} htmlFor={index}>{label}</label>
    <span className={joinClassNames(styles.error, !!error && styles.isVisible)}>{error}</span>
    <div className={styles.border} />
  </div>
);

Input.propTypes = {
  error: PropTypes.string,
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  error: '',
  onChange: () => {},
  type: 'text',
  value: '',
};

export default Input;
