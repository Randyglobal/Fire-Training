// service cloud.firestore {
//     match /databases/{database}/documents {
//       match /{document=**} {
//         allow read, write: if request.time < timestamp.date(2021, 6, 18);
//       }
//     }
//   }