import classNames from 'classnames';
import useScrollAnimations, { AnimationType } from '@/hooks/useScrollAnimations';
import style from '@/styles/contact.module.scss';
import Section from './Section';
import CtaLink from '../elements/CtaLink';
import type { ContactData } from '@/types/components';
import type { SbBlokData } from '@storyblok/react';

type Props = {
  blok: SbBlokData & ContactData
};

export default function Contact(props: Props) {
  useScrollAnimations({
    contactWrapper: {
      animation: AnimationType.fadeDown,
      query: '.contact-animation-wrapper',
      offset: 100,
    },
  });

  return (
    <Section containerClassName={classNames(style.contactCTAWrapper, {
      [style.noBorderContact]: props.blok.noBorder,
    })}
    >
      <div className={classNames('contact-animation-wrapper', style.contentWrapper)}>
        <span className={classNames({
          [style.title]: !props.blok.small,
          [style.titleSmall]: props.blok.small,
        })}
        >
          {props.blok.title}
        </span>
      </div>
      <CtaLink
        className={classNames({
          [style.action]: !props.blok.small,
          [style.actionSmall]: props.blok.small,
          [style.mobileInvertColors]: props.blok.mobileInvertColors,
        })}
        href={props.blok.cta[0].link.url}
      >
        {props.blok.cta[0].text}
      </CtaLink>
    </Section>
  );
}
