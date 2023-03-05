export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = (key) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const getMenuFromStorage = () => {
  const initialMenuState = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: [],
  };
  return getLocalStorageItem('menu') || initialMenuState;
};

export const getMenuByCategory = (category) => {
  return getLocalStorageItem('menu')[category];
};

export const getSelectedMenuFromStorage = () => {
  const INITIAL_MENU = 'espresso';
  return getLocalStorageItem('selectedMenu') || INITIAL_MENU;
};

export const setSelectedMenuToStorage = (selectedMenu) => {
  setLocalStorageItem('selectedMenu', selectedMenu);
};
