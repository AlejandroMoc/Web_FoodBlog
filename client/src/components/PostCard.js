import { Link } from "react-router-dom";

export default function PostCard({post, autor}){

    // Format the date safely
    const formattedPostDate = post.date 
        ? new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
          })
        : '';

    return(
        <div className="card">

            {/* Post title and image */}
            <h1>{post.title}</h1>
            {post.image && <img src={require("../img/"+post.image+".jpg")} alt =""></img>}

            {/* Author, date and description */}
            <Link to={"/autor/" + post.id_author}>
                <h2>Author: {autor.name}</h2>
            </Link>
            <h2>{formattedPostDate}</h2>
            <p>{post.text}</p>

        </div>
    );
}
