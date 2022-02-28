import React from "react";
import ReactDOM from "react-dom";
import ChipInput from "material-ui-chip-input";

import "./styles.css";
class ControlledChipInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mydata: { user_tags: ["aa1", "aa2", "dd"] }
    };
  }

  onBeforeAdd(chip) {
    return chip.length >= 3;
  }

  handleAddChip(chip) {
    this.setState({
      chips: [...this.state.chips, chip]
    });
  }

  handleDeleteChip(deletedChip) {
    if (deletedChip !== "react") {
      this.setState({
        chips: this.state.chips.filter(c => c !== deletedChip)
      });
    } else {
      alert("Why would you delete React?");
    }
  }

  render() {
    return (
      <ChipInput
        value={this.state.mydata.user_tags}
        onAdd={chip => handleAddChip(chip)}
        onDelete={(chip, index) => handleDeleteChip(chip, index)}
      />
    );
  }
}
function App() {
  return (
    <div className="App">
      <ControlledChipInput />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
