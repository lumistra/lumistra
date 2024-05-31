import { find, reject, sample } from 'lodash';
import Head from 'next/head';
import useArticles from '@/content/articles';
import useTranslations from '@/hooks/useTranslations';
import style from '@/styles/article.module.scss';
import { routes } from '@/utils';
import Section from '../containers/Section';
import CtaLink from '../elements/CtaLink';
import Image from '../elements/Image';
import DoubleImage from '../elements/layouts/DoubleImage';
import SingleImage from '../elements/layouts/SingleImage';
import Text from '../elements/layouts/Text';
import TextImage from '../elements/layouts/TextImage';
import TripleImage from '../elements/layouts/TripleImage';
import Link from '../elements/Link';

type Props = {
  path: string
};

export default function Article(props: Props) {
  const { t } = useTranslations();
  const { articles } = useArticles();
  const article = find(articles, (a) => routes.article(a.slug) === props.path);
  const recommended = sample(reject(articles, (a) => routes.article(a.slug) === props.path));

  if (!article || !recommended) return null;

  return (
    <>
      <Head>
        <title>Lumistra - {article.title}</title>
      </Head>
      <Section containerClassName={style.heroWrapper}>
        <h1 className={style.heroTitle}>{article.title}</h1>
        <span className={style.heroDate}>
          Written by {article.author} on {article.publishedAt}
        </span>
        <Image
          className={style.heroCover}
          src={article.cover}
          alt={article.title}
        />
      </Section>

      <Section containerClassName={style.articleWrapper}>
        <Text align="left" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi." />
        <SingleImage src="/assets/svg/placeholder.svg" alt="placeholder" />
        <TextImage align="left" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi." image={{ src: '/assets/svg/placeholder.svg', alt: 'placeholder' }} />
        <DoubleImage images={[
          { src: '/assets/svg/placeholder.svg', alt: 'placeholder' },
          { src: '/assets/svg/placeholder.svg', alt: 'placeholder' },
        ]}
        />
        <Text align="right" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi." />
        <SingleImage src="/assets/svg/placeholder.svg" alt="placeholder" />
        <TripleImage images={[
          { src: '/assets/svg/placeholder.svg', alt: 'placeholder' },
          { src: '/assets/svg/placeholder.svg', alt: 'placeholder' },
          { src: '/assets/svg/placeholder.svg', alt: 'placeholder' },
        ]}
        />
      </Section>

      <Section containerClassName={style.recommendedWrapper}>
        <div className={style.recommendedHeader}>
          <span className={style.recommendedTitle}>{recommended.title}</span>
          <CtaLink className={style.recommendedCTA} href={routes.article(recommended.slug)}>
            {t('globals.read_next')}
          </CtaLink>
        </div>
        <Link href={routes.article(recommended.slug)}>
          <Image
            className={style.recommendedCover}
            src={recommended.cover}
            alt={recommended.title}
          />
        </Link>
      </Section>
    </>
  );
}