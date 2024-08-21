import "../index.css";
const Cards = ({ cardData }) => {
  const URL = "https://react-10-projects.onrender.com";
  const { image, name, price, text } = cardData;

  return (
    <div className="w-[340px] h-[167px] p-2 flex hover:cursor-pointer foodCards text-white">
      <img
        src={URL + image}
        alt="cardImg"
        className="w-[45%] h-auto object-contain mr-4"
      />
      <div className="flex flex-col justify-between  pr-2">
        <h1 className="text-lg font-bold ">{name}</h1>
        <p className="text-sm">{text}</p>
        <span className="self-end bg-red-600 text-white px-3 py-2 rounded-md">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cards;
