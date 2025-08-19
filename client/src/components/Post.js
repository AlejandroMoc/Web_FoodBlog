import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Post(){
    const {id_post} = useParams();
    const [post, setPost] = useState({id_post: 0, title:"", date:"", image: "", text: "", id_author: 0})
    
    useEffect(()=>{
        fetch('http://localhost:8000/posts/'+id_post)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }, [id_post])

    const [autor, setPost2] = useState({id_author: post.id_author, name:"", lastname:"", date_of_birth: "", email: "", phone_number: ""})
    
    useEffect(()=>{
        fetch('http://localhost:8000/autor/'+post.id_author)
        .then((res) => res.json())
        .then((data) => setPost2(data));
    }, [post.id_author])

    return(
        //TODO cambiar a CSS propio en vez del de card
        <div className="card">
            <h1>{post.title}</h1>
            {post.image && <img src={require("../img/"+post.image+".jpg")} alt =""></img>}
            <Link to={"/autor/" + post.id_author}><h2>Autor: {autor.name}</h2></Link>
            <h2>{post.date}</h2>
            <p>{post.text}</p>
        </div>
    );
}