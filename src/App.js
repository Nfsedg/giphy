import StaticContext from './context/StaticContext';
import Home from 'pages/Home';
import Header from 'components/Header';
import UserContextProvier from 'context/UserContext';

function App() {
  return (
    <StaticContext.Provider value={{
      name: 'midudev',
      subscribe: true
    }}>
      <Header/>
      <UserContextProvier>
        <Home/>
      </UserContextProvier>
    </StaticContext.Provider>
  );
}

export default App;
