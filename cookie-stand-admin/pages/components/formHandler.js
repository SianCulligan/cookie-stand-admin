import React, { useState} from 'react'

const formHandler = () => {
    const[information, setInformation] = useState();


    function informationHandler(e){
     e.preventDefault();
     const data = new FormData(e.target);
     const formJSON = Object.fromEntries(data.entries());
 
     const results = document.querySelector('.results pre');
     results.innerText = JSON.stringify(formJSON, null, 2);
     setInformation(e.target.information.value)
   }
 
   const form = document.querySelector('.containerTitle')
   form.addEventListener('submit', informationHandler)

   return (
    <div className="mt-6 text-sm text-center text-gray-500 results">
    <h2></h2>
    <pre></pre>
    </div>
   )
}

export default formHandler