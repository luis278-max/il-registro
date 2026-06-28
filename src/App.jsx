import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Scheda from './pages/Scheda';

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scheda/:id" element={<Scheda />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
