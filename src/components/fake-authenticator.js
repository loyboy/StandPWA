import cookie from '../libs/cookie';

export default {
  isLoggedIn: () => (cookie.getItem && typeof cookie.getItem === 'function' && cookie.getItem('user_logged') === 'yes'),
  logout: () => (cookie.removeItem && typeof cookie.removeItem === 'function' && cookie.removeItem('user_logged')),
};
