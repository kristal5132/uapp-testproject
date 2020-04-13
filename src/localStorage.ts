export const loadState = () => {
  const serializedState = localStorage.getItem('columns');
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};
