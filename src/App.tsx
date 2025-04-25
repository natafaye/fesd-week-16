import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Contact } from "./types";
import ContactForm from "./ContactForm";
import { v4 as uuid } from "uuid" // Imports v4 but calls it uuid

export default function App() {
    const [contactList, setContactList] = useState<Contact[]>([
        {
            id: "fdsfsd",
            name: "Natalie",
            phoneNumber: "123-123-1234",
            preferredContactMethod: "phone"
        }
    ])
    const [showForm, setShowForm] = useState(true)

    // If you need a unique id:
    // 1) Have the backend do it
    // 2) Use a library for that
    // 3) If you kinda don't care that much, just do a random number

    const addContact = (contactData: Omit<Contact, "id">) => {
        // Longhand
        // const newContact = {
        //     id: uuid(),
        //     name: contactData.name,
        //     phoneNumber: contactData.phoneNumber,
        //     preferredContactMethod: contactData.preferredContactMethod
        // }
        // Shorthand
        const newContact = { 
            id: uuid(), // spits out a string of numbers and letters for the id
            ...contactData 
        }

        // BLASPHEMY: React won't know!
        // contactList.push(newContact)

        //setContactList(a new array with the newContact in it)

        // Verbose
        // const copy = [...contactList] // Takes the insides of the contactList and puts them in new curly brackets
        // copy.push(newContact)
        // setContactList(copy)

        // Streamlined/Professional
        setContactList([...contactList, newContact])

        console.log(contactList) // This will NOT have the newly added contact
    }

    return (
        <Container>
            <h1>Contacts</h1>
            <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>Show/Hide Form</button>
            { showForm && <ContactForm onSubmit={addContact}/>}
            <Table>
                <thead>
                    <tr><th>Name</th><th>Phone Number</th><th>Preferred Contact</th></tr>
                </thead>
                <tbody>
                    {contactList.map(contact => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.preferredContactMethod}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}