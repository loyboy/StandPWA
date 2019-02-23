import LoginImage from '../resources/img/seo/login.png';

export default [
  {
    path: '/login',
    exact: true,
    component: import('../components/login'),
    seo: {
      title: 'Auth | Standbasis School Ratings',
      description: 'Implementing Auth for Standbasis Ratings is simple. ',
      image: LoginImage,
    },
  },
  {
    path: '/logout',
    exact: true,
    component: import('../components/logout'),
    seo: {
      title: 'Logging out...',
    },
  },
  {
    path: '/register',
    exact: true,
    component: import('../components/register'),
    seo: {
      title: 'Register Supervisor | Standbasis School Ratings',
      description: 'Implementing Register form for Supervisor in Standbasis Ratings is simple. '
    },
  },
  {
    path: '/dashboard',
    exact: true,
    component: import('../components/dashboard'),
    seo: {
      title: 'User dashboard for School Ratings',
    },
  },
];
