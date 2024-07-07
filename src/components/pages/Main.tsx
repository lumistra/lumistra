import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { map } from 'lodash';
import About from '@/components/pages/About';
import Contact from '@/components/pages/Contact';
import News from '@/components/pages/News';
import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import Services from '@/components/pages/Services';
import Work from '@/components/pages/Work';
import NotFound from '@/pages/404';
import { getRawPath, routes } from '@/utils';
import type { MainData } from '@/types/page';
import type { SbBlokData } from '@storyblok/react';

type Props = {
  blok?: SbBlokData & MainData
  slug?: string
};

export default function Main(props: Props) {
  const rawPath = getRawPath(props.slug || '');

  if (props.blok) {
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

  switch (true) {
    case rawPath === routes.privacyPolicy:
      return <PrivacyPolicy />;
    case rawPath === routes.news:
      return <News />;
    case rawPath === routes.work:
      return <Work />;
    case rawPath === routes.contact:
      return <Contact />;
    case rawPath === routes.about:
      return <About />;
    case rawPath === routes.services:
      return <Services />;
    default:
      return <NotFound />;
  }
}
