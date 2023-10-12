// import { Link, Route, Routes } from "react-router-dom";
// import Article from "../Article/Article";
// import { useState, useEffect } from "react";
// import {AutoComplete} from 'primereact/autocomplete';

// export default function SearchBar({category, articles, search, setSearch}) {

//     const [filteredTitles, setFilteredTitles] = useState(null);

//     const onSearch = (e) => {
//         setSearch(e.target.value);
//     }
//     const titles = articles.map((a) => a.title);

//     const searching = (event) => {
//         let query = event.query;
//         let _filteredTitles = [];

//         for (let t of titles) {
//             let filteredItems = t.filter((item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1);

//             if (filteredItems && filteredItems.length) {
//                 _filteredTitles.push({ ...t, ...{ items: filteredItems } });
//             }
//         }

//         setFilteredTitles(_filteredTitles);
//     }

//     const showTitle = () => { 
//         const arts = articles.filter(a =>  a.title.slice(0, search.lenght) == search);
//         return arts.map((a, i) => 
//                 <div className="banner">
//                     <div key={i}>
//                         <p>{a.title}</p>
//                     </div>
//                 </div>)
//     }

//     const showContents = (arts) => {
//         return arts.map((a, i) => {
//             return(
//                 <div className="banner">
//                     <div key={i}>
//                         <p>{a.title}</p>
//                     </div>
//                 </div>)
//         })
//     }

//     const test = () => {
//         alert('hello');
//     }

//     // const showArticle = () => {
//     //     return (articles.map((a,i) => <Route key={i} path={`/${a.title}`} element={<Article key={i} article={a.article} title={a.title} />}></Route>))
//     // }

//     return (
//         <div className="search">
//             {/* {<input id="search" onChange={onSearch} />} */}
//             <AutoComplete value={search} suggestions={filteredTitles} completeMethod={searching} onChange={(e) => setSearch(e.value)}  />
//             <button>Search</button>
//             <div className="dropdown">
//             </div>
//         </div>
//     )
// }


import React, { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function SearchBar({category, articles, search, setSearch}) {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const titles = articles.map((a) => a.title);
    // const titles = articles.map((a) => a);

    useEffect(() => {
        console.log(items);
    }, [items]);

    useEffect(() => {
        setItems(titles);
    }, [value]);

    const searching = (event) => {
        let _items;

            if (!event.query.trim().length) {
                _items = [...titles];
            }
            else {
                _items = items.filter((item) => {
                    return item.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setItems(_items);

    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={searching} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
