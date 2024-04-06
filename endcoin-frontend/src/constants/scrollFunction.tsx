export const scrollToDiv = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    if (
      element.id === 'hackathon' ||
      element.id === 'whitepaper' ||
      element.id === 'dataGraph'
    )
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};
