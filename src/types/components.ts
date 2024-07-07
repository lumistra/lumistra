import type { HeadlineData } from './articles';
import type { CTALinkData } from './shared';
import type { ISbRichtext } from '@storyblok/react';

export type MetaData = {
  title?: string
  transitionTitle?: string
  description?: string
  keywords?: string
  author?: string
  email?: string
  article?: HeadlineData & {
    path: string
  }
};

export type HeroData = {
  title: string
  gradient: boolean
  footnote: boolean
};

export type AnimatedLineData = {
  titleBefore: string
  titleAfter: string
  paragraph: string
  cta: [CTALinkData]
};

export type AltBackgroundSectionData = {
  title: string
  paragraph: string
  cta?: [CTALinkData]
  background: 'dark' | 'primary'
  animated: boolean
  footnote: boolean
};

export type SelectionData = {
  heroHide: boolean
  heroTitle: string
  heroParagraph: ISbRichtext
  idleTitle: string
  idleParagraph: ISbRichtext
  positiveTitle: string
  positiveParagraph: ISbRichtext
  negativeTitle: string
  negativeParagraph: ISbRichtext
  inputStartText: string
  inputPlaceholder: string
  inputNoResults: string
  services: string
};

type WorkflowStepData = {
  title: string
  paragraph: string
};

export type WorkflowData = {
  title: string
  paragraph: ISbRichtext
  steps: WorkflowStepData[]
};

type PitchItemData = {
  title: string
  paragraph: string
};

export type PitchData = {
  items: PitchItemData[]
};

export type WantToPublishData = {
  background: 'dark' | 'gray'
  title: string
  paragraph: ISbRichtext
};

export type WhatWeDoData = {
  title: string
  section: string
  paragraph: string
  services: null
};

export type ContactData = {
  small: boolean
  title: string
  cta: [CTALinkData]
};
