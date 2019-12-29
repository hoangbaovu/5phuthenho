// import loadable from '@loadable/component';
import LandingHNScreen from './screens/Landing/LandingHNScreen';
import LandingSGScreen from './screens/Landing/LandingSGScreen';

// const LandingHNScreen = loadable(() => import('./screens/Landing/LandingHNScreen'));
// const LandingSGScreen = loadable(() => import('./screens/Landing/LandingSGScreen'));


export default [
  {
    path: '/',
    component: LandingHNScreen,
  },
  {
    path: '/sg',
    component: LandingSGScreen,
  },
]