import PropTypes from 'prop-types';

const Return = ({ className, width, height }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M256 150.1V43.8c0-6.5-4.8-11.8-10.7-11.8-2.1 0-4.2.7-6 2L4.7 210.9c-4.9 3.7-6.1 11-2.8 16.4.8 1.2 1.7 2.3 2.8 3.1l234.7 176.8c4.9 3.7 11.5 2.3 14.8-3.1 1.2-2 1.8-4.3 1.8-6.6V291.7c121.3 7.7 233.5 144.3 234.7 176v.7c.1 6.4 4.8 11.6 10.7 11.6 5.9 0 10.7-5.3 10.7-11.8v-.6c-2.2-130.5-92-310-256.1-317.5z" />
  </svg>
);

Return.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Return.defaultProps = {
  width: '',
  height: '',
};

export default Return;
