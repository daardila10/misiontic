import styles from "./App.modules.css";
import Title from "./Title/Title";

import Background from "./Background/Background";

import Grid from "./Grid/Grid";

import Rocket from "./Rocket/Rocket";

import Smoke from "./Rocket/Smoke";

// Data

import facts from "./data/NASA_facts.json";
function App() {
  return (
    <div className={styles.App}>
      <Title />
      <Background />
      <Grid />
      <Rocket />
      <Smoke />
    </div>
  );
}

export default App;
