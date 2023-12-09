import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export const useFetchCollection = ()=>{
    const [error,setError] = useState(null)

    const fetchPlanList = (fbcollection, callbackFunction) => {
        let collectionRef = collection(db,fbcollection)

        onSnapshot(collectionRef, (snapshot) => {
            let results =[];
            snapshot.docs.forEach((doc)=>{
                results.push({...doc.data(), id:doc.id})
            })
            callbackFunction(results)
        })
    };

   const createPlan = async (fbcollection, document,callbackFunction)=>{
    
    let collectionRef = collection(db,fbcollection)
        try{
            const doc = await addDoc(collectionRef,document)
            callbackFunction(doc)
        }catch (err){
            setError(err.message)
        }
    
   }

   const deletePlanById = async (fbcollection,id,callbackFunction)=>{
    const decumentRef = doc(db,fbcollection,id)

    try{
       const doc =  await deleteDoc(decumentRef)
       callbackFunction(doc)
    }catch(err){
        setError(err.message)
    }
   }

    return {
        fetchPlanList,createPlan,error,deletePlanById
    }
}
 