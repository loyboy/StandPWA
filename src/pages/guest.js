import fetch from 'universal-fetch';

export default [
  {
    path: '/listjobs',
    exact: true,
    component: import('../components/listjobs'),
    seo: {
      title: 'List Jobs of The Supervisor',
      description: 'A general list of jobs given to the Supervisor'

    },
  },
  {
    path: '/results',
    exact: true,
    component: import('../components/results'),
    seo: {
      title: 'Aggregate Performance of jobs',
      description: 'A general list of performance from jobs given to the Supervisor'

    },
  }

];
