import type { MetaData } from './components';
import type { CTALinkData, ImageData } from './shared';
import type { ISbRichtext, ISbStoryData, SbBlokData } from '@storyblok/react';

export type OverviewData = {
  cover: ImageData
  title: string
  paragraph: ISbRichtext
};

export type ProjectData = {
  meta: [MetaData],
  overview: [OverviewData],
  recommended: ISbStoryData<ProjectData>
  body: SbBlokData[],
};

export type FeaturedData = {
  textPosition?: 'top' | 'bottom'
  projects: ISbStoryData<ProjectData>[]
};

export type SelectedData = {
  title: string
  section: string
  cta: [CTALinkData]
  projects: ISbStoryData<ProjectData>[]
};
