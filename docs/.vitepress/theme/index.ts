import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import HomeHero from './components/HomeHero.vue'
import QuickStartCards from './components/QuickStartCards.vue'
import StatsBar from './components/StatsBar.vue'
import CodeList from './components/CodeList.vue'
import RedemptionGuide from './components/RedemptionGuide.vue'
import FaqAccordion from './components/FaqAccordion.vue'
import ResourceMap from './components/ResourceMap.vue'
import StepBar from './components/StepBar.vue'
import ContentCard from './components/ContentCard.vue'
import ContentCardGrid from './components/ContentCardGrid.vue'
import EventTimeline from './components/EventTimeline.vue'
import DownloadGuide from './components/DownloadGuide.vue'
import ContactForm from './components/ContactForm.vue'
import HobbyGrid from './components/HobbyGrid.vue'
import DatabaseGrid from './components/DatabaseGrid.vue'
import ToolCardGrid from './components/ToolCardGrid.vue'
import NpcCardGrid from './components/NpcCardGrid.vue'
import PopularGuides from './components/PopularGuides.vue'
import CommunitySection from './components/CommunitySection.vue'

import './styles/custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeHero', HomeHero)
    app.component('QuickStartCards', QuickStartCards)
    app.component('StatsBar', StatsBar)
    app.component('CodeList', CodeList)
    app.component('RedemptionGuide', RedemptionGuide)
    app.component('FaqAccordion', FaqAccordion)
    app.component('ResourceMap', ResourceMap)
    app.component('StepBar', StepBar)
    app.component('ContentCard', ContentCard)
    app.component('ContentCardGrid', ContentCardGrid)
    app.component('EventTimeline', EventTimeline)
    app.component('DownloadGuide', DownloadGuide)
    app.component('ContactForm', ContactForm)
    app.component('HobbyGrid', HobbyGrid)
    app.component('DatabaseGrid', DatabaseGrid)
    app.component('ToolCardGrid', ToolCardGrid)
    app.component('NpcCardGrid', NpcCardGrid)
    app.component('PopularGuides', PopularGuides)
    app.component('CommunitySection', CommunitySection)
  },
} satisfies Theme
