const scrollDown = (event) => {
  const nextSectionAnchor = event.target.closest('section').nextSibling;
  if (!nextSectionAnchor) {
    return;
  }
  nextSectionAnchor.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
};
export { scrollDown as default };
