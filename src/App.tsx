import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.css';

const App: React.FC = () => (
  <>
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
</>

)

export default App;
