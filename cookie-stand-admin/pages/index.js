import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const[information, setInformation] = useState();


   function informationHandler(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const formJSON = Object.fromEntries(data.entries());

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
    setInformation(e.target.information)
  }

  // const form = document.querySelector('.containerTitle')
  // form.addEventListener('submit', informationHandler)




  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="p-4 text-xl text-left bg-green-500">
        <h1>Cookie Stand Admin</h1>
      </header>

      
      <main className="p-10 bg-cover bg-green-50">
        <div className="w-3/4 p-4 mx-auto my-4 bg-green-200 rounded"> 

        <div className="text-center containerTitle">
        <h3 className="w-full p-2 text-xl text-center">Create Cookie Stand</h3>
        </div>

        
    
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
            
            <div className="m-auto ">
            <button className="pt-3 pb-3 pl-16 pr-16 m-auto text-sm bg-green-500" type="submit" value="Submit">Create</button>
            </div>
          </div>
        </form>

        </div>
        <h3 className="text-sm text-center text-gray-500">Report Table coming soon...</h3>
        <p className="text-sm text-center text-gray-500 results">{information}</p>

        <div className="mt-6 text-sm text-center text-gray-500 results">
        <h2></h2>
        <pre></pre>
        </div>
      
      </main>

     <footer className="absolute inset-x-0 bottom-0 h-16 p-3 text-left bg-green-500 text-m">
        <p>&copy; 2021</p>
      </footer>
    </div>
  )
}
