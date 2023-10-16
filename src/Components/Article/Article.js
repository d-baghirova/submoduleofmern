import "./Article.css";
import DOMPurify from 'dompurify';

function Article({article, title}) {

    const articleKeys = Object.keys(article);

    const showArticle = () => { 
        let str ='';
        if (article){
            str += `<h1>${title}</h1>`;
            
            for (let i = 1; i < articleKeys.length+1; i++){
                const order = articleKeys.find(k => Number(k.slice(1)) === i);

                if (order.slice(0,1)==='s'){
                    str += `<h2>${article[order]}</h2>`;
                } else if (order.slice(0,1)==='p'){
                    str += `<p>${article[order]}</p>`;
                } else if (order.slice(0,1)==='i'){
                    str += `<img src= ${process.env.PUBLIC_URL}/assets/images/${article[order]} />`;
                } 
            }   
            return str;
        } 
    }

    return (
        <div id="a" className="article">
            <h1>{title}</h1>
            <article dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(showArticle()) }}></article>
        </div>
    )
}

export default Article;