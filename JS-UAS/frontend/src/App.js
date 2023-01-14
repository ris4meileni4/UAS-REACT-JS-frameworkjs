import {BrowserRouter, Routes, Route} from "react-router-dom";
import Jadwal from "./components/Jadwal";
import AddJadwal from "./components/AddJadwal";
import EditJadwal from "./components/EditJadwal";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jadwal/>}/>
        <Route path="add" element={<AddJadwal/>}/>
        <Route path="edit/:id" element={<EditJadwal/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;