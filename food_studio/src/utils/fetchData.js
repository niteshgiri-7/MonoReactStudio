const fetchData = async (setData, setFilterData, setLoading, setErr) => {
    const URL = "https://react-10-projects.onrender.com/";
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const json = await response.json();
    setData(json);
    setFilterData(json);
    setLoading(false);
  } catch (error) {
    setErr(error);
    console.log("Fetch error:", error);
  }
};

export default fetchData;
