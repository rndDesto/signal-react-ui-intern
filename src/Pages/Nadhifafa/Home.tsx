import { useState } from "react";
import SignalChips from "../../Components/Nadhifa/Chips/Chips";

const Home = () => {

  const luping = [
    {
      name: "Telkom",
      isSelected: false,
      isDisabled: false,
    },
    {
      name: "Ke Operator lain",
      isSelected: false,
      imageUrl: "https://cdn-icons-png.flaticon.com/128/2838/2838779.png",
      isDisabled: false,
    },
    {
      name: "Ke Contariner lain",
      isSelected: false,
      imageUrl: "https://cdn-icons-png.flaticon.com/128/2838/2838779.pn",
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
    <div>
      {data.map((item, index) => (
        <SignalChips
          data={item}
          onClick={() => handleChipClick(index)}
        />
      ))}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
