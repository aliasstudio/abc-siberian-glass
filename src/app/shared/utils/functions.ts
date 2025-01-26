export const scrollToElementById = (id: string): void => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};
