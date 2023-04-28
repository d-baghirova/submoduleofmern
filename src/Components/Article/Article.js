import "./Article.css"

function Article({article, title}) {
    const articleKeys = Object.keys(article);
    const articleVals = Object.values(article);
 
    const showArticle = () => {
        return (
            articleVals.map((a,i) => { 
                let arr = [];
                if (articleKeys[i][0] === 'h'){
                    return <h2 key={i}>{a}</h2>
                } else if (articleKeys[i][0] === 'p'){
                    return <p key={i}>{a}</p>
                } else {
                    return <img key={i} src={`${process.env.PUBLIC_URL}/assets/images/${a}`} />
                }}))}
    return (
        <div className="article">
            <h1>{title}</h1>
            {showArticle()}
        </div>
    )
}

export default Article