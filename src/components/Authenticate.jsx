import { useState } from "react";



export default function Authenticate (){
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  async function handleClick() {
    try{
      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`,
      {
      method: "GET",
      headers : {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  );
  const result = await response.json();
  setSuccessMessage(result.message);
    }catch (error){
      setError(error.message);
    }
    console.log(`what`)
  }
  return (
    <>
    <h2> Authenticate! </h2>
    {error && <p>{error}</p>}
    <button onClick={handleClick}> Authenticate Token </button>
    
    </>

  )
}