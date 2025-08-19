import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Author(){
    const {id_author} = useParams();
    const [autor, setPost] = useState({id_author: 0, name:"", lastname:"", date_of_birth: "", email: "", phone_number: ""})
    
    useEffect(()=>{
        fetch('http://localhost:8000/autor/'+id_author)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }, [id_author])

    return(
        <div className="card">
            <h1>{autor.name} {autor.lastname}</h1>
            <h2>{autor.date_of_birth}</h2>
            <p>{autor.email}</p>
            <p>{autor.phone_number}</p>
        </div>
        
    );
}