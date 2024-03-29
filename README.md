# Playground 😎

This is a personal blog and portfolio project built with React and Firebase.

---

### Demo
<a href="https://hdain.dev">
 🔗 hdain.dev
</a>

### Technologies Used
- Yarn
- React
- Firebase - Realtime Database / Authentication / Hosting / Analyitics

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
3. Create a [Firebase](https://firebase.google.com/?hl=ko) project and enable Realtime database, Authentication, Hosting and Analyitics.
4. Create a `.env` file in the root directory of the project with your Firebase project credentials. Your `.env` file should look like this:
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_DATABASE_URL=your-database-url
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```
5. Add your app title to `.env`
```
VITE_APP_TITLE='Ham Dain'
VITE_APP_DESCRIPTION='Personal developer blog'
VITE_APP_TYPE=website
``` 
6. Start the development server
```
yarn start
```
7. Open http://localhost:3000 in your browser.
8. Post creation, editing, and deletion are only available after logging in through the URL path `/login` (e.g. http://localhost:3000/login).

⚠️ This project has a Firebase security rule that prevents users who are not logged in from performing write, edit, or delete operations on posts.
```json
{
  "rules": {
     ".read": true,
    ".write": "auth.uid !== null"
   }
}
```
### Deployment
To deploy the project, install Firebase CLI and run `yarn deploy`.

### License
This project is licensed under the MIT License.
