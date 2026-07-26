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

    // Format the date safely
    const formattedAuthorDate = autor.date_of_birth
        ? new Date(autor.date_of_birth).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
          })
        : '';

    return(
        <div className="card">
            <h1>{autor.name} {autor.lastname}</h1>
            <h2>{formattedAuthorDate}</h2>
            <p>{autor.email}</p>
            <p>{autor.phone_number}</p>
        </div>
        
    );
}