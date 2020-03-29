import Layout from '@/modules/Layout/';
import Form from '@/modules/Form/';

const Page = () => (
  <Form
    inputs={[
      {
        placeholder: 'Name',
        type: 'text',
      },
      {
        placeholder: 'Password',
        type: 'password',
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
