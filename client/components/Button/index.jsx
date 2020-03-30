import PropTypes from 'prop-types';
import Link from 'next/link';
import { clearProps, joinClassNames } from '@/helpers/';
import styles from './styles.module.scss';

const Button = ({
  children,
  href,
  isPrimary,
  onClick,
  type,
}) => {
  const Tag = href ? Link : 'button';
  const className = joinClassNames(styles.container, isPrimary && styles.isPrimary);

  return (
    <Tag {...clearProps(href ? { href } : { className, onClick, type })}>
      {href ? <a className={className}>{children}</a> : children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  isPrimary: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  href: '',
  isPrimary: false,
  onClick: () => {},
  type: '',
};

export default Button;
