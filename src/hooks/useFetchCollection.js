import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useFetchCollection = ()=>{
    //const [documents, setDocuments] = useState(null)

    const makeRequest = (fbcollection, callbackFunction) => {
        let collectionRef = collection(db,fbcollection)

        onSnapshot(collectionRef, (snapshot) => {
            let results =[];
            snapshot.docs.forEach((doc)=>{
                results.push({...doc.data(), id:doc.id})
            })
            callbackFunction(results)
        })

        //return () => unsub();
    };

    return {
        makeRequest
    }
}
 