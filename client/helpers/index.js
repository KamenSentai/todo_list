/**
 * Clear falsy props
 * @param {Object} props
 */
export const clearProps = (props) => {
  const result = {};

  Object.entries(props).forEach(([key, value]) => {
    if (value) result[key] = value;
  });

  return result;
};

/**
 * Join a list of truthy class names
 * @param  {...String} classNames
 */
export const joinClassNames = (...classNames) => classNames
  .filter((className) => !!className)
  .join(' ');
