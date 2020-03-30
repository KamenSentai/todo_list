import PropTypes from 'prop-types';
import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { clearProps } from '@/helpers/';
import styles from './styles.module.scss';

const Form = ({ inputs, redirection, submit }) => {
  const [models, setModels] = useState(inputs.map(() => ''));

  const updateModel = (index, event) => {
    setModels(models.map((model, i) => (i === index ? event.target.value : model)));
  };

  const submitForm = (event) => {
    event.preventDefault();

    const areValid = models.map((model, index) => {
      const currentInput = inputs[index];
      const checkPassed = currentInput.check.test(model);
      const confirmTarget = currentInput.confirm
        ? inputs
          .map((input, i) => ({ ...input, index: i }))
          .find((input, i) => input.name === currentInput.confirm && i !== index)
        : null;
      const isConfirmed = confirmTarget !== null
        ? models[confirmTarget.index] === model
        : true;

      let message = '';

      if (!isConfirmed) {
        message = currentInput.errorConfirmationMessage;
      } else if (!checkPassed) {
        message = currentInput.errorValidationMessage;
      }

      return {
        isValid: checkPassed && isConfirmed,
        message,
      };
    });

    console.log(areValid);
  };

  return (
    <form className={styles.container}>
      <div className={styles.wrapper}>
        {inputs.map((input, index) => (
          <Input
            {...clearProps(input)}
            key={`input-${index}`}
            value={models[index]}
            onChange={(e) => { updateModel(index, e); }}
          />
        ))}
      </div>
      <div>
        <Button type="submit" onClick={submitForm}>{submit}</Button>
      </div>
      <Link href={`/${redirection.href}`}>
        <a className={styles.link}>{redirection.text}</a>
      </Link>
    </form>
  );
};

Form.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      confirm: PropTypes.string,
      check: PropTypes.regexp,
      placeholder: PropTypes.string,
      type: PropTypes.string,
      errorConfirmationMessage: PropTypes.string,
      errorValidationMessage: PropTypes.string,
    }),
  ).isRequired,
  redirection: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  submit: PropTypes.string.isRequired,
};

export default Form;
