import { useState } from "react";
import { TabButton } from "./components/TabButton";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(num) {
    setSelectedTopic(num)
  }

  return (
    <div className="App">
      <div className="menu-block">
        <div className="menu-buttons">
          <TabButton onSelect={() => handleSelect('components')} >Components</TabButton>
          <TabButton onSelect={() => handleSelect('jsx')} >JSX</TabButton>
          <TabButton onSelect={() => handleSelect('props')} >Props</TabButton>
          <TabButton onSelect={() => handleSelect('state')} >State</TabButton>
        </div>

        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
