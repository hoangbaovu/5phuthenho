import loadable from '@loadable/component';
import LandingSGScreen from './screens/Landing/LandingSGScreen';
// import TicketScreen from './screens/Ticket/TicketScreen';

// const LandingHNScreen = loadable(() => import('./screens/Landing/LandingHNScreen'));
// const LandingSGScreen = loadable(() => import('./screens/Landing/LandingSGScreen'));
const TicketScreen = loadable(() => import('./screens/Ticket/TicketScreen'));


export default [
  {
    path: '/sg',
    component: LandingSGScreen,
  },
  {
    path: '/ticket',
    component: TicketScreen,
  },
]