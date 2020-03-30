import Layout from '@/modules/Layout/';
import Form from '@/modules/Form/';

const Page = () => (
  <Form
    inputs={[
      {
        name: 'id',
        check: /^.{1,}$/,
        label: 'Name',
        type: 'text',
        errorValidationMessage: 'Name is empty',
      },
      {
        name: 'password',
        check: /^.{1,}$/,
        label: 'Password',
        type: 'password',
        errorValidationMessage: 'Password is empty',
      },
    ]}
    redirection={{
      href: 'signup',
      text: 'Have no account yet ?',
    }}
    submit="Sign in"
  />
);

export default Layout(Page);
