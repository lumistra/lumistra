import type { MetaData } from './components';
import type { CTALinkData, ImageData } from './shared';
import type { ISbStoryData, SbBlokData } from '@storyblok/react';

export type HeadlineData = {
  title: string
  author: string
  publishedAt: string
  cover: ImageData
};

export type ArticleData = {
  meta: [MetaData],
  headline: [HeadlineData],
  recommended: ISbStoryData<ArticleData>
  body: SbBlokData[],
};

export type LatestData = {
  title: string
  section: string
  cta: [CTALinkData]
  articles: ISbStoryData<ArticleData>[]
};
