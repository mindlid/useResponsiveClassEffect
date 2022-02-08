const getRootNode = () => document.documentElement;
export const rootContainsClass = (className: string): boolean => getRootNode().classList.contains(className);
export const addRootClass = (className: string): void => getRootNode().classList.add(className);
export const removeRootClass = (className: string): void => getRootNode().classList.remove(className);
