import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },

  {
    displayName: 'Client',
    iconName: 'user',
    bgcolor: 'primary',
    route: '/ui-components/tooltips',
  },
  {
    displayName: 'Compte',
    iconName: 'user',
    bgcolor: 'primary',
    route: '/ui-components/Compte',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    bgcolor: 'accent',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    bgcolor: 'warning',
    route: '/authentication/register',
  },

];
