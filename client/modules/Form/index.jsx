import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { clearProps } from '@/helpers/';
import styles from './styles.module.scss';

const Form = ({ inputs, redirection, submit }) => (
  <form className={styles.container}>
    <div className={styles.wrapper}>
      {inputs.map((input, index) => <Input {...clearProps(input)} key={`input-${index}`} />)}
    </div>
    <div>
      <Button type="submit">{submit}</Button>
    </div>
    <Link href={`/${redirection.href}`}>
      <a className={styles.link}>{redirection.text}</a>
    </Link>
  </form>
);

Form.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      placeholder: PropTypes.string,
      type: PropTypes.string,
    }),
  ).isRequired,
  redirection: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  submit: PropTypes.string.isRequired,
};

export default Form;
