/**
 * Clear falsy props
 * @param {Object} props
 * @example
 * // Let `width` equals '10px' and `height` equals whatever falsy value.
 * // Then `width` is sent as a prop but not `height`.
 * const Icon = ({ name, width, height }) => (
 *   <svg viewBox="0 0 512 512" {...clearProps({ width, height })}>
 *     {shapes[name]}
 *   </svg>
 * )
 * @returns {Object}
 */
export const clearProps = (props) => Object
  .entries(props)
  .reduce((prev, [key, value]) => ({
    ...prev,
    ...!!value && { [key]: value },
  }), {});

/**
 * Join a list of truthy class names
 * @param  {...String} classNames
 * // If `isPrimary` is truthy, the result className is `${styles.button} ${styles.isPrimary}`.
 * // Else the result className is only `${styles.button}`.
 * const Button = ({ children, isPrimary }) => (
 *   <button className={joinClassNames(styles.button, isPrimary && styles.isPrimary)}>
 *     {children}
 *   </button>
 * )
 * @returns {String}
 */
export const joinClassNames = (...classNames) => classNames
  .filter((className) => !!className)
  .join(' ');
