import './App.css';
import Main from './pages/main';
import Buypage from './pages/buyPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PropertyView from './pages/propertyView';
import 'leaflet/dist/leaflet.css';
import Layout from './layout/layout';




function App() {

  const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path:'/',
                element: <Main />
            },
            {
              path: '/buy',
              element: <Buypage />,
            },
            {
              path: '/property',
              element: <PropertyView />,
            }
            
            
        ]
        
    },
    
    
    
])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
