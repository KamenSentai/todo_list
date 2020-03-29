import Head from 'next/head';
import Header from '@/modules/Header/';
import Card from '@/components/Card/';
import Container from '@/components/Container/';

export default (Page) => () => (
  <Card>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#64cdfa" />
      <meta name="msapplication-TileColor" content="#64cdfa" />
      <meta name="theme-color" content="#64cdfa" />
    </Head>
    <Container>
      <Header />
      <Page />
    </Container>
  </Card>
);
