# Contact Management Web Application | [Demo](https://sajjadjavazi.github.io/Contact-Management-Web-Application/ "Demo")
**This project is a Contact Management Web Application built using React and TypeScript. The application allows users to manage a list of contacts, including adding, editing, searching, and deleting contacts. It also includes form validation to ensure that users enter all necessary information when adding or editing a contact.**

## Table of Contents
- Features
- Tech Stack
- Project Structure
- Contributing
- License
## Features
- Add Contacts: Users can add new contacts to the list by providing a name, last name, phone number, relation, and email.
- Edit Contacts: Users can edit existing contacts. The form will be pre-filled with the selected contact's information.
- Search Contacts: Users can search for contacts by name or last name using the search bar.
- Delete Contacts: Users can delete contacts from the list. A confirmation modal will appear before deletion.
- Form Validation: The application ensures that all form fields are filled before a contact is added or edited.
## Tech Stack
- **React**: Frontend library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Fast build tool and development server.
 <p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,ts,js,vite,html,tailwind,git,github,npm,vscode&theme=dark" />
  </a>
</p>

## Project Structure
```javascript
src/
├── components/
│   ├── AddEditUsers/
│   │   └── AddEditUsers.tsx
│   ├── Search/
│   │   └── Search.tsx
│   ├── UserCart/
│   │   └── UserCart.tsx
│   └── UsersList/
│       └── UsersList.tsx
├── data/
│   └── CartData.ts
├── layout/
│   └── Layout.tsx
├── types/
│   └── User.ts
├── App.tsx
└── main.tsx
```

## Contributing
Contributions are welcome! Please follow these steps:
- Fork the repository.
- Create a new branch: git checkout -b feature/your-feature-name.
- Commit your changes: git commit -m 'Add some feature'.
- Push to the branch: git push origin feature/your-feature-name.
- Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/sajjadjavazi/Contact-Management-Web-Application/blob/master/LICENSE "LICENSE") file for details.
