import { FormEvent, useState } from "react"
import type { BlogPost } from "./types"

type Props = {
    onSubmit: (blogPostData: BlogPost) => void
}

export default function PostForm({ onSubmit }: Props) {
    // State for in-progress form data
    const [textValue, setTextValue] = useState("")
    const [categoryValue, setCategoryValue] = useState("Javascript")
    const [subCategoryValue, setSubCategoryValue] = useState("")
    const [privateValue, setPrivateValue] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault() // preventing the refresh

        const blogPostData = {
            id: 5, // this isn't going to work long term
            category: categoryValue,
            subCategory: subCategoryValue,
            text: textValue,
            private: privateValue
        }

        onSubmit(blogPostData)

        // clear the form
        setTextValue("")
        setCategoryValue("Javascript")
        setSubCategoryValue("")
        setPrivateValue(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <textarea
                    className="w-100"
                    onChange={(event) => setTextValue(event.target.value)}
                    value={textValue}
                />
            </div>
            <div className="mb-3">
                Category:
                <select
                    onChange={(event) => setCategoryValue(event.target.value)}
                    value={categoryValue}
                >
                    <option>Javascript</option>
                    <option>React</option>
                    <option>HTML & CSS</option>
                </select>
            </div>
            <div className="mb-3">
                Sub Category:
                <select
                    onChange={(event) => setSubCategoryValue(event.target.value)}
                    value={subCategoryValue}
                >
                    {categoryValue === "Javascript" ? <>
                        <option>Loops</option>
                        <option>Conditionals</option>
                        <option>Functions</option>
                    </> : <>
                        <option>Forms</option>
                        <option>Lists</option>
                    </>
                    }
                </select>
            </div>
            <div className="mb-3">
                <input
                    type="checkbox"
                    onChange={(event) => setPrivateValue(event.target.checked)}
                    checked={privateValue}
                />Private
            </div>
            <button>Publish</button>
        </form>
    )
}