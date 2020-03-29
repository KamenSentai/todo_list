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
      {
        placeholder: 'Confirm password',
        type: 'password',
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
