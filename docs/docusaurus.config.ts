import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { ScalarOptions } from '@scalar/docusaurus';

const config: Config = {
  title: 'Pawat Developers',
  tagline: 'Developer documentation for Pawat',
  favicon: 'https://pawat.chat/favicon-pawat.svg',

  future: {
    v4: true,
  },

  url: 'https://developers.pawat.chat',
  baseUrl: '/',

  organizationName: 'pawatchat',
  projectName: 'pawatchat',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/pawatchat/pawatchat/tree/main/docs/',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@scalar/docusaurus',
      {
        label: 'API Reference',
        route: '/api-reference',
        showNavLink: true,
        configuration: {
          url: 'https://pawat.chat/api/openapi.json',
        },
      } as ScalarOptions,
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'],
        redirects: [
          // legacy docs website (pawatchat/developer-wiki)
          {
            from: '/developers/api/reference.html',
            to: '/api-reference',
          },
          {
            from: '/contrib.html',
            to: '/developing/contrib',
          },
          {
            from: '/contrib',
            to: '/developing/contrib',
          },
        ],
      }
    ],
  ],

  themeConfig: {
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Pawat for Developers',
        src: '/img/navbar.light.svg',
        srcDark: '/img/navbar.dark.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          label: 'Docs'
        },
        {
          href: 'https://github.com/pawatchat',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Developers',
          items: [
            {
              label: 'Source Code',
              href: 'https://github.com/pawatchat'
            },
            {
              label: 'Help Translate',
              href: 'https://translate.pawat.chat'
            },
          ],
        },
        {
          title: 'Team',
          items: [
            {
              label: 'About',
              href: 'https://pawat.chat/about'
            },
            {
              label: 'Blog and Changelogs',
              href: 'https://pawat.chat/updates'
            },
            {
              label: 'Contact',
              href: 'https://support.pawat.chat'
            },
          ],
        },
        {
          title: 'Pawat on Socials',
          items: [
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/pawat.chat'
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/r/pawatchat'
            },
            {
              label: 'Pawat Server',
              href: 'https://stt.gg/Testers'
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Community Guidelines',
              href: 'https://pawat.chat/legal/community-guidelines'
            },
            {
              label: 'Terms of Service',
              href: 'https://pawat.chat/legal/terms'
            },
            {
              label: 'Privacy Policy',
              href: 'https://pawat.chat/legal/privacy'
            },
            {
              label: 'Imprint',
              href: 'https://pawat.chat/legal/imprint'
            },
          ],
        },
      ],
      copyright: `© Revolt Platforms Ltd, ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
