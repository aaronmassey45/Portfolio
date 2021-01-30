export type SkillData = {
  devTools: string[];
  languages: string[];
  title: string;
}

const SKILLS_DATA: SkillData[] = [
  {
    title: 'Front End Development',
    languages: ['HTML', 'CSS', 'Javascript'],
    devTools: [
      'Bootstrap',
      'GraphQL - Apollo',
      'Material Design',
      'React',
      'Redux',
      'Sass',
    ],
  },
  {
    title: 'Back End Development',
    languages: ['Javascript', 'MongoDB'],
    devTools: ['Express', 'GraphQL', "JWT's", 'Mongoose', 'NodeJs', 'oAuth'],
  },
  {
    title: 'Other Tools',
    devTools: [
      'Git',
      'GitHub',
      'Deployment',
      'NPM & Yarn',
      'Responsive Design',
      'ES6, ES7, ES8',
    ],
    languages: [],
  },
];

export default SKILLS_DATA;
