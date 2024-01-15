import { useState } from "react";
import SignalChips from "../../Components/Nadhifa/Chips/Chips";

const Home = () => {

  const luping = [
    {
      name: " Telkom",
      isSelected: false,
      isDisabled: false,
      imageUrl : "https://cdn-icons-png.flaticon.com/512/3037/3037255.png"
    },
    {
      name: "Ke Operator lain",
      isSelected: false,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/9356/9356780.png",
      isDisabled: false,
    },
    {
      name: "Ke Contariner lain",
      isSelected: false,
      imageUrl: "https://cdn-icons-png.flaticon.com/512/9356/9356780.png",
      isDisabled: true,
    },
  ];
  const [data, setData] = useState(luping);

  const handleChipClick = (index:number) => {
    setData((prevState) =>
      prevState.map((item, i) => ({
        ...item,
        isSelected: i === index,
      }))
    );
  };
  return (
    <div className="">
      {data.map((item, index) => (
        <SignalChips
          data={item}
          onClick={() => handleChipClick(index)} 
          img={item.imageUrl}
        />
      ))}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
