import { resolve } from "styled-jsx/css";
import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

const PostDetailsPage = async ({ params }) => {
    const postId = params.postId; // Extracting the post ID from params
   const loadingJSX = (
   <div> 
    <h1>Loading...</h1>
    </div>)
    return (
        <div>
            <h1>Post Details</h1>
            <Suspense fallback={loadingJSX}>
             <PostDetails postId={postId}/>
             </Suspense>
        </div>
    );
}

export default PostDetailsPage;
