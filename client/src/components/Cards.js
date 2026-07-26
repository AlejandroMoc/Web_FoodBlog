// CardList and Card component

import './Cards.css';
import { Link } from "react-router-dom";

export function Card({id_post, dish_image, dish_title, dish_desc, dish_date }){
    return (
        <Link to={"/blog/" + id_post}>
            <div className="card">

            {/* Show image if it exists */}
            {dish_image && <img className="cardImg" src={require("../img/"+dish_image+".jpg")} alt=""></img>}

            {/* Dish information */}
            <h2 className="cardTitle">{dish_title}</h2>
            <h3 className="cardDesc">{dish_desc}</h3>
            <p>{dish_date}</p>
            </div>
        </Link>
    );
}

export function CardList({posts, text}){
    const list = posts.map(post =>
        //Si el texto de busqueda aparece en el title, imprimir tarjeta
        post.title.toLowerCase().includes(text.toLowerCase())

        // Pass data through post
        && <Card 
            id_post = {post.id_post} 

            dish_image={post.image}
            dish_title = {post.title} 
            dish_desc={post.text}
            dish_date={post.date} 

            id_author={post.id_author} 
            key={post.id_post}
        ></Card>
    );
    return(
        <div>
        {list}
        </div>
    );
}