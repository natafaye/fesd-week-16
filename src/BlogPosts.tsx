import { useState } from "react"
import type { BlogPost } from "./types"
import { Modal } from "react-bootstrap"
import PostForm from "./PostForm"

type Props = {
    postList: BlogPost[]
    setPostList: (newValue: BlogPost[]) => void
}

export default function BlogPosts({ postList, setPostList }: Props) {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [editBlogPostId, setEditBlogPostId] = useState<number | null>()
    const editBlogPost = postList.find(p => p.id === editBlogPostId)

    const handleEditClick = (id: number) => {
        setIsEditModalOpen(true)
        setEditBlogPostId(id)
    }

    const handleEditFormSubmit = (blogPostData: Omit<BlogPost, 'id'>) => {
        // edit of the blog post
        setPostList(postList.map(post => 
            post.id === editBlogPostId ? 
            { ...editBlogPost!, ...blogPostData }
            : post
        ))
        // There was a type error here because Typescript thinks editBlogPost could be undefined
        // but we'd never get here with an undefined blog post to edit, so I did some type assertion

        setEditBlogPostId(null)
    }

    return (
        <>
            <h3>Blog Posts</h3>
            <div>
                {postList.map(post => (
                    <div key={post.id}>
                        {post.text}
                        <button onClick={() => handleEditClick(post.id)}>Edit</button>
                    </div>
                ))}
            </div>
            <Modal show={isEditModalOpen} onHide={() => setIsEditModalOpen(false)}>
                <Modal.Header>
                    Edit
                </Modal.Header>
                <Modal.Body>
                    <PostForm onSubmit={handleEditFormSubmit} initialValues={editBlogPost}/>
                </Modal.Body>
            </Modal>
        </>
    )
}