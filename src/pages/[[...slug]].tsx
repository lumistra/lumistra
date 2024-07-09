import { getStoryblokApi } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import { includes, reduce, some } from 'lodash';
import CookieConsent from '@/components/elements/CookieConsent';
import PageTransition from '@/components/elements/PageTransition';
import { defaultLocale, locales } from '@/hooks/useTranslations';
import { generateStaticPaths, routes } from '@/utils';
import { about } from '@mocks/about';
import { article } from '@mocks/article';
import { contact } from '@mocks/contact';
import { footer as footerMock } from '@mocks/footer';
import { header as headerMock } from '@mocks/header';
import { home } from '@mocks/home';
import { cmsLinks } from '@mocks/links';
import { news } from '@mocks/news';
import { project } from '@mocks/project';
import { services } from '@mocks/services';
import { work } from '@mocks/work';
import type { ISbStoryData } from '@storyblok/react';

type Props = {
  header: ISbStoryData
  footer: ISbStoryData
  page: ISbStoryData | null
};

export default function Page(props: Props) {
  return (
    <>
      <div id="page-wrapper">
        <StoryblokStory story={props.header} />
        <StoryblokStory story={props.page} />
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
      case includes(slugPath, 'articles/'):
        page = article;
        break;
      case includes(slugPath, 'projects/'):
        page = project;
        break;
      case slugPath === '/news':
        page = news;
        break;
      case slugPath === '/work':
        page = work;
        break;
      case slugPath === '/services':
        page = services;
        break;
      case slugPath === '/about':
        page = about;
        break;
      case slugPath === '/contact':
        page = contact;
        break;
      case !slugPath:
        page = home;
        break;
      default:
        page = null;
        break;
    }

    return {
      props: {
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
        'news.articles',
        'latest.articles',
        'project.recommended',
        'article.recommended',
      ],
    });

  return {
    props: {
      header: header.story,
      footer: footer.story,
      page: page.story,
    },
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  const { data } = process.env.mockApi ? { data: cmsLinks } : await storyblokApi.get('cdn/links', { version: 'published', per_page: 1000 });

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
