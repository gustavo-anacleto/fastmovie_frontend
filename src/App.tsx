import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes.json';

const loadComponent = (componentName: string) =>{
  return React.lazy(() => import(`@/common/pages/${componentName}/index`))
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => {
            const Component = loadComponent(route.component);
            return <Route key={index} path={route.path} element={<Component />} />;
          })}
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App