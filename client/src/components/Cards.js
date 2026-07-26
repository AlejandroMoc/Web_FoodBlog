// CardList and Card component

import './Cards.css';
import { Link } from "react-router-dom";

export function Card({id_post, dish_image, dish_title, dish_desc, dish_date }){

    // Format the date safely
    const formattedDishDate = dish_date 
        ? new Date(dish_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
          })
        : '';

    return (
        <Link to={"/blog/" + id_post}>
            <div className="card">

                {/* Show image if it exists */}
                {dish_image && (
                    <img
                        className="cardImg"
                        src={`${process.env.PUBLIC_URL}/img/${dish_image}.jpg`}
                        alt=""
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                )}

                {/* Dish title and description */}
                <h2 className="cardTitle">{dish_title}</h2>
                <h3 className="cardDesc">{dish_desc}</h3>

                {/* Display the clean formatted date */}
                {formattedDishDate && <p className="cardDate">{formattedDishDate}</p>}
                
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