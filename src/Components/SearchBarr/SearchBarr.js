import React, { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import './SearchBar.css';

export default function SearchBar({arts, setSearch}) {
    const [si, setSi] = useState('');
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        setItems(arts);
        setSearch(si);
    }, [si]);

    const searching = (event) => {
        setTimeout(() => {
        let _items;
            if (!event.query.trim().length) {
                _items = arts;
            } 
            else {
                _items = arts.filter((item) => {
                    return item.toLowerCase().startsWith(event.query.toLowerCase()) ? item.toLowerCase().startsWith(event.query.toLowerCase()) : item.toLowerCase().includes(event.query.toLowerCase()) ;
                });
            }

            setItems(_items);
        },250);
    }
    
    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={si} suggestions={items.length>5 ? items.slice(0,5) : items} completeMethod={searching} onChange={(e) => setSi(e.value)} />
        </div>
    )
}
