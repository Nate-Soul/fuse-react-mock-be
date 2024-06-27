# Installation Guide for Fuse React Mock API Integration

This guide provides step-by-step instructions to integrate the Fuse React Mock API with the Fuse React frontend template. Follow these steps carefully to ensure a successful setup.

## Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)
- Git
- MongoDB instance running

## Steps

### 1. Clone the Repository

Clone the repository on a single branch `main`.

```bash
git clone -b main https://github.com/Nate-Soul/fuse-react-mock-be.git
cd fuse-react-mock-be
```

### 2. Install Dependencies

Run the following command to install all necessary Node.js modules.

```bash
npm install
```

### 3. Create the `.env` File

Use the `env.example` file in the root directory to create a `.env` file.

```bash
cp env.example .env
```

### 4. Configure the `.env` File

Edit the `.env` file with the correct parameters to ensure everything works properly. Here is an example:

```env
MONGO_URI=mongodb://localhost:27017/your-db
PORT=8000
SERVER_ENV=DEVELOPMENT || PRODUCTION
```

Make sure to replace `your-db` with the actual database name you are using.

### 5. Start the Backend Server

Run the following command to start the backend server.

```bash
npm start
```

### 6. Set Up the Frontend

Navigate to the frontend directory, open a terminal, and run `npm start`.

```bash
cd path/to/your/fuse-react-frontend
npm install
npm start
```

### 7. Modify the Contact List Component

Go to the `src` directory, navigate to `apps > main > contacts`, and open the `ContactList` component. Change the `ContactListItem` key to `item._id` since MongoDB uses `_id` instead of `id`.

```javascript
// ContactList.js
<ContactListItem key={item._id} contact={item} />
```

### 8. Update the ContactListItem Component

Navigate to the `ContactListItem` component and change any instance of `contact.id` to `contact._id`.

```javascript
// ContactListItem.js
const { _id, name, email } = contact;
```

### 9. Configure API URLs in Redux Slices

Navigate to the `stores` directory, and change the URLs in both `ContactsSlice` and `ContactSlice` to point to the backend server API URL. For example: change "/api/contacts" to "https://localhost:8000/api/contacts".

### 10. Verify the Setup

Open the Fuse React frontend in your browser. You should see no contacts initially. Start adding contacts to see them appear in the UI.

```bash
open http://localhost:3000
```

## Troubleshooting

- **MongoDB Connection Issues**: Ensure your MongoDB instance is running and the `MONGO_URI` in your `.env` file is correct.
- **Server Not Starting**: Check the terminal output for errors. Ensure all dependencies are installed and the `.env` file is configured correctly.
- **Frontend Issues**: Ensure the backend server is running and the API URLs in the Redux slices are correct.

By following these steps, you should be able to integrate the Fuse React Mock API with the Fuse React frontend template successfully.