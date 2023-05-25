# Playground 😎

This is a personal blog and portfolio project built with React and Firebase.

---

### Demo
preparing...

### Technologies Used
- Yarn
- React
- Firebase
    - Firebase Authentication
    - Firebase Realtime Database

### Getting Started
Installing
1. Clone this repository
```
git clone https://github.com/hdain/playground.git
```
2. Install dependencies
```
yarn install
```
3. Create a [Firebase](https://firebase.google.com/?hl=ko) project and enable Realtime database and Authentication.
4. Create a `.env` file in the root directory of the project with your Firebase project credentials. Your `.env` file should look like this:

```text
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_DATABASE_URL=your-database-url
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```
5. Start the development server
```
yarn start
```
6. Open http://localhost:3000 in your browser.
7. Post creation, editing, and deletion are only available after logging in through the URL path `/login` (e.g. http://localhost:3000/login).

⚠️ This project has a Firebase security rule that prevents users who are not logged in from performing write, edit, or delete operations on posts.
```json
{
  "rules": {
     ".read": true,
    ".write": "auth.uid !== null"
   }
}
```

### License
This project is licensed under the MIT License.

