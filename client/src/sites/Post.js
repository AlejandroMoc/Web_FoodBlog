import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SiteHeader } from '../components/basic/SiteHeader.js';
import PostCard from "../components/PostCard.js";

export default function Post(){

    const {id_post} = useParams();
    const [post, setPost] = useState({id_post: 0, title:"", date:"", image: "", text: "", id_author: 0})
    
    useEffect(()=>{
        fetch('http://localhost:8000/posts/'+id_post)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }, [id_post])

    const [autor, setAutor] = useState({id_author: post.id_author, name:"", lastname:"", date_of_birth: "", email: "", phone_number: ""})
    
    useEffect(()=>{
        fetch('http://localhost:8000/autor/'+post.id_author)
        .then((res) => res.json())
        .then((data) => setAutor(data));
    }, [post.id_author])

    return(
        <>
            <SiteHeader headerText={post.title} />
            <PostCard post={post} autor={autor} />
        </>
    );
}