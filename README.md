# Playground 😎

개인 블로그 프로젝트 겸 놀이터 ❓

---

### Technologies Used
- React (CRA)
- Firebase (Realtime database and Authentication)

### Getting Started
Prerequisites
- Node.js
- yarn
- Firebase project with Firestore and Authentication set up

Installing
1. repository 를 클론해주세요.
2. `yarn` 을 실행해 필요한 dependencies를 설치해주세요. 
3. [Firebase](https://firebase.google.com/?hl=ko) project 를 생성하고  Realtime database 와 Authentication 를 설정해주세요.
4. 프로젝트의 최상위 루트에 `.env` 파일을 생성하고 개인의 SDK 설정 및 구성에 맞게 다음과 같이 파일을 작성해주세요.

```text
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_DATABASE_URL=your-database-url
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```
5. `yarn start` 을 통해 프로젝트를 실행해주세요.
6. 포스트 작성(Write), 수정(Edit), 삭제(Delete)는 url path 를 `/login` (ex. `http://localhost:3000/login`) 을 통해 로그인 후 가능합니다.

⚠️ 본 프로젝트는 로그인을 하지 않을 시 포스트 작성(Write), 수정(Edit), 삭제(Delete) 는 불가능하게 설정("rules")이 되어있습니다.
```json
{
  "rules": {
     ".read": true,
    ".write": "auth.uid !== null"
   }
}
```
