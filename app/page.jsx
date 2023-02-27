import { FirebaseApp } from "./firebase/firebase"
import  {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from "firebase/firestore"


export default function WelcomePage() {
    
    
    const db = getFirestore(FirebaseApp);
    const docRef = doc(db, 'pagos', 'M9MMwjc9jtyjUsgZLUp0')
    const pago = getDoc(docRef)
    // const pago = docSnap.data()
    console.log(pago);

    return(
        <h1>HOOOO</h1>
    )
}