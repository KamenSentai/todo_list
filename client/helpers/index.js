/* eslint-disable import/prefer-default-export */
export const joinClassNames = (...classNames) => classNames
  .filter((className) => !!className)
  .join(' ');
