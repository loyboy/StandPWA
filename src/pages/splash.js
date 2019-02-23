import SplashImage from '../resources/img/seo/home-splash-screen.png';

export default [
  {
    path: '/',
    exact: true,
    component: import('../components/splash'),
    seo: {
      title: 'Standbasis Splash Screen for PWA',
      description: 'Welcome Guest!!, With our software, you can now audit a school on the GO!!',
      image: SplashImage,
    },
  },
];
