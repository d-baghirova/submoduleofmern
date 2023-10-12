import "./Article.css"

function Article({article, title}) {
    const articleVals = Object.values(article);

    const showArticle = () => {
        let str ='';
        for (let i = 0; i <= articleVals.length; i++){
            str += `<div key=${i}>`+articleVals[i]+'</div>'
        }
        return str;
    }

    return (
        <div id="a" className="article">
            <h1>{title}</h1>
            <article dangerouslySetInnerHTML={{ __html: showArticle() }}>

            </article>
        </div>
    )
}

export default Article;