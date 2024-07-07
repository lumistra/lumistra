import Footer from '@/components/containers/Footer';
import Navigation from '@/components/containers/navigation/Navigation';
import Overview from '@/components/containers/projects/Overview';
import DoubleImage from '@/components/elements/layouts/DoubleImage';
import SingleImage from '@/components/elements/layouts/SingleImage';
import Text from '@/components/elements/layouts/Text';
import TextImage from '@/components/elements/layouts/TextImage';
import TripleImage from '@/components/elements/layouts/TripleImage';
import Meta from '@/components/elements/Meta';
import Article from '@/components/pages/Article';
import Main from '@/components/pages/Main';
import Project from '@/components/pages/Project';
import Sidenav from './containers/navigation/Sidenav';

const components = {
  // Content-Type block
  navigation: Navigation,
  footer: Footer,
  page: Main,
  article: Article,
  project: Project,

  // Nested block
  meta: Meta,
  sidenav: Sidenav,
  overview: Overview,
  singleImage: SingleImage,
  doubleImage: DoubleImage,
  tripleImage: TripleImage,
  textImage: TextImage,
  text: Text,
};

export default components;
