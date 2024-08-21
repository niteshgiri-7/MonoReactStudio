const handleSearch = (newSearchValue, data, setFilterData) => {
  if (newSearchValue.length===0) {
  return  setFilterData(data);
  }
  const filter = data?.filter((food) =>
    food.name.toLowerCase().includes(newSearchValue.toLowerCase())
  );
  setFilterData(filter);
};

export default handleSearch;
