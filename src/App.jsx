import Router from "./routes/Router";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { useDispatch } from "react-redux";
import getAllPatients from "./services/getAllPatients";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    getAllPatients(dispatch);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
