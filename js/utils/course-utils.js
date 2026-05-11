import { categories } from '../data/categories.js';
import { courses } from '../data/courses.js';

export const levelLabel = { basico: 'Básico', intermedio: 'Intermedio', avanzado: 'Avanzado' };

export const getCategoryById = id => categories.find(c => c.id === id);
export const getCourseCount = id => courses.filter(c => c.category === id).length;

export function getCourseLevel(course) {
  if (course.complexity === 'high' || course.duration >= 24) return 'avanzado';
  if (course.complexity === 'low' && course.duration <= 12) return 'basico';
  return 'intermedio';
}

export const normalizedCourses = courses.map(course => ({
  ...course,
  level: getCourseLevel(course)
}));
