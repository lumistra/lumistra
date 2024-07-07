import AltBackgroundSection from '@/components/containers/AltBackgroundSection';
import AnimatedLineSection from '@/components/containers/AnimatedLineSection';
import Latest from '@/components/containers/articles/Latest';
import Contact from '@/components/containers/Contact';
import Footer from '@/components/containers/Footer';
import Hero from '@/components/containers/Hero';
import Navigation from '@/components/containers/navigation/Navigation';
import Sidenav from '@/components/containers/navigation/Sidenav';
import Featured from '@/components/containers/projects/Featured';
import Overview from '@/components/containers/projects/Overview';
import Selected from '@/components/containers/projects/Selected';
import Selection from '@/components/containers/services/Selection';
import Workflow from '@/components/containers/Workflow';
import DoubleImage from '@/components/elements/layouts/DoubleImage';
import SingleImage from '@/components/elements/layouts/SingleImage';
import Text from '@/components/elements/layouts/Text';
import TextImage from '@/components/elements/layouts/TextImage';
import TripleImage from '@/components/elements/layouts/TripleImage';
import Meta from '@/components/elements/Meta';
import Article from '@/components/pages/Article';
import Main from '@/components/pages/Main';
import Project from '@/components/pages/Project';

const components = {
  // Content-Type block
  navigation: Navigation,
  footer: Footer,
  page: Main,
  article: Article,
  project: Project,

  // Nested block
  sidenav: Sidenav,
  meta: Meta,
  hero: Hero,
  featured: Featured,
  selected: Selected,
  latest: Latest,
  selection: Selection,
  workflow: Workflow,
  animatedLineSection: AnimatedLineSection,
  altBackgroundSection: AltBackgroundSection,
  contact: Contact,

  // Projects & Articles
  overview: Overview,
  singleImage: SingleImage,
  doubleImage: DoubleImage,
  tripleImage: TripleImage,
  textImage: TextImage,
  text: Text,
};

export default components;
