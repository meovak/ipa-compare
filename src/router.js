import { createBrowserRouter } from 'react-router-dom';
import App from './component/App';
import About from './component/About';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
]);
export default router;
