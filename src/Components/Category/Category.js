import Article from "../Article/Article";
import SearchBarr from "../SearchBarr/SearchBarr.js";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass as searchh} from '@fortawesome/free-solid-svg-icons';
import "./Category.css"

function Category({category, articles}) {
    const [search, setSearch] = useState('');

    const arts = articles.map(a => a.title);
    const navigate = useNavigate();

    const showTitles = () => { 
        return (articles.map((a, i) =>   
        <div className="banner">
            <div key={i}>
                <Link to={`/${category}/${a.title}/*`}>{a.title}</Link>
                <img src={`${process.env.PUBLIC_URL}/assets/images/${a.img}`} />
            </div>
        </div>))
    }

    const showContent = () => {
        return (articles.map((a,i) => <Route key={i+articles.length+1} path={`/${a.title}/*`} element={<Article key={i} article={a.article} title={a.title} />}></Route>))
    }

    const  handleSubmit = async(event) => {
    
        navigate(`/${category}/${search}/*`);
      }

    return ( 
        <div className="display">
            <SearchBarr category={category} arts={arts} search={search} setSearch={setSearch} /><button onClick={handleSubmit}><FontAwesomeIcon icon={searchh} /></button>
            <div className="scrolli">
                <div className="scroll">
                    {showTitles()}
                </div>
            </div>
                <Routes>
                    {showContent()} 
                </Routes>
        </div>
    )
}  

export default Category;