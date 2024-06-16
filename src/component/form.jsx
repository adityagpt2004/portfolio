import React, {useState} from 'react' 
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";


export default function Form(props) {


const firebaseConfig = {
  apiKey: "AIzaSyDnY6qKPMaGMVq5fYRkS3ghzgV00K9xPAQ",
  authDomain: "portfolio-4bfbd.firebaseapp.com",
  projectId: "portfolio-4bfbd",
  storageBucket: "portfolio-4bfbd.appspot.com",
  messagingSenderId: "1097710448953",
  appId: "1:1097710448953:web:c947a3b1ab1d94b90cb8e8",
  measurementId: "G-2ZVWXYEL20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



 const submit = (e)=>{
  e.preventDefault()
  const name = e.target.name.value;
  const email = e.target.email.value;
  const area = e.target.area.value;
  // setdata({name,email,area})
  const db = getDatabase();
  set(ref(db, 'portfolio/'), {
    name: name,
    email: email,
    note: area
  });
 }

  return (
    <form onSubmit={submit}>
      <div>
        <div className='font-bold text-4xl text-center'>CONTACT-FORM</div>
        <div
          className="my-5 border-4 block max-w-[1240px] m-auto rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <label htmlFor='name'> Name : </label>
          <input type="text" name="name" className='border mb-5 '/><br/>
          <label htmlFor='email'>Email :</label>
          <input type="email" name="email" className='border mb-5' />
          {/* note */}
          <textarea className='border-2 w-full' placeholder='write your message here' name="area">

          </textarea>
          {/* <!--Submit button--> */}
          <button
            type="submit"
            className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-gray-400 text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          id="btn">
            submit
          </button>
        </div>
      </div>
    </form>
  )
}




