import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import TermsConditions from './components/TermsConditions';

import Home from './pages/Home'
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/terms-conditions" element={<TermsConditions/>} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy/>} />        
      </Routes>
    </Router>
  )
}

export default App