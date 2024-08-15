import { ChangeEvent, FormEvent, useState } from "react"
import type { BlogPost } from "./types"

type Props = {
    onSubmit: (blogPostData: Omit<BlogPost, 'id'>) => void
    // optionally you can provide the initial values that you want the form to start with
    initialValues?: Omit<BlogPost, 'id'>
}

const defaultInitialValues = {
    text: "",
    category: "Javascript",
    subCategory: "",
    private: false
}

export default function PostForm({ onSubmit, initialValues }: Props) {
    // State for in-progress form data
    const [formValues, setFormValues] = useState(initialValues || defaultInitialValues)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => 
        setFormValues({ ...formValues, [event.target.name]: event.target.value })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault() // preventing the refresh
        onSubmit(formValues)
        setFormValues(initialValues || defaultInitialValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <textarea
                    name="text"
                    className="w-100"
                    onChange={handleChange}
                    value={formValues.text}
                />
            </div>
            <div className="mb-3">
                Category:
                <select
                    name="category"
                    onChange={handleChange}
                    value={formValues.category}
                >
                    <option>Javascript</option>
                    <option>React</option>
                    <option>HTML & CSS</option>
                </select>
            </div>
            <div className="mb-3">
                Sub Category:
                <select
                    name="subCategory"
                    onChange={handleChange}
                    value={formValues.subCategory}
                >
                    {formValues.category === "Javascript" ? <>
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
                    onChange={(event) => setFormValues({ ...formValues, private: event.target.checked })}
                    checked={formValues.private}
                />Private
            </div>
            <button>Publish</button>
        </form>
    )
}