import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { map } from 'lodash';
import type { MainData } from '@/types/page';
import type { SbBlokData } from '@storyblok/react';

type Props = {
  blok: SbBlokData & MainData
};

export default function Main(props: Props) {
  return (
    <main {...storyblokEditable(props.blok)}>
      {map(props.blok.meta, (meta: SbBlokData) => (
        <StoryblokComponent key={meta._uid} blok={meta} />
      ))}
      {map(props.blok.body, (component: SbBlokData) => (
        <StoryblokComponent key={component._uid} blok={component} />
      ))}
    </main>
  );
}
