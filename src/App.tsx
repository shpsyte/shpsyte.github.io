import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './App.css';

const App: React.FC = () => (
  <>
  <BrowserRouter basename="/me">
    <Routes />
  </BrowserRouter>
</>

)

export default App;
