import './App.css';
import Homepage from './Pages/Homepage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage notFound={false}/>} />
      <Route path="*" element={<Homepage notFound={true} />} />
    </Routes>
  );
}

export default App;
