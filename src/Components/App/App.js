import {useState, useEffect, useLocation} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Category from '../Category/Category';
import SearchBarr from '../SearchBarr/SearchBarr';
import Article from '../Article/Article';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as bars } from '@fortawesome/free-solid-svg-icons';
import Home from "../Home/Home"
 
function App() {
  // const [search, setSearch] = useState('');
  const [allData, setAllData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  // const [categories, setCategories] = useState(['home','sports', 'arts', 'music', 'DIY']);
  // const [articles, setArticles] = useState(['home','sports', 'arts', 'music', 'DIY']);
  const [drop, setDrop] = useState(true);

  useEffect(() => {
    fetch('/articles').then(res => res.json())
    .then(data => {
      setAllData(data);
      setCategories(data.map((d) => d.category))
      setArticles(data.map((d) => d.articles ));
    });
  }, []);

  const links = () => {
    return (categories.map((l, i) => 
      i === categories.length-1 ?
      <Link to={`/${l}/*`}  key={i}>{l}</Link>
      : <Link to={`/${l}/*`} key={i}>{l}</Link>
    ));
  } 

  const routes = () => {
    return (categories.map((l, i) => { 
      return (<Route  path={`/${l}/*`} element={<Category key={i} articles={articles[categories.indexOf(l)]}  category={l} />}  key={i}></Route>);
    }));
  }

  const showDropDown = (e) => {
    drop ? document.getElementsByClassName("dropdown-content")[0].style = 'display: block' : document.getElementsByClassName("dropdown-content")[0].style = 'display: none';
    setDrop(!drop);
  }

  const showTitles = () => { 
    return (articles.map((a, i) =>   
    <div className="banner">
        <div key={i}>
            {/* <Link to={`/${categories[i]}/${a.title}`}>{a.title}</Link>
            <img src={`${process.env.PUBLIC_URL}/assets/images/${a.img}`} /> */}
            <p>{a}</p>
        </div>
    </div>));
  }

  const showContent = () => {
    return (articles.map((a,i) => <div><p>{a} {a}</p> {/* <Route key={i} path={`/${a.title}`} element={<Article key={i} article={a.article} title={a.title} />}></Route>} */}</div>));
  }

  return (
    <div className="App">
      <div>
        <nav>
        <div className="dropdown">
          <button onClick={showDropDown} className="dropbtn"><FontAwesomeIcon icon={bars} /> Bagira</button>
          <div className="dropdown-content">
            {links()}
          </div>
          {/* <SearchBarr articles={articles} search={search} setSearch={setSearch} />
            <div className="scrolli">
                <div className="scroll">
                    {showTitles()}
                </div>
            </div>
                    {showContent()} */}
          </div>
          {/* <Link to={`/`}>Home</Link> */}
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
