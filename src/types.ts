export type Contact = {
    id: string
    name: string
    phoneNumber: string
    preferredContactMethod: string
}

// Omit<Contact, "id"> is the same as
// {
//     name: string
//     phoneNumber: string
//     preferredContactMethod: string
// }