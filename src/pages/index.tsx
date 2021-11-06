import React from 'react';
import type { GetStaticProps, NextPage } from 'next'
import { prepareReactRender, useHydrateCache } from '../gqty'
import { PropsWithServerCache } from '@gqty/react';
import { LaunchesList } from '../components';

type Props = PropsWithServerCache<{
}>;

const Home: NextPage<Props> = ({ cacheSnapshot }) => {
  useHydrateCache({
    cacheSnapshot,
    shouldRefetch: false,
  });

  return (
    <div>
      <LaunchesList />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { cacheSnapshot } = await prepareReactRender(
    <Home />
  );

  return {
    props: {
      cacheSnapshot,
    }
  }
}

export default Home
