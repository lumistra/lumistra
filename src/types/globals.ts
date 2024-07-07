import type { CTALinkData, LinkData } from './shared';

export type SidenavData = {
  sitemap: LinkData[]
  socials: LinkData[]
  cta: CTALinkData
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
