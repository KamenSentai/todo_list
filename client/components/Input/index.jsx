import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Input = ({
  onChange,
  placeholder,
  type,
  value,
}) => (
  <div className={styles.container}>
    <input
      className={styles.input}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    <div className={styles.border} />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  type: 'text',
  value: '',
};

export default Input;
