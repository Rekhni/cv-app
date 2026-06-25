import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HomePage from './pages/Home/HomePage';
import Inner from './pages/Inner/Inner';
import Panel from './components/Panel/Panel';
import './App.scss';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelCollapsed, setPanelCollapsed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    const handleChange = () => {
      setPanelOpen(mediaQuery.matches);
      if (mediaQuery.matches) setPanelCollapsed(false);
    };
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;
    setPanelOpen(isDesktop);
    if (isDesktop) setPanelCollapsed(false);
  }, [location.pathname]);

  return (
    <div
      className={`app${!isHome ? ' app--with-panel' : ''}${panelCollapsed ? ' app--panel-collapsed' : ''}`}
    >
      {!isHome && (
        <>
          <Panel
            isOpen={panelOpen}
            collapsed={panelCollapsed}
            onToggleCollapse={() => setPanelCollapsed((prev) => !prev)}
            onNavigate={() => setPanelOpen(false)}
          />
          <button
            type="button"
            className="app__menu-toggle"
            onClick={() => setPanelOpen(true)}
            aria-label="Open navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </>
      )}
      <main className={`app__content${isHome ? ' app__content--home' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inner" element={<Inner />} />
          <Route path="/about" element={<Navigate to="/inner#about" replace />} />
          <Route path="/education" element={<Navigate to="/inner#education" replace />} />
          <Route path="/experience" element={<Navigate to="/inner#experience" replace />} />
          <Route path="/skills" element={<Navigate to="/inner#skills" replace />} />
          <Route path="/portfolio" element={<Navigate to="/inner#portfolio" replace />} />
          <Route path="/contacts" element={<Navigate to="/inner#contacts" replace />} />
          <Route path="/feedback" element={<Navigate to="/inner#feedback" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
