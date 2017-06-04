import lazyLoading from './lazyLoading'

const state = {
  items: [
    {
      title: 'Projects',
      path: '/projects',
      isMenu: true,
      router: true,
      icon: 'computer',
      component: lazyLoading('projects/Projects'),
    }, {
      title: 'Skills',
      path: '/skills',
      isMenu: true,
      router: true,
      icon: 'create',
      component: lazyLoading('Skills'),
    }, {
      title: 'About',
      path: '/about',
      isMenu: true,
      router: true,
      icon: 'face',
      component: lazyLoading('About'),
    }, {
      title: 'Blog',
      path: '/blog',
      isMenu: true,
      router: true,
      icon: 'view_day',
      component: lazyLoading('Blog'),
    }, {
      title: 'Resume',
      path: '/resume',
      isMenu: true,
      router: true,
      icon: 'content_copy',
      component: lazyLoading('Resume'),
    }
  ]
}

export default {
  state
}

