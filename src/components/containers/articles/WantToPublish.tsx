import classNames from 'classnames';
import RichText from '@/components/elements/RichText';
import style from '@/styles/news.module.scss';
import Section from '../Section';
import type { WantToPublishData } from '@/types/components';
import type { SbBlokData } from '@storyblok/react';

type Props = {
  blok: SbBlokData & WantToPublishData
};

export default function WantToPublish(props: Props) {
  return (
    <Section
      className={classNames({
        [style.backgroundBlack]: props.blok.background === 'dark',
        [style.backgroundGray]: props.blok.background === 'gray',
        [style.spacingTop]: props.blok.spacingTop,
      })}
      containerClassName={style.wantToPublishWrapper}
    >
      <h3>{props.blok.title}</h3>
      <RichText className={style.wtpParagraph}>
        {props.blok.paragraph}
      </RichText>
    </Section>
  );
}
