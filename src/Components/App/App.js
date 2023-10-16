import {useState, useEffect} from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Category from '../Category/Category';
import SearchBarr from '../SearchBarr/SearchBarr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars as bars } from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass as searchh} from '@fortawesome/free-solid-svg-icons';
import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";
 
function App() {
  const [search, setSearch] = useState('');
  const [allData, setAllData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [drop, setDrop] = useState(true);

  const navigate = useNavigate();
 
  useEffect(() => {
    fetch('/articles').then(res => res.json())
    .then(data => {
      setAllData(data);
      setCategories(data.map((d) => d.category))
      setArticles(data.map((d) => d.articles ));
    });
  }, []);

  const categoriesAndArticles = () => {
    let arr = [];
    for (let categoryy of allData){
      arr.push(categoryy.category);
      
      for (let j of categoryy.articles){
        arr.push(categoryy.category + '/' + j.title);
      }
      
    }
  
    return arr;
  }

  const arts = categoriesAndArticles();
  const pure = arts.map(a => a.includes('/') ? a.slice(a.indexOf('/')+1) : a);

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

  const  handleSubmit = async(event) => {
    
    navigate(`/${arts[pure.indexOf(search)]}/*`);
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
          <SearchBarr arts={pure} search={search} setSearch={setSearch} /><button onClick={handleSubmit}><FontAwesomeIcon icon={searchh} /></button>
            <div className="scrolli"></div>
          </div>
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



        