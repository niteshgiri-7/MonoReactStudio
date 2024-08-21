
import Cards from "./Cards";
import Shimmer from "./Shimmer";
const Main = ({ loading,err,filterData }) => {
  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="absolute w-[75%]  flex flex-wrap justify-evenly gap-6 p-4 mt-[30px]">
          {Array.from({ length: 6 }, (_, i) => (
            <Shimmer />
          ))}
        </div>
      </div>
    );
  }
  if (err) {
    return console.log(err);
  }
  return (
    <div className="relative w-full h-[calc(100vh-150px)]">
      <img
        src="/bg.png"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
      />

      <div className="flex justify-center">
        <div className="absolute w-[75%]  flex flex-wrap justify-evenly gap-6 p-4 mt-[30px]">
          {filterData?.map((d, i) => (
            <Cards key={i} cardData={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
