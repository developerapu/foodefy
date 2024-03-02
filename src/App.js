import { RouterProvider } from "react-router-dom";
import styled from 'styled-components';
import { AppRoutes } from './router/index';
const AppContatiner = styled.div`
  width: 100%;
`;

function App() {
  return (
    <div className="App">
      <AppContatiner>
     <RouterProvider router={AppRoutes}/>
    </AppContatiner>
    </div>
  );
}

export default App;
