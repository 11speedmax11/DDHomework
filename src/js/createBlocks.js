export const createBlock = (type, classElement, content = "", isActive = false) => {
  const element = document.createElement(type);
  if (classElement.length > 0)
    element.classList.add(classElement);
  if (isActive) {
    element.classList.add("active");
  }
  if (content.length > 0)
    element.textContent = content;
  return element;
}