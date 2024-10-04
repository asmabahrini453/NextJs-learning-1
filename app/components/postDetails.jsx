import { resolve } from "styled-jsx/css";

const PostDetails = async ({ postId }) => {
    
//to test the loading
  await new Promise((resolve)=>{
    setTimeout(()=>{
        resolve();
    },2000)
  })
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            next: {
                revalidate: 60, 
            }
        }
    );

    const post = await response.json();

    return (
        <div>
            <div style={{
                    width:"100%",
                    background:"grey",
                    padding:"10px",
                    color:"whitesmoke",
                    marginTop:'20px',
                    borderRadius:"10px"
                    }}>
                <h3>{post.title}</h3> 
                <p>{post.body}</p> 
            </div>
        </div>
    );
}

export default PostDetails;
