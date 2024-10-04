export const metadata={
    title:"articles page"
}

const ShowArticlePage=(props)=>{
    console.log(props);
    return(
        <div>
            <h1>
                show article 
            </h1>
            <h2>{props.params.title}</h2>
        </div>
    );
}

export default ShowArticlePage;