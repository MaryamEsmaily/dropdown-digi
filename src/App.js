import DGXLogo from "./components/DGXLogo";
import DGXDropdown from "./components/DGXDropdown";
import DGXContainer from "./components/DGXContainer";
import "./App.css";
import "./fonts/font.css";
import { useEffect, useState } from "react";
import mockData from "../src/mock/drop-items.json";
import mockDataSelectedItem from "../src/mock/form-data.json";

function App() {
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    const defaultValue = mockData.find(
      (item) => item.key === mockDataSelectedItem.dropdown
    );
    setSelectedOption(defaultValue);
  }, []);

  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown
            options={mockData}
            value={selectedOption}
            onChange={(value) => setSelectedOption(value)}
            children={(value) => (
              <div className="flex" style={{ gap: 4 }}>
                <div>{value?.brand}</div>
                <img src={value?.img} alt="example-image" width={50} />
              </div>
            )}
          />
        </div>
        <div className="result">{selectedOption?.name}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
