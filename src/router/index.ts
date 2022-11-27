import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import CardMeaningPage from '@/views/CardMeaningPage.vue'
import NewReadingPage from '@/views/NewReadingPage.vue'
import ShufflePage from '@/views/ShufflePage.vue'
import ReadingPage from '@/views/ReadingPage.vue'
import JournalEntryPage from '@/views/JournalEntryPage.vue'
import JournalPage from '@/views/JournalPage.vue'
import DeckPage from '@/views/DeckPage.vue'
import SearchPage from '@/views/SearchPage.vue'
import SettingsPage from '@/views/SettingsPage.vue'
import ContentPage from '@/views/ContentPage.vue'
import NewDeckPage from '@/views/NewDeckPage.vue'
import NotificationsPage from '@/views/NotificationsPage.vue'
import OnboardingPage from '@/views/OnboardingPage.vue'
import { Storage } from '@ionic/storage';
import WordPress from '@/services/wordpress'
import { useSSRContext } from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab-1',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab-1'
      },
      {
        path: 'tab-1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab-2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab-3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'tab-4',
        component: () => import('@/views/Tab4Page.vue')
      }
    ]
  },
  {
    path: '/new-reading',
    component: NewReadingPage
  },
  {
    path: '/shuffle',
    component: ShufflePage
  },
  {
    path: '/reading',
    component: ReadingPage
  },
  {
    path: '/journal-entry',
    component: JournalEntryPage
  },
  {
    path: '/card-meaning',
    component: CardMeaningPage
  },
  {
    path: '/deck',
    component: DeckPage
  },
  {
    path: '/settings',
    component: SettingsPage
  },
  {
    path: '/content',
    component: ContentPage
  },
  {
    path: '/new-deck',
    component: NewDeckPage
  },
  {
    path: '/notifications',
    component: NotificationsPage
  },
  {
    path: '/onboarding',
    component: OnboardingPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const storage = new Storage()
storage.create()

router.beforeEach((to, from, next) => {
  const outsidePages = ['/onboarding']
  if (outsidePages.includes(to.path)) {
    next()
  } else {
    storage.get('user').then((user) => {
      if (user && user.token) {
        next()
      } else {
        next({path: '/onboarding'})
      }
    });
  }
})

export default router
