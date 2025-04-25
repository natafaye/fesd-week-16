import { FormEvent, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Contact } from "./types"

type Props = {
    onSubmit: (contactData: Omit<Contact, "id">) => void
}

export default function ContactForm({ onSubmit }: Props) {
    const [nameValue, setNameValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [preferredValue, setPreferredValue] = useState("phone")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault() // prevent the default page refresh on form submit

        // data from the form
        const contactData = {
            name: nameValue,
            phoneNumber: phoneValue,
            preferredContactMethod: preferredValue
        }

        // contactData.name IS IDENTICAL TO contactData["n" + "ame"]

        onSubmit(contactData)

        // Clear it for the next person
        // BLASPHEMY
        // nameValue = ""
        setNameValue("")
        setPhoneValue("")
        setPreferredValue("phone")

        console.log(nameValue) // It will NOT be the empty string ""
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <Form.Control
                type="text"
                className="form-control"
                onChange={(event) => setNameValue(event.target.value)}
                value={nameValue}
            />{/* We live on the edge */}
            <label>Phone Number</label>
            <input
                type="tel"
                className="form-control"
                onChange={(event) => setPhoneValue(event.target.value)}
                value={phoneValue}
            />
            <label>Preferred Contact Method</label>
            <Form.Check type="radio" value="phone" name="preferred" label="Phone" id="phone-radio" 
                checked={preferredValue === "phone"}
                onChange={(event) => setPreferredValue(event.target.value)}
            />
            <Form.Check type="radio" value="email" name="preferred" label="Email" id="email-radio"
                checked={preferredValue === "email"}
                onChange={(event) => setPreferredValue(event.target.value)} 
            />
            <Button type="submit" variant="success" className="mt-3" >Add</Button>{/* <button className="btn btn-success">Add</button> */}
        </form>
    )
}