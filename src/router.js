import { createRouter, createWebHistory } from 'vue-router';

// Import your components for each route
import AboutPage from './components/AboutPage.vue';
import HomePage from './components/HomePage.vue';
import JobHistoryPage from './components/JobHistoryPage.vue';
import ProjectsPage from './components/ProjectsPage.vue';
import ContactsPage from './components/ContactsPage.vue';

// Define your routes
const routes = [
    { path: '/portfolio', name: 'Home', component: HomePage },
    { path: '/portfolio/about', name: 'About', component: AboutPage },
    { path: '/portfolio/projects', name: 'Projects', component: ProjectsPage },
    { path: '/portfolio/job-history', name: 'Job-History', component: JobHistoryPage },
    { path: '/portfolio/contacts', name: 'Contacts', component: ContactsPage },
    { path: '/:catchAll(.*)', redirect: '/portfolio' }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
