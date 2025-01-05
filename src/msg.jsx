import { useState } from "react";

function MSG() {
  const [sd,setsd] = useState(true)
  const [fd,setfd] = useState(false)
  const [md,setmd] = useState(false)
  
  const [d1, sd1] = useState("hidden");
  const [navdisplay, setnavdisplay] = useState("block");
  const [flag, setflag] = useState(true);
  const [d2, sd2] = useState("hidden");
  const [navdisplayfoemoble, setnavdisplayformobile] = useState("hidden");
  const [flag2, setflag2] = useState(true);
  function handleclick() {
    if (flag) {
      setnavdisplay("hidden");
      setflag(false);
    } else {
      setnavdisplay("block");
      setflag(true);
    }
  }
  function student() {
    setsd(true)
    setfd(false)
    setmd(false)
  }
  function mother() {
    setmd(true)
    setsd(false)
    setfd(false)
    
  }
  function father() {
    setfd(true)
    setsd(false)
    setmd(false)
  }
  function handleclickformobile() {
    if (!flag2) {
      setnavdisplayformobile("hidden");
      setflag2(true);
      
    } else {
      setnavdisplayformobile("block");
      setflag2(false);
    }
  }

  return (
    <>
      <div className="flex h-auto bg-gray-100">
        {/* Left Sidebar */}
        <nav
          className={`${
            navdisplay === "hidden" ?  "transform translate-x-[-100%]" : "transform translate-x-0"
          } ${d1} sm:${navdisplay} w-[15%] bg-slate-700 text-white p-6 rounded-lg mt-4 transition-transform duration-500 ease-in-out`}
        >
          <div className="flex justify-center">
            
            <button onClick={handleclick}>
              <img
                className="w-11"
                src="https://png.pngtree.com/png-vector/20220812/ourmid/pngtree-wrong-button-in-red-png-image_6106324.png"
                alt="NA"
              />
            </button>
          </div>
          <ul className="space-y-2 mt-5">
            <li className="hover:text-gray-300 cursor-pointer">
              <b>Admission Form</b>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <b>Download/Pdf</b>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <b>Payment</b>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <b>Syllabus</b>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <b>Add New Applicant</b>
            </li>
          </ul>
        </nav>
        {/* nav for mobile */}
        {!flag2 && (
        <div
          className="block sm:hidden fixed inset-0 bg-black/50 z-30"
          onClick={handleclickformobile} // Close nav when clicking on overlay
        ></div>
       )}
        <nav
          className={` ${navdisplayfoemoble}  mt-40  absolute inset-0  z-40 sm:hidden w-[50%] p-4 bg-slate-700 text-white sm:p-6 rounded-lg  transition-transform duration-500 ease-in-out`}
        >
          <div className="flex justify-center">
            
            <button onClick={handleclickformobile}>
              <img
                className="w-10"
                src="https://png.pngtree.com/png-vector/20220812/ourmid/pngtree-wrong-button-in-red-png-image_6106324.png"
                alt="NA"
              />
            </button>
          </div>
          <ul className="space-y-2 mt-5">
            <li className="hover:text-gray-300 cursor-pointer">
              <b>Admission Form</b>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <b>Download/Pdf</b>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <b>Payment</b>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <b>Syllabus</b>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <b>Add New Applicant</b>
            </li>
          </ul>
        </nav>
        {/* Right Content */}
        <div className="flex-1 p-6">
        {
          !flag ?
          <button onClick={handleclick}>
          <img
                className=" hidden sm:hidden w-11 ml-3 mb-6 " 
                src="https://i.postimg.cc/02rxjS8c/THEE-LINE-removebg-preview.png"
                alt="NA"
          />
          </button>:
           <button onClick={handleclickformobile} > 
           <img
                 className=" block sm:hidden w-11 ml-3 mb-6" 
                 src="https://i.postimg.cc/02rxjS8c/THEE-LINE-removebg-preview.png"
                 alt="NA"
           />
           </button>
        }
        {
          !flag ?
          <button onClick={handleclick}>
          <img
                className=" hidden sm:block w-11 ml-3 mb-6 " 
                src="https://i.postimg.cc/02rxjS8c/THEE-LINE-removebg-preview.png"
                alt="NA"
          />
          </button>:
           <button onClick={handleclick} > 
           <img
                 className=" hidden sm:hidden w-11 ml-3 mb-6" 
                 src="https://i.postimg.cc/02rxjS8c/THEE-LINE-removebg-preview.png"
                 alt="NA"
           />
           </button>
        }
        
          {/* Quote Section */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-md mb-6">
            <p className="font-semibold text-lg">QUOTE:</p>
            <b>
              <p className="mt-2">
                Education is a passport to the future, for tomorrow belongs to
                those who prepare for it today.
              </p>
            </b>
          </div>

          {/* User Form Section */}
          <form className="bg-white p-6 rounded-lg shadow-md">
  <h1 className="text-xl mb-2 text-blue-700">
    <b>ONLINE REGISTRATION FORM FOR ADMISSION</b>
  </h1>
  <h2 className="font-semibold mb-4 hover:bg-green-200 cursor-pointer" onClick={student}>1. Student's Details</h2>
<div className={sd?"grid":"hidden"}>
  <div className={` grid-cols-1 md:grid-cols-3 gap-4 mb-4`}>
    <div>
      <label htmlFor="name" className="block font-medium mb-1">
        Name of the student
      </label>
      <input
        type="text"
        id="name"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="class" className="block font-medium mb-1">
        Class for which admission is sought
      </label>
      <input
        type="text"
        id="class"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="dob" className="block font-medium mb-1">
        Date of birth
      </label>
      <input
        type="date"
        id="dob"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="gender" className="block font-medium mb-1">
        Gender:
      </label>
      <div className="flex space-x-4">
        <div>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </div>
      </div>
    </div>

    <div>
      <label htmlFor="age" className="block font-medium mb-1">
        Age
      </label>
      <input
        type="number"
        id="age"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="religion" className="block font-medium mb-1">
        Religion:
      </label>
      <select
        id="religion"
        name="religion"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
        <option value="" selected>
          Select your religion
        </option>
        <option value="hinduism">Hinduism</option>
        <option value="christianity">Christianity</option>
        <option value="islam">Islam</option>
        <option value="buddhism">Buddhism</option>
        <option value="sikhism">Sikhism</option>
        <option value="judaism">Judaism</option>
        <option value="jainism">Jainism</option>
        <option value="zoroastrianism">Zoroastrianism</option>
        <option value="shinto">Shinto</option>
        <option value="taoism">Taoism</option>
        <option value="other">Other</option>
        <option value="prefer-not-to-say">Prefer not to say</option>
      </select>
    </div>

    <div>
      <label htmlFor="blood-group" className="block font-medium mb-1">
        Blood Group:
      </label>
      <select
        id="blood-group"
        name="blood-group"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
        <option value="" selected>
          Select your Blood Group
        </option>
        <option value="A+">A+</option>
        <option value="B+">B+</option>
        <option value="A-">A-</option>
        <option value="O+">O+</option>
        <option value="AB+">AB+</option>
      </select>
    </div>
  </div>

  {/* Additional Fields */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="nationality" className="block font-medium mb-1">
        Nationality:
      </label>
      <select
        id="nationality"
        name="nationality"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
        <option value="" selected>
          Select your Nationality
        </option>
        {/* Add all the nationality options */}
        <option value="india">India</option>
        <option value="us">USA</option>
        <option value="uk">UK</option>
        <option value="canada">Canada</option>
        <option value="australia">Australia</option>
        {/* More options here */}
      </select>
    </div>

    <div>
      <label htmlFor="place-of-birth" className="block font-medium mb-1">
        Place of Birth:
      </label>
      <input
        type="text"
        id="place-of-birth"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="single-parents" className="block font-medium mb-1">
        Single Parent:
      </label>
      <select
        id="single-parents"
        name="single-parents"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="one">One</option>
        <option value="two">Two</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="adhar-number" className="block font-medium mb-1">
        Aadhar Number:
      </label>
      <input
        type="text"
        id="adhar-number"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="mobile-number" className="block font-medium mb-1">
        Communication Mobile Number:
      </label>
      <input
        type="tel"
        id="mobile-number"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="email-id" className="block font-medium mb-1">
        Communication Email ID:
      </label>
      <input
        type="email"
        id="email-id"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="mother-tongue" className="block font-medium mb-1">
        Mother Tongue:
      </label>
      <input
        type="text"
        id="mother-tongue"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="child-status" className="block font-medium mb-1">
        Child Status in Family:
      </label>
      <select
        id="child-status"
        name="child-status"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="younger">Younger</option>
        <option value="elder">Elder</option>
      </select>
    </div>

    <div>
      <label htmlFor="category" className="block font-medium mb-1">
        Category or Community:
      </label>
      <select
        id="category"
        name="category"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="general">General</option>
        <option value="obc">OBC</option>
        <option value="sc">SC</option>
        <option value="st">ST</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div>
      <label htmlFor="studying-class" className="block font-medium mb-1">
        Class in which studying:
      </label>
      <input
        type="number"
        id="studying-class"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>
 <div className="flex justify-center gap-4">
  <button
    type="submit"
    className=" bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-600 p-3"
  >
    SAVE
  </button>
  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 p-3"
  >
    NEXT
  </button>
  </div>
</div>  
          </form>
          <form className="bg-white p-6 rounded-lg shadow-md">
  
  <h2 className="font-semibold mb-4 hover:bg-green-200 cursor-pointer" onClick={father}>2. Fathers Details</h2>
<div className={fd?"grid":"hidden"}>
  <div  className={ "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"}>
    <div>
      <label htmlFor="name" className="block font-medium mb-1">
        Fathers Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

   

    <div>
      <label htmlFor="dob" className="block font-medium mb-1">
        Date of birth
      </label>
      <input
        type="date"
        id="dob"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>



  {/* Additional Fields */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="nationality" className="block font-medium mb-1">
        Father Nationality:
      </label>
      <select
        id="nationality"
        name="nationality"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
        <option value="" selected>
          Select your Nationality
        </option>
        {/* Add all the nationality options */}
        <option value="india">India</option>
        <option value="us">USA</option>
        <option value="uk">UK</option>
        <option value="canada">Canada</option>
        <option value="australia">Australia</option>
        {/* More options here */}
      </select>
    </div>

    <div>
      <label htmlFor="place-of-birth" className="block font-medium mb-1">
        Father Education:
      </label>
      <input
        type="text"
        id="place-of-birth"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="single-parents" className="block font-medium mb-1">
        Single Parent:
      </label>
      <select
        id="single-parents"
        name="single-parents"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="one">One</option>
        <option value="two">Two</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="adhar-number" className="block font-medium mb-1">
        Aadhar Number:
      </label>
      <input
        type="text"
        id="adhar-number"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="mobile-number" className="block font-medium mb-1">
        Fathers Mobile Number:
      </label>
      <input
        type="tel"
        id="mobile-number"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="email-id" className="block font-medium mb-1">
        Father Email ID:
      </label>
      <input
        type="email"
        id="email-id"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="mother-tongue" className="block font-medium mb-1">
        Mother Tongue:
      </label>
      <input
        type="text"
        id="mother-tongue"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="category" className="block font-medium mb-1">
        Category or Community:
      </label>
      <select
        id="category"
        name="category"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="general">General</option>
        <option value="obc">OBC</option>
        <option value="sc">SC</option>
        <option value="st">ST</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div>
    
      <input
        type="number"
        id="studying-class"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>
 <div className="flex justify-center gap-4">
  <button
    type="submit"
    className=" bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-600 p-3"
  >
    SAVE
  </button>
  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 p-3"
  >
    NEXT
  </button>
  </div>
</div>  
          </form>
          <form className="bg-white p-6 rounded-lg shadow-md">
  
  <h2 className="font-semibold mb-4 hover:bg-green-200 cursor-pointer" onClick={mother}>3. Mother Details</h2>
<div className={md?"grid":"hidden"}>
  <div  className={ "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"}>
    <div>
      <label htmlFor="name" className="block font-medium mb-1">
        Mothers Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="class" className="block font-medium mb-1">
       Mothers Occupation
      </label>
      <input
        type="text"
        id="class"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="dob" className="block font-medium mb-1">
        Date of birth
      </label>
      <input
        type="date"
        id="dob"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>



  {/* Additional Fields */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="nationality" className="block font-medium mb-1">
        Mother Nationality:
      </label>
      <select
        id="nationality"
        name="nationality"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
        <option value="" selected>
          Select your Nationality
        </option>
        {/* Add all the nationality options */}
        <option value="india">India</option>
        <option value="us">USA</option>
        <option value="uk">UK</option>
        <option value="canada">Canada</option>
        <option value="australia">Australia</option>
        {/* More options here */}
      </select>
    </div>

    <div>
      <label htmlFor="place-of-birth" className="block font-medium mb-1">
        Place of Birth:
      </label>
      <input
        type="text"
        id="place-of-birth"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="adhar-number" className="block font-medium mb-1">
        Aadhar Number:
      </label>
      <input
        type="text"
        id="adhar-number"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="mobile-number" className="block font-medium mb-1">
        Mothers Mobile Number:
      </label>
      <input
        type="tel"
        id="mobile-number"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div>
      <label htmlFor="email-id" className="block font-medium mb-1">
        Mothers Email ID:
      </label>
      <input
        type="email"
        id="email-id"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div>
      <label htmlFor="mother-tongue" className="block font-medium mb-1">
        Mother Tongue:
      </label>
      <input
        type="text"
        id="mother-tongue"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

   
    <div>
      <label htmlFor="category" className="block font-medium mb-1">
        Category or Community:
      </label>
      <select
        id="category"
        name="category"
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="general">General</option>
        <option value="obc">OBC</option>
        <option value="sc">SC</option>
        <option value="st">ST</option>
        <option value="other">Other</option>
      </select>
    </div>

  
  </div>
 <div className="flex justify-center gap-4">
  <button
    type="submit"
    className=" bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-600 p-3"
  >
    SAVE
  </button>
  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 p-3"
  >
    NEXT
  </button>
  </div>
</div>  
          </form>
        </div>
      </div>
    </>
  );
}

export default MSG;
