import type { MetaData } from './components';
import type { SbBlokData } from '@storyblok/react';

export type MainData = {
  meta: [MetaData]
  body: Array<SbBlokData>
};
