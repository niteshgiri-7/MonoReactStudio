const handleSearch = (newSearchValue, data, setFilterData, setFound) => {
  if (newSearchValue.length === 0) {
    setFound(true)
    return setFilterData(data);
  }
  const filter = data?.filter((food) =>
    food.name.toLowerCase().includes(newSearchValue.toLowerCase())
  );
  if (filter.length === 0) {
   return setFound(false);
  }

  setFilterData(filter);
};

export default handleSearch;
