import First from "./components/First";
import TruthContext from "./components/TruthContext/TruthContext";
import truth from "./components/TruthContext/TruthContext";
const App = ()  =>{
  return (
    <TruthContext.Provider value={truth}>
      <First />
    </TruthContext.Provider>
  );
}

export default App;
