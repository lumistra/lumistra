import Head from 'next/head';
import Latest from '@/components/containers/articles/Latest';
import Contact from '@/components/containers/Contact';
import Process from '@/components/containers/Process';
import Featured from '@/components/containers/projects/Featured';
import Selected from '@/components/containers/projects/Selected';
import Section from '@/components/containers/Section';
import Selection from '@/components/containers/services/Selection';
import Workflow from '@/components/containers/Workflow';
import CtaLink from '@/components/elements/CtaLink';
import TextMask from '@/components/elements/TextMask';
import useScrollAnimations, { AnimationType } from '@/hooks/useScrollAnimations';
import useTranslations from '@/hooks/useTranslations';
import style from '@/styles/home.module.scss';
import { routes } from '@/utils';

export default function Home() {
  const { t } = useTranslations();
  useScrollAnimations({
    heroTitle: {
      animation: AnimationType.fadeUp,
      query: '.hero-title',
      offset: 0,
    },
    aboutUsParagraph: {
      animation: AnimationType.fadeUp,
      query: '.about-us-paragraph',
      offset: 50,
    },
    aboutUsCTA: {
      animation: AnimationType.fadeUp,
      query: '.about-us-cta',
      offset: 0,
    },
  });

  return (
    <main>
      <Head>
        <title>{t('home.title')}</title>
        <meta name="transition-title" content={t('routes.home')} />
      </Head>
      <Section containerClassName={style.heroWrapper}>
        <TextMask identifier="hero-title">
          <h1>{t('home.hero')}</h1>
        </TextMask>
      </Section>
      <Featured textPosition="top" />
      <Section containerClassName={style.aboutUsWrapper}>
        <h5>
          {t('home.about_us.tagline_1')}
          <hr className={style.aboutUsLineWrapper} />
        </h5>
        <h5>{t('home.about_us.tagline_2')}</h5>
        <div className={style.aboutUsContentWrapper}>
          <TextMask identifier="about-us-paragraph">
            <p>{t('home.about_us.paragraph')}</p>
          </TextMask>
          <TextMask identifier="about-us-cta">
            <CtaLink href={routes.about}>
              {t('home.about_us.link')}
            </CtaLink>
          </TextMask>
        </div>
      </Section>
      <Selected />
      <Process />
      <Selection />
      <Workflow />
      <Latest />
      <Contact />
    </main>
  );
}
