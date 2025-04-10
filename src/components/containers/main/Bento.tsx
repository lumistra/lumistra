import { type SbBlokData, storyblokEditable } from '@storyblok/react';
import { map, split, uniq } from 'lodash';
import Arrow from '@/assets/svg/arrow.svg';
import Section from '@/components/containers/Section';
import Link from '@/components/elements/Link';
import RichText from '@/components/elements/RichText';
import style from '@/styles/main/bento.module.scss';
import type { BentoData, BentoItemData } from '@/types/components';

type Props = {
  blok: SbBlokData & BentoData
};

function Bento(props: Props) {
  return (
    <Section
      componentId={props.blok.component}
      containerClassName={style.bentoWrapper}
      style={props.blok.styling}
      storyblokEditable={storyblokEditable(props.blok)}
    >
      <RichText className={style.headline}>{props.blok.headline}</RichText>
      <div className={style.frames}>
        {map(props.blok.frames, (frame: BentoItemData, fi: number) => (
          <Link
            key={`frame-${frame.title}-${fi}`}
            className={style.frame}
            link={frame.link}
          >
            <div className={style.title}>
              <span>{frame.title}</span>
              <Arrow className={style.arrow} />
            </div>
            <div className={style.tags}>
              {map(uniq(split(frame.tags, '\n')), (tag, ti: number) => (
                <span key={`tag-${tag}-${ti}`} className={style.tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default Bento;
