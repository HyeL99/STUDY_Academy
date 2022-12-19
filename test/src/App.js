import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

function App() {
  const getData = async () => {
    const firebaseConfig = {
      apiKey: "AIzaSyAbQr98pD63IAMOuk9J-14A-kTDRjN-fBU",
      authDomain: "test-201c7.firebaseapp.com",
      projectId: "test-201c7",
      storageBucket: "test-201c7.appspot.com",
      messagingSenderId: "579317914780",
      appId: "1:579317914780:web:9b23d326076f43ffa76159"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    
    
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
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
  getData();
  return (
    <div className="App">

    </div>
  );
}

export default App;
