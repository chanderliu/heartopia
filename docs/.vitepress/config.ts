import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/heartopia/',
  ignoreDeadLinks: true,
  lang: 'en-US',
  title: 'Heartopia Wiki',
  description: 'Heartopia Wiki — Complete Database, Codes, Guides & Interactive Tools',

  head: [
    ['link', { rel: 'icon', href: '/heartopia/images/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#FFF8F0' }],
  ],

  appearance: true,

  themeConfig: {
    logo: '/images/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Map', link: '/map/' },
      { text: 'Wiki', link: '/wiki/' },
      { text: 'House Designs', link: '/house-designs/' },
      { text: 'NPCs', link: '/npcs/' },
      { text: 'Tools', link: '/tools/' },
      { text: 'Events', link: '/events/' },
      { text: 'Download', link: '/download/' },
      { text: 'Contact', link: '/contact/' },
    ],

    sidebar: {
      '/guides/': [
        { text: 'Beginner Guide', link: '/guides/beginner/' },
        { text: 'Farming', link: '/guides/farming/' },
        { text: 'Fishing', link: '/guides/fishing/' },
        { text: 'Cooking', link: '/guides/cooking/' },
        { text: 'Crafting', link: '/guides/crafting/' },
        { text: 'Social', link: '/guides/social/' },
        { text: 'Money Making', link: '/guides/money/' },
      ],
      '/wiki/': [
        { text: 'Items Database', link: '/wiki/items/' },
        { text: 'Crops', link: '/wiki/crops/' },
        { text: 'Fish', link: '/wiki/fish/' },
        { text: 'Recipes', link: '/wiki/recipes/' },
        { text: 'Buildings', link: '/wiki/buildings/' },
      ],
      '/npcs/': [
        { text: 'NPC Overview', link: '/npcs/' },
        { text: 'Gift Preferences', link: '/npcs/gifts/' },
        { text: 'Daily Schedules', link: '/npcs/schedules/' },
      ],
      '/tools/': [
        { text: 'Profit Calculator', link: '/tools/calculator/' },
        { text: 'Crop Planner', link: '/tools/crop-planner/' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chanderliu/heartopia' },
    ],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/chanderliu/heartopia/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },

    lastUpdated: {
      text: 'Last updated',
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

    outline: {
      label: 'On this page',
    },
  },
})
