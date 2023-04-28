import {useState, useEffect} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Category from '../Category/Category';
import Home from "../Home/Home"
 
function App() {
 
  const [allData, setAllData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/articles').then(res => res.json())
    .then(data => {
      setAllData(data);
      setCategories(data.map((d) => d.category))
      setArticles(data.map((d) => d.articles ));
    });
  }, [])

  const links = () => {
    return (categories.map((l, i) => 
      i === categories.length-1 ?
      <div className="linkButtonR" key={i}><Link to={`/${l}/*`} key={i}>{l}</Link></div>
      : <div className="linkButtonC" key={i}><Link to={`/${l}/*`} key={i}>{l}</Link></div>
    ))
  }

  const routes = () => {
    return (categories.map((l, i) => { 
      return (<Route  path={`/${l}/*`} element={<Category articles={articles[categories.indexOf(l)]}  category={l} />}  key={i}></Route>)
    }))
  }

  return (
    <div className="App">
      <div>
        <nav>
          <div className="linkButtonL"><Link to={`/`}>Home</Link></div>
          {links()}
        </nav>
          <Routes> 
          <Route exact path={`/`} element={<Home />}></Route>
              {routes()}
          </Routes>
        </div>
    </div>
  );
}

export default App;
