import { Link } from "react-router-dom";

export function Card({image, title, date, id_post}){
    return (
        <Link to={"/blog/" + id_post}>
            <div className="card">
            {/* Si la imágen está definida se muestra, si no, no */}
            {image && <img src={require("../img/"+image+".jpg")} alt=""></img>}
            <h2>{title}</h2>
            <p>{date}</p>
            </div>
        </Link>
    );
}

export function CardList({posts, text}){
    const list = posts.map(post =>
        //Si el texto de busqueda aparece en el title, imprimir tarjeta
        post.title.toLowerCase().includes(text.toLowerCase())
        && <Card id_post = {post.id_post} title = {post.title} date={post.date} image={post.image} id_author={post.id_author} key={post.id_post}></Card>
    );
    return(
        <div>
        {list}
        </div>
    );
}