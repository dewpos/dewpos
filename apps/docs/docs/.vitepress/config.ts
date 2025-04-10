import { defineConfig, type DefaultTheme } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  description: 'A powerful Point of Sale (POS) system for all your business needs.',
  title: 'DewPOS',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/': { base: '/', items: sidebar() }
    },

    editLink: {
      pattern: 'https://github.com/dewpos/dewpos/edit/main/apps/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 DewPOS'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dewpos/dewpos' }
    ]
  }
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Dashboard',
      link: '/dashboard',
      activeMatch: '/dashboard/'
    },
    {
      text: 'Terminal',
      link: '/terminal',
      activeMatch: '/terminal/'
    },
    {
      text: 'Shared',
      link: '/shared',
      activeMatch: '/shared/'
    },
    {
      text: 'API',
      link: '/api',
      activeMatch: '/api/'
    },
    {
      text: 'Contributing',
      link: '/contributing',
      activeMatch: '/contributing/'
    }
  ];
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Dashboard',
      items: [{ text: 'Overview', link: '/dashboard' }]
    },
    {
      text: 'Terminal',
      items: [{ text: 'Overview', link: '/terminal' }]
    },
    {
      text: 'Shared',
      items: [{ text: 'Overview', link: '/shared' }]
    },
    {
      text: 'Development',
      items: [
        { text: 'API', link: '/api' },
        { text: 'Contributing', link: '/contributing' }
      ]
    }
  ];
}