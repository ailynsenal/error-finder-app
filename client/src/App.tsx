import { FC } from 'react';
import './App.css';
import Home from './views/Home/Home';
import { AppProvider } from './context/Context';

const App: FC = () => {
  return (
    <AppProvider>
      <div className='App'>
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
