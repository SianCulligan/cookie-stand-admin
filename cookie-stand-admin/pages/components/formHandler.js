import React, { useState} from 'react'




function informationHandler(e){
     e.preventDefault();
     const data = new FormData(e.target);
     const formJSON = Object.fromEntries(data.entries());
 
     const results = document.querySelector('.results pre');
     results.innerText = JSON.stringify(formJSON, null, 2);
     setInformation(e.target.information.value)
   }

   
   
   
   function formHandler () {
    const form = document.querySelector('.containerTitle')
    form.addEventListener('submit', informationHandler)
    return(
        <>
    <form onSubmit={informationHandler} className="p-4 mt-0">
          <div className="w-full">
            <label className="text-xs">Location: 
              <input required placeholder="Enter location" className="w-10/12 p-0 ml-2" type="text" name="location"/>
            </label>
          </div>

          <div className="grid grid-flow-col grid-cols-4 grid-rows-1 gap-4 mt-2">

            <div>
            <label className="text-xs">Minimum Customers per Hour
            <input required placeholder="Enter customers" type="text" name="minCust"/></label>
            </div>

            <div>
            <label className="text-xs">Maximum Customers per Hour
            <input required placeholder="Enter customers" type="text" name="maxCust"/></label>
            </div>

            <div>
            <label className="text-xs">Average Cookies per Sale
            <input required placeholder="Enter cookies"type="text" name="avgCookies"/></label>
            </div>
            
            <div className="m-auto bg-purple-500">
            <button className="pt-3 pb-3 pl-16 pr-16 m-auto text-sm bg-green-500" type="submit" value="Submit">Create</button>
            </div>
          </div>
        </form>

    <div className="mt-6 text-sm text-center text-gray-500 results">
    <h2></h2>
    <pre></pre>
    </div>
        </>
   )
}

export default formHandler