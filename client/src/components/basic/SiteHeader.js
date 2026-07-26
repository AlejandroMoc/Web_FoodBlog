import './SiteHeader.css';

export function SiteHeader({posts, headerText}){
    // const list = posts.map(post =>
    // );
    return(
        <h1 className="siteHeader">
            {headerText}
        </h1>
    );
}