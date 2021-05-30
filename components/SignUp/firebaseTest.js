import React,{useState} from 'react'
import db from './firbaseX'
function FirebaseTest() {
let [data,setData]=useState("")
db.collection("people").onSnapshot(snapshot=>{
       let da= snapshot.docs.map(doc=>{
            return doc.name
        })
        setData(da)
    })
    return (
        <div>
            {data}
        </div>
    )
}

export default FirebaseTest
