

import { Link } from "@remix-run/react";
import MovingObject1 from '../components/Cloud.client';
import { Suspense } from "react";


export default function Article4() {

  return (
    <div>

   <h1> Fun Example</h1>


          <br />
          <p className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold"> For the docs on ThreeJS, you can visit
            <a href='https://threejs.org/' className='text-blue-500'>{" "}here</a>.
          </p>
         
          {/* Add suspense to defer rendering of React Three Fiber */}
          <Suspense fallback={<div>Loading...</div>}>
            <MovingObject1 />
          </Suspense>
        
          <br />
          <p className="text-left text-lg tracking-tight sm:text-2xl lg:text-3xl font-serif font-bold"> For some solid advice on film sound and sound mixers in NYC, you can visit
            <a href='https://www.nycsoundguy.com' className='text-blue-500'>{" "}NYC Sound Guy here</a>.
          </p>
          <p className="text-center text-lg font-extrabold tracking-tight text-yellow-500 sm:text-2xl lg:text-4xl">
            Go back{" "}
            <Link
              to="/"
              className=" text-center text-6xl font-extrabold tracking-tight text-blue-500 sm:text-xl lg:text-4xl"
            >
              Home
            </Link>
          </p>
       

    </div>
  );
}

