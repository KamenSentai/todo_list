import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

let globalApolloClient = null;
const isDevelopment = process.env.NODE_ENV === 'development';

const createApolloClient = (initialState, ctx) => new ApolloClient({
  ssrMode: Boolean(ctx),
  link: new HttpLink({
    uri: process.env.apiUrl,
    credentials: 'same-origin',
    fetch,
  }),
  cache: new InMemoryCache().restore(initialState),
});

const initApolloClient = (initialState, ctx) => {
  if (typeof window === 'undefined') {
    return createApolloClient(initialState, ctx);
  }

  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState, ctx);
  }

  return globalApolloClient;
};

const initOnContext = (ctx) => {
  const inAppContext = Boolean(ctx.ctx);

  if (isDevelopment) {
    if (inAppContext) {
      // eslint-disable-next-line no-console
      console.warn(
        'Warning: You have opted-out of Automatic Static Optimization due to `Apollo` in `pages/_app`.\n'
          + 'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n',
      );
    }
  }

  const apolloClient = ctx.apolloClient
    || initApolloClient(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx);

  apolloClient.toJSON = () => null;

  ctx.apolloClient = apolloClient;
  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }

  return ctx;
};

const Apollo = ({ ssr = false } = {}) => (PageComponent) => {
  // eslint-disable-next-line react/prop-types
  const Provider = ({ apolloClient, apolloState, ...pageProps }) => {
    let client;
    if (apolloClient) {
      client = apolloClient;
    } else {
      client = initApolloClient(apolloState, undefined);
    }

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  if (isDevelopment) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    Provider.displayName = `Apollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    Provider.getInitialProps = async (ctx) => {
      const inAppContext = Boolean(ctx.ctx);
      const { apolloClient } = initOnContext(ctx);

      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } else if (inAppContext) {
        pageProps = await App.getInitialProps(ctx);
      }

      if (typeof window === 'undefined') {
        const { AppTree } = ctx;
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        if (ssr && AppTree) {
          try {
            const { getDataFromTree } = await import('@apollo/react-ssr');

            let props;
            if (inAppContext) {
              props = { pageProps: { ...pageProps, apolloClient } };
            } else {
              props = { ...pageProps, apolloClient };
            }

            await getDataFromTree(<AppTree {...props} />);
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error while running `getDataFromTree`', error);
          }

          Head.rewind();
        }
      }

      return {
        ...pageProps,
        apolloState: apolloClient.cache.extract(),
        apolloClient: ctx.apolloClient,
      };
    };
  }

  return Provider;
};

export default Apollo;
