export type ImageData = {
  id: number,
  alt: string | null,
  filename: string,
  copyright: string,
  meta_data: {
    alt: string,
    title: string,
    source: string,
    copyright: string
  },
};

export type LinkData = {
  _uid: string,
  label: string,
  icon: 'instagram' | 'facebook' | 'linkedin',
  link: {
    url: string,
    linktype: 'url' | 'email',
  },
};

export type CTALinkData = {
  url: string,
  email: string,
  linktype: 'url' | 'email',
  target?: '_self' | '_blank',
};
