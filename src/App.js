import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import About from './components/layout/About/About';
import Home from './components/layout/Home/Home';
import Navbar from './components/layout/Navbar/Navbar';
import Theme from './components/Theme';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Navbar />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
      </Switch>

    </Theme>
  );
}

export default App;
