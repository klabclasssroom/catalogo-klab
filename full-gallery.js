export let activeFilter = 'all';
export let currentFilteredCourses = [];

export function setActiveFilter(filter) {
  activeFilter = filter;
}

export function setCurrentFilteredCourses(courses) {
  currentFilteredCourses = courses;
}
