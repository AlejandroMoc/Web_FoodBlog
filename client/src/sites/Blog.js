// Blog post page

import './Blog.css';
import { SiteHeader } from '../components/basic/SiteHeader.js';

import { CardList } from '../components/Cards.js';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Blog(){
    
    const [filterText, setFilterText] = useState("");
    const [data, setData] = useState([{id_post: 0, title: "", date: "", text: "", image: "", id_author: "0"}])

    useEffect(() => {

        // Fetch data from endpoint
        fetch('http://localhost:8000/blog')

        // Convert to JSON
        .then((res) => res.json())

        // Set data
        .then((posts) => setData(posts));
    }, [])
    
    function handleChange(e){
      setFilterText(e.target.value);
    }
    
    return(
        <>
            <SiteHeader headerText="Blog" />

            {/* Search div wrapper */}
            <div className="searchWrapper">
                <p>Search by dish title</p>
                <input className="searchInput" type="text" value={filterText} onChange={handleChange}>
                </input>
            </div>

            {/* Post List */}
            <CardList posts={data} text={filterText}></CardList>
        </>
    );
}