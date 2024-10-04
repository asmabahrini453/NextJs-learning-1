
//data fetch 
//serve side
import Todo from "../components/todo"; //client side component
import Link
 from "next/link";

export default async function PostPage(){
    //in react this is forbidden, because we musn't put any side effect in this case the 
    //fetching data inside the component intial render ,it leads to infint loop ,
    //only if we handle it correctly or use it inse useEffect 

    //in nextjs it is ok
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            next:{
                revalidate:60
            }
        }
    ) //fetching data
    const posts = await response.json()//converting data to json 
    console.log(posts);
    const postsJSX = posts.map((post)=>{
        return(
            <Link href={`/posts/${post.id}`} style={{width:"70%"}}>
                <div style={{
                    width:"100%",
                    background:"grey",
                    padding:"10px",
                    color:"whitesmoke",
                    marginTop:'20px',
                    borderRadius:"10px"
                    }}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </Link>
            
        )
    })
    return (
     
         <div>
            <div>
            <h1>Posts Page</h1>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column'
            }}>
                {postsJSX}
            </div>
            
            </div>

            {/* <div>
                <Todo /> 
            </div>
             */}
        </div>
    );
}