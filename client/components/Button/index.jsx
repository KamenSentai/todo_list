import PropTypes from 'prop-types';
import Link from 'next/link';
import { clearProps, joinClassNames } from '@/helpers/';
import styles from './styles.module.scss';

const Button = ({
  children,
  href,
  isLink,
  isPrimary,
  type,
}) => {
  const Tag = isLink ? Link : 'button';
  const className = joinClassNames(styles.container, isPrimary && styles.isPrimary);
  return (
    <Tag {...clearProps({
      ...isLink && { href: `/${href}` },
      ...!isLink && { className, type },
    })}
    >
      {isLink && (
        <a className={className}>
          {children}
        </a>
      )}
      {!isLink && children}
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  isLink: PropTypes.bool,
  isPrimary: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  href: '',
  isLink: false,
  isPrimary: false,
  type: '',
};

export default Button;
