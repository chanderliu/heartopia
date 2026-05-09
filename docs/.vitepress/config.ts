import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/heartopia/',
  lang: 'zh-CN',
  title: '心动小镇 Wiki',
  description: '心动小镇游戏攻略百科 — 兑换码、地图、家装设计、NPC攻略',

  head: [
    ['link', { rel: 'icon', href: '/heartopia/images/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#FFF8F0' }],
  ],

  appearance: true,

  themeConfig: {
    logo: '/images/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '攻略', link: '/guides/' },
      { text: '地图', link: '/map/' },
      { text: '百科', link: '/wiki/' },
      { text: '家装', link: '/house-designs/' },
      { text: 'NPC', link: '/npcs/' },
      { text: '工具', link: '/tools/' },
      { text: '活动', link: '/events/' },
      { text: '下载', link: '/download/' },
      { text: '联系我们', link: '/contact/' },
    ],

    sidebar: {
      '/guides/': [
        { text: '新手指南', link: '/guides/beginner/' },
        { text: '种植', link: '/guides/farming/' },
        { text: '钓鱼', link: '/guides/fishing/' },
        { text: '烹饪', link: '/guides/cooking/' },
        { text: '手工艺', link: '/guides/crafting/' },
        { text: '社交', link: '/guides/social/' },
        { text: '赚钱攻略', link: '/guides/money/' },
      ],
      '/wiki/': [
        { text: '物品图鉴', link: '/wiki/items/' },
        { text: '农作物', link: '/wiki/crops/' },
        { text: '鱼类', link: '/wiki/fish/' },
        { text: '食谱', link: '/wiki/recipes/' },
        { text: '建筑', link: '/wiki/buildings/' },
      ],
      '/npcs/': [
        { text: 'NPC 总览', link: '/npcs/' },
        { text: '喜好礼物', link: '/npcs/gifts/' },
        { text: '日程表', link: '/npcs/schedules/' },
      ],
      '/tools/': [
        { text: '利润计算器', link: '/tools/calculator/' },
        { text: '作物时间表', link: '/tools/crop-planner/' },
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
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: {
      text: '最后更新',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    outline: {
      label: '目录',
    },
  },
})
