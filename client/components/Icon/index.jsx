import PropTypes from 'prop-types';
import { joinClassNames } from '@/helpers/';
import styles from './styles.module.scss';
import slot from './slot';

const Icon = ({
  color,
  hover,
  name,
  width,
  height,
}) => {
  const IconType = slot[name];
  return (
    <IconType
      className={joinClassNames(styles[`color-${color}`], !!hover && styles[`hover-${hover}`])}
      width={width}
      height={height}
    />
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  hover: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  color: 'light',
  hover: '',
  width: '',
  height: '',
};

export default Icon;
