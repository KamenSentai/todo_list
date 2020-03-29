import PropTypes from 'prop-types';
import styles from './style.module.scss';
import slot from './slot';

const Icon = ({
  color,
  name,
  width,
  height,
}) => {
  const IconType = slot[name];
  return (
    <IconType className={styles[`color-${color}`]} width={width} height={height} />
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  color: 'light',
  width: '',
  height: '',
};

export default Icon;
