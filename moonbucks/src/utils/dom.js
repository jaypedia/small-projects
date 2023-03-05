export const $ = (selector, node = document) => {
  const result = node.querySelector(selector);
  if (!(result instanceof HTMLElement)) return null;
  return result;
};

export const $$ = (selector, node = document) => {
  const result = node.querySelectorAll(selector);
  if (!(result instanceof NodeList)) return null;
  return result;
};
