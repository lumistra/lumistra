import type { CMSLink, LinkData } from '@/types/shared';

export type SidenavData = {
  sitemap: LinkData[]
  socials: LinkData[]
  socialsLabel: string
  cta?: CMSLink
  darkMode?: {
    label?: string,
    on?: string
    off?: string
  }
};

export type NavigationData = {
  links: LinkData[]
  sidenav: [SidenavData]
};

export type FooterData = {
  socialsLabel: string
  socialsLinks: LinkData[]
  sitemap: LinkData[]
};
