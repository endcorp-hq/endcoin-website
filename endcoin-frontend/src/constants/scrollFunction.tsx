export const scrollToDiv = (id: string) => {
  const element = document.getElementById(id);
  console.log(element);
  if (element) {
    if (element.id === 'hackathon' || element.id === 'whitepaper')
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};
