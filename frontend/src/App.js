import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from './pages/form';
import './App.css';

function App() {
  return (
    <Router>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </AuthContextProvider>
    </Router>
  );
}

export default App;
