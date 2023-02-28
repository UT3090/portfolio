
const Env = require('./next.config.js');

const isProd = process.env.NODE_ENV === 'production';

const Setting = {
  title: '😈 Kurokawa Resume 😈',
  isProd,
  basePath: Env.basePath,
  myPics: [
    'devil.png',
    'kurokawa.png',
    'devil.png',
    'hacker.jpg',
    'kappa.png',
  ].map((name) => `${Env.basePath}/${name}`)
};

export default Setting;
