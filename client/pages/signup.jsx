import Layout from '@/modules/Layout/';
import Form from '@/modules/Form/';

const Page = () => (
  <Form
    inputs={[
      {
        name: 'id',
        check: /^.{4,}$/,
        label: 'Name',
        type: 'text',
        errorValidationMessage: 'Name requires at least 4 characters',
      },
      {
        name: 'password',
        check: /^.{4,}$/,
        label: 'Password',
        type: 'password',
        errorValidationMessage: 'Password requires at least 4 characters',
      },
      {
        confirm: 'password',
        check: /^.{4,}$/,
        label: 'Confirm password',
        type: 'password',
        errorConfirmationMessage: 'Password does not match',
        errorValidationMessage: 'Password requires at least 4 characters',
      },
    ]}
    redirection={{
      href: 'signin',
      text: 'Already have an account ?',
    }}
    submit="Sign up"
  />
);

export default Layout(Page);
