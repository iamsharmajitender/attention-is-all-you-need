import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Under the hood',
  tagline: 'A curated library of AI resources',
  favicon: 'img/favicon.ico',

  // // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  // future: {
  //   v4: true, // Improve compatibility with the upcoming Docusaurus v4
  // },

  // Set the production url of your site here
  url: 'https://jitendersharma.dev', // Your website URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iamsharmajitender', // Usually your GitHub org/user name.
  projectName: 'architects-handbook', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // blogSidebarCount: 0,   // ❌ disables year navigation
          blogTitle: 'AI Architecture Articles',
          blogDescription: 'Thoughts on AI, Architecture and Engineering Leadership',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Enable Docusaurus mermaid theme
 themes: [
  '@docusaurus/theme-mermaid',
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      hashed: true,
      language: ['en'],
      indexDocs: true,
      indexBlog: true,
    },
  ],
],
  markdown: {
    mermaid: true,
  },

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Architects Handbook',
      logo: {
        alt: 'Architects Handbook',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          to: '/blog', 
          label: 'Blogs', 
          position: 'left'
        },
            {
          to: '/blog/tags',
          label: 'Tags',
          position: 'right',
         },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Tutorials',
              to: '/docs/overview',
            },
            {
              label: 'Blogs',
              to: '/blog',
            },
            {
              label: 'Tags',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/iamsharmajitender',
            },
          {
              label: 'GitHub',
              href: 'https://github.com/iamsharmajitender',
            },
            {
              label: 'X',
              href: 'https://x.com/msharmajitender',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About Me',
              to: '/about',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jitender Sharma.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      // Configure light/dark mermaid themes
      theme: { light: 'default', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
