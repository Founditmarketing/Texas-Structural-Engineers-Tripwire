import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './src/pages/Home';
import { Checkout } from './src/pages/Checkout';
import { Success } from './src/pages/Success';
import { UpsellPermitPackage } from './src/pages/UpsellPermitPackage';
import { UpsellSitePlan } from './src/pages/UpsellSitePlan';
import { ThankYou } from './src/pages/ThankYou';

// Wrapper to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/upsell-permit" element={<UpsellPermitPackage />} />
        <Route path="/upsell-site" element={<UpsellSitePlan />} />
        <Route path="/success" element={<Success />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
