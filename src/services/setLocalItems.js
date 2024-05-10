export const StoreItem = (token) => {
  localStorage.setItem("token", token);
};
export const GetItems = () => {
  return localStorage.getItem("token");
};
export const removeItems = () => {
  return localStorage.removeItem("token");
};
