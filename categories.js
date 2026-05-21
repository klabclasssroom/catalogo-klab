import { renderCategories, renderFilters, renderSummary, renderCourses } from './ui/render.js';
import { renderLatestNews } from './ui/news.js';
import { observeRevealItems } from './ui/animations.js';
import './ui/events.js';
import './ui/menu.js';
import './ui/gallery.js';

// Inicial
renderCategories();
renderFilters();
renderSummary();
renderCourses();
renderLatestNews();
observeRevealItems();
