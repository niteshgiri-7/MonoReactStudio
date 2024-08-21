const handleBtnFilter = (data, btnType, setFilterData,setBtn) => {
  if (btnType === "All") {
    setBtn(btnType)
    setFilterData(data);
    return;
  }
  const filter = data?.filter((food) =>
    food.type.toLowerCase().includes(btnType.toLowerCase())
  );
  setBtn(btnType)
  setFilterData(filter);
};

export default handleBtnFilter;
