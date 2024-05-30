import { map } from 'lodash';
import CtaLink from '@/components/elements/CtaLink';
import useTranslations from '@/hooks/useTranslations';
import style from '@/styles/services/pitch.module.scss';
import { getOrderNumber, routes } from '@/utils';
import Section from '../Section';

type Props = {
  showCTA?: boolean
};

export default function Pitch(props: Props) {
  const { t } = useTranslations();

  const pitch = [
    {
      title: t('services.pitch.step_1.title'),
      paragraph: t('services.pitch.step_1.paragraph'),
    },
    {
      title: t('services.pitch.step_2.title'),
      paragraph: t('services.pitch.step_2.paragraph'),
    },
    {
      title: t('services.pitch.step_3.title'),
      paragraph: t('services.pitch.step_3.paragraph'),
      cta: t('services.pitch.step_3.cta'),
      href: routes.services,
    },
  ];

  return (
    <Section containerClassName={style.pitchWrapper}>
      {map(pitch, (item, index) => (
        <div key={index} className={style.pitchItem}>
          <span className={style.pitchNumber}>{getOrderNumber(index, true)}</span>
          <div className={style.pitchContent}>
            <span className={style.pitchTitle}>{item.title}</span>
            <p className={style.pitchParagraph}>{item.paragraph}</p>
            {props.showCTA && item.cta && (
              <CtaLink className={style.pitchCTA} href={item.href}>{item.cta}</CtaLink>
            )}
          </div>
        </div>
      ))}
    </Section>
  );
}
