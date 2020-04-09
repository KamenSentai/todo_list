import Apollo from '@/libs/Apollo';
import Layout from '@/modules/Layout/';
import Navigation from '@/modules/Navigation/';

const Page = () => <Navigation />;

export default Apollo({ ssr: true })(Layout(Page));
