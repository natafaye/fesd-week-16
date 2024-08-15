import { useState } from "react"
import PostForm from "./PostForm"
import BlogPosts from "./BlogPosts"
import type { BlogPost } from "./types"

export default function App() {
  const [postList, setPostList] = useState([
    {
      id: 0,
      category: "Javascript",
      subCategory: "Loops",
      text: "This is a post about JS",
      private: true
    }
  ])

  const addBlogPost = (blogPostData: Omit<BlogPost, 'id'>) => {
    // It's best to not mutate a function parameter
    // in case that's going to mess with someone else's state
    const newBlogPost = { 
      id: 5, // this isn't great
      ...blogPostData, 
    }
    setPostList([...postList, newBlogPost])
  }

  return (
    <div className="container">
      <h3>New Blog Post</h3>
      <PostForm onSubmit={addBlogPost} />
      <BlogPosts postList={postList} setPostList={setPostList}/>
    </div>
  )
}