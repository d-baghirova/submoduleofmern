// import Article from "../Article/Article";
// import { Link, Route, Routes } from "react-router-dom";
// import "./Category.css"

// function Category({category, articles}) {

//     const showTitles = () => {
//         return (articles.map((a, i) => 
//         <div className="banner">
//             <Link key={i} to={`/${category}/${a.title}`}>{a.title}</Link>
//             <img key={i} src={`${process.env.PUBLIC_URL}/assets/images/${a.img}`} />
//         </div>))
//     }

//     const showContent = () => {
//         return (articles.map((a,i) => <Route key={i} path={`/${a.title}`} element={<Article article={a.article} title={a.title} />}></Route>))
//     }

//     return ( 
//         <div className="display">
//             <div className="scrolli">
//                 <div className="scroll">
//                     {showTitles()}
//                 </div>
//             </div>
//                 <Routes>
//                     {showContent()} 
//                 </Routes>
//         </div>
//     )
// }  

// export default Category;




import Article from "../Article/Article";
import SearchBarr from "../SearchBarr/SearchBarr.js";
import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Category.css"

function Category({category, articles}) {
    const [search, setSearch] = useState('');

    const showTitles = () => { 
        return (articles.map((a, i) =>   
        <div className="banner">
            <div key={i}>
                <Link to={`/${category}/${a.title}`}>{a.title}</Link>
                <img src={`${process.env.PUBLIC_URL}/assets/images/${a.img}`} />
            </div>
        </div>))
    }

    const showContent = () => {
        return (articles.map((a,i) => <Route key={i} path={`/${a.title}`} element={<Article key={i} article={a.article} title={a.title} />}></Route>))
    }

    return ( 
        <div className="display">
            <SearchBarr category={category} articles={articles} search={search} setSearch={setSearch} />
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