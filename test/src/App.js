import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";

function App() {
  const getData = async () => {
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_API_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    
    try {
      const docRef = await addDoc(collection(db, "userData"), {
        username: 'settingData.username',
        userEmail: 'settingData.email',
        userId: `userId#${123456}`,
        userProfile:'no-data',
        userFriends:['no-data'],
        userChatRooms:['no-data']
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  useEffect(()=>{
    getData();
  },[])

  
  return (
    <div className="App">

    </div>
  );
}

export default App;
