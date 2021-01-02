interface INavField {
  to: string;
  title: string;
}

const FIELDS: INavField[] = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/about',
    title: 'About Me',
  },
  {
    to: '/projects',
    title: 'Projects',
  },
  {
    to: '/contact',
    title: 'Contact',
  },
];

export default FIELDS;
