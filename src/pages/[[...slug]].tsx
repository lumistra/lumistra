import { getStoryblokApi } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import { includes, reduce, some } from 'lodash';
import CookieConsent from '@/components/elements/CookieConsent';
import PageTransition from '@/components/elements/PageTransition';
import Main from '@/components/pages/Main';
import { defaultLocale, locales } from '@/hooks/useTranslations';
import { generateStaticPaths, routes } from '@/utils';
import { article } from '../../__mocks__/article';
import { footer as footerMock } from '../../__mocks__/footer';
import { header as headerMock } from '../../__mocks__/header';
import { cmsLinks } from '../../__mocks__/links';
import { project } from '../../__mocks__/project';
import type { ISbStoryData } from '@storyblok/react';

type Props = {
  header: ISbStoryData
  footer: ISbStoryData
  page: ISbStoryData | null
  slug: string
};

export default function Page(props: Props) {
  return (
    <>
      <div id="page-wrapper">
        <StoryblokStory story={props.header} />
        {props.page ? (
          <StoryblokStory story={props.page} />
        ) : (
          <Main slug={props.slug} />
        )}
      </div>
      <StoryblokStory story={props.footer} />
      <PageTransition />
      <CookieConsent />
    </>
  );
}

type StaticProps = {
  params: {
    slug?: string[]
  }
};

export async function getStaticProps(props: StaticProps) {
  const storyblokApi = getStoryblokApi();

  const [slugLocale] = props.params.slug || [''];
  const isSlugLocale = some(locales, (locale) => locale.value === slugLocale);
  const locale = isSlugLocale ? slugLocale : defaultLocale;

  const slug = props.params.slug ? props.params.slug.join('/') : '';
  const slugPath = slug ? `/${slug}` : '';
  const apiPath = isSlugLocale ? slugPath : `${defaultLocale}${slugPath}`;

  if (process.env.mockApi) {
    let page = null;
    switch (true) {
      case includes(slugPath, `${routes.news}/`):
        page = article;
        break;
      case includes(slugPath, `${routes.work}/`):
        page = project;
        break;
      default:
        page = null;
        break;
    }

    return {
      props: {
        slug: `${slugPath}/`,
        header: headerMock,
        footer: footerMock,
        page,
      },
    };
  }

  const [{ data: header }, { data: footer }] = await Promise.all([
    storyblokApi.get(`cdn/stories/${locale}/global/header`, { version: 'published' }),
    storyblokApi.get(`cdn/stories/${locale}/global/footer`, { version: 'published' }),
  ]);

  const { data: page } = slugPath === routes.privacyPolicy
    ? { data: { story: null } }
    : await storyblokApi.get(`cdn/stories/${apiPath}`, {
      version: 'published',
      resolve_relations: [
        'work.projects',
        'featured.projects',
        'selected.projects',
        'project.recommended',
        'news.articles',
        'latest.articles',
        'article.recommended',
      ],
    });

  return {
    props: {
      slug: `${slugPath}/`,
      header: header.story,
      footer: footer.story,
      page: page.story,
    },
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  const { data } = process.env.mockApi ? { data: cmsLinks } : await storyblokApi.get('cdn/links', { version: 'published' });

  const links = reduce(data.links, (res, link) => {
    if (link.is_folder) return res;
    if (includes(link.slug, '/global')) return res;
    res.push(link.real_path as string);

    return res;
  }, [] as string[]);

  return {
    paths: generateStaticPaths(links),
    fallback: false,
  };
}
