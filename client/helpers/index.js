export const clearProps = (props) => {
  const result = {};

  Object.entries(props).forEach(([key, value]) => {
    if (value) result[key] = value;
  });

  return result;
};

export const joinClassNames = (...classNames) => classNames
  .filter((className) => !!className)
  .join(' ');
