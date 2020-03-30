import PropTypes from 'prop-types';
import { joinClassNames } from '@/helpers/';
import styles from './styles.module.scss';

const Input = ({
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
    <label className={styles.label} htmlFor={index}>
      {label}
    </label>
    <div className={styles.border} />
  </div>
);

Input.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => {},
  type: 'text',
  value: '',
};

export default Input;
