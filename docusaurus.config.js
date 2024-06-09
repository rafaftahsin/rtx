// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rafaf Tahsin',
  tagline: 'Rafaf Tahsin',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rfft.nl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rafaftahsin', // Usually your GitHub org/user name.
  projectName: 'rtx', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: './sidebars.js',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/rafaftahsin/rtx',
        //
        // },
        docs: false, // This will disable the automatic docs directory
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rafaftahsin/rtx',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'notes',
        path: '1 Notes',
        routeBasePath: 'notes',
        sidebarPath: './sidebars.js',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects',
        path: '2 Projects',
        routeBasePath: 'projects',
        sidebarPath: './sidebars.js',
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: '3 About',
        routeBasePath: 'about',
        sidebarPath: './sidebars.js'
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Rafaf Tahsin',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
          {
            to: '/notes',
            label: 'Notes',
            position: 'left'
          },
          {
            to: '/projects',
            label: 'Projects',
            position: 'left'
          },
          {
            to: '/about',
            label: 'About',
            position: 'left'
          },
          {
            to: 'https://stackoverflow.com/users/4814427/rafaf-tahsin',
            // label: 'Stackoverflow',
            position: 'right',
            target: '_blank',
            className: 'stackoverflow-link'
          },
          {
            to: 'https://github.com/rafaftahsin',
            // label: 'GitHub',
            position: 'right',
            target: '_blank',
            className: 'github-link'
          },
          {
            to: 'https://www.linkedin.com/in/rafaftahsin/',
            // label: 'Linkedin',
            position: 'right',
            target: '_blank',
            className: 'linkedin-link'
          },
          {
            to: 'https://dev.to/rafaftahsin',
            // label: 'dev.to',
            position: 'right',
            target: '_blank',
            className: 'dev-to-link'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/rafaftahsin/rtx',
          //     },
          //   ],
          // },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
