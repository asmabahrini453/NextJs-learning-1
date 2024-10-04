const Function=({children}) =>{
    return(
        <div>
            <h1>
                hi hi articles
            </h1>
            <div style={
               { marginTop:"50px"
                ,background:"blue",
                padding:"20px",
                borderRadius:"10px",
               color:"white"}
                }>
                    {children}
            </div>
        </div>
    );
}

export default Function;