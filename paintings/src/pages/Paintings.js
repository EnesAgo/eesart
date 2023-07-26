import React, { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot} from "firebase/firestore";
import expObj from "../firebase/firebaseInit";
function Paintings() {

    const [paintings, setPaintings] = useState([])

    const {firestoreDb} = expObj
    const colletionRef = collection(firestoreDb, 'paintings');


    async function PostD(){
        try {
            const docRef = await addDoc(collection(firestoreDb, "paintings"), {
                name: "Alexander",
                desc: "Alexander the Great",
                imgs: ['https://firebasestorage.googleapis.com/v0/b/eesart-test.appspot.com/o/paintings%2FAlexanderTheGreat.jpeg?alt=media&token=2a3f956a-58d4-4375-9cc0-97f3dfeedd23'],
                price: 1000
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async function GetDocs(){

        const unsub = onSnapshot(colletionRef, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setPaintings(items)
        });
    }

    useEffect(() => {
        GetDocs()
    }, [])



    return (
        <div>
            <button onClick={() => {PostD()}}>Click</button>
        </div>
    );
}

export default Paintings;
