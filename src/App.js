import styled from 'styled-components';
import Header from './components/Header/Header';
import Footer from "./components/Footer";
import Body from "./components/Body";
const AppContatiner = styled.div`
  width: 100%;
`;

function App() {
  return (
    <div className="App">
      <AppContatiner>
        <Body/>
    </AppContatiner>
    </div>
  );
}

export default App;
