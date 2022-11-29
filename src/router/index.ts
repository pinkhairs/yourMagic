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
import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import ForgotPasswordPage from '@/views/ForgotPasswordPage.vue';
import LogoutPage from '@/views/LogoutPage.vue';
import AccountPage from '@/views/AccountPage.vue';
import WordPress from '@/services/wordpress'
import Tab1Page from '@/views/Tab1Page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs',
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
        component: Tab1Page
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
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/signup',
    component: SignupPage
  },
  {
    path: '/forgot-password',
    component: ForgotPasswordPage
  },
  {
    path: '/logout',
    component: LogoutPage
  },
  {
    path: '/account',
    component: AccountPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const storage = new Storage()
storage.create()

router.beforeEach((to, from, next) => {
  if (to.path === '/tabs/tab-1' && from.path === '/settings') {
    window.location.reload()
  }
  const outsidePages = ['/onboarding', '/login', '/signup', '/forgot-password']
  if (outsidePages.includes(to.path)) {
    next()
  } else {
    storage.get('user').then((user) => {
      if (user && user.token) {
        WordPress.getUser().then((user) => {
          if (user) {
            next()
          } else {
            next({path: '/onboarding'})
          }
        })
      } else {
        next({path: '/onboarding'})
      }
    });
  }
})

export default router
