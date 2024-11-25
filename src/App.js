import './App.css';
import NoticeList from './pages/NoticeList'
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NoticeList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
