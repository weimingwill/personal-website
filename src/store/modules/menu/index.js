import lazyLoading from './lazyLoading'

const state = {
  items: [
    {
      title: 'Projects',
      path: '/projects',
      isMenu: true,
      router: true,
      icon: 'domain',
      component: lazyLoading('Works'),
    }, {
      title: 'Skills',
      path: '/skills',
      isMenu: true,
      router: true,
      icon: 'domain',
      component: lazyLoading('Skills'),
    }, {
      title: 'About',
      path: '/about',
      isMenu: true,
      router: true,
      icon: 'domain',
      component: lazyLoading('About'),
    }, {
      title: 'Blog',
      path: '/blog',
      isMenu: true,
      router: true,
      icon: 'domain',
      component: lazyLoading('Blog'),
    }, {
      title: 'Contact',
      path: '/contact',
      isMenu: true,
      router: true,
      icon: 'domain',
      component: lazyLoading('Contact'),
    }, {
      title: 'Resume',
      path: '/resume',
      isMenu: true,
      router: true,
      icon: 'domain',
      component: lazyLoading('Resume'),
    },

  ]
}

export default {
  state
}
