import Head from 'next/head';
import Latest from '@/components/containers/articles/Latest';
import ContactSection from '@/components/containers/Contact';
import Section from '@/components/containers/Section';
import Pitch from '@/components/containers/services/Pitch';
import Workflow from '@/components/containers/Workflow';
import CtaLink from '@/components/elements/CtaLink';
import Gradient from '@/components/elements/Gradient';
import TextMask from '@/components/elements/TextMask';
import useScrollAnimations, { AnimationType } from '@/hooks/useScrollAnimations';
import useTranslations from '@/hooks/useTranslations';
import style from '@/styles/about.module.scss';
import { routes } from '@/utils';

export default function About() {
  const { t } = useTranslations();
  useScrollAnimations({
    heroTitle: {
      animation: AnimationType.fadeUp,
      query: '.hero-animation-title',
      offset: 0,
    },
  });

  return (
    <main>
      <Head>
        <title>{t('about.title')}</title>
        <meta name="transition-title" content={t('routes.about')} />
      </Head>
      <Section
        className={style.heroBackground}
        containerClassName={style.heroWrapper}
        parentChildren={(<Gradient className={style.gradient} />)}
      >
        <TextMask identifier="hero-animation-title" className={style.heroTitle}>
          <h1>{t('about.hero')}</h1>
        </TextMask>
      </Section>
      <Section containerClassName={style.aboutWrapper}>
        <h3>{t('about.bio.title')}</h3>
        <p>{t('about.bio.paragraph_1')}</p>
        <p>{t('about.bio.paragraph_2')}</p>
      </Section>
      <Pitch namespace="about" />
      <Section containerClassName={style.projectsWrapper}>
        <h3>{t('about.projects')}</h3>
        <CtaLink href={routes.work}>{t('globals.see_all_projects')}</CtaLink>
      </Section>
      {/* <Featured className={style.featuredWrapper} textPosition={isTablet ? 'top' : 'bottom'} /> */}
      <Workflow />
      <Latest />
      <ContactSection />
    </main>
  );
}
