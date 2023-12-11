import './App.css';
import { Footer, Blog, Header, Feature, Posiblity, Whatgpt } from './container'
import { Cta, Brand, Navbar } from './components'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Feature />
      <Posiblity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
