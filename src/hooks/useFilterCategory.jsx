import useMenu from "./useMenu";

const useFilterCategory = (category) => {
  const [menu] = useMenu();

  const filterCategory = menu.filter((item) => item.category === category);

  return filterCategory;
};

export default useFilterCategory;
