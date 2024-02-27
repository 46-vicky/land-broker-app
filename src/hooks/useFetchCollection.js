import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export const useFetchCollection = ()=>{
    const [error,setError] = useState(null)

    const fetchData = (fbcollection, callbackFunction) => {
        let collectionRef = collection(db,fbcollection)

        onSnapshot(collectionRef, (snapshot) => {
            let results =[];
            snapshot.docs.forEach((doc)=>{
                results.push({...doc.data(), id:doc.id})
            })
            callbackFunction(results)
        })
    };

   const createData = async (fbcollection, document,callbackFunction)=>{
    
    let collectionRef = collection(db,fbcollection)
        try{
            const doc = await addDoc(collectionRef,document)
            callbackFunction(doc)
        }catch (err){
            setError(err.message)
        }
    
   }

   const deleteDataById= async (fbcollection,id,callbackFunction)=>{
    const decumentRef = doc(db,fbcollection,id)

    try{
       const doc =  await deleteDoc(decumentRef)
       callbackFunction(doc)
    }catch(err){
        setError(err.message)
    }
   }

   const updateData = async (fbcollection,document,callbackFunction)=>{
    console.log(document);
    const decumentRef = doc(db,fbcollection,document.id)
        try{
            const doc =  await updateDoc(decumentRef,document)
            callbackFunction(doc)
        }catch(err){
            setError(err.message)
        }
   }

    return {
        fetchData,createData,error,deleteDataById,updateData
    }
}
 