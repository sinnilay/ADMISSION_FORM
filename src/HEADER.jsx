function HEADER({ display, display2, display3,display4 }) {
  return (
    <>
      <div className={`${display4} justify-between p-4 items-center bg-slate-50`}>
        {/* Left Side - Logo */}
        <div className={`${display} sm:${display2}`}>
          <img
            className="w-20"
            src="https://media.licdn.com/dms/image/v2/C4D0BAQEwXtTqDGEOPQ/company-logo_200_200/company-logo_200_200/0/1677401334215?e=2147483647&v=beta&t=ieuHaN6gEXT8QYZukT4wdsUzy4NmG2DTqc271wfo0Do"
            alt="Logo"
          />
        </div>

        {/* Middle - Title */}
        <div className={`sm:${display2}`}>
          <h1 className={`${display3} sm:${display2} font-sans sm:text-xl ml-12 sm:mt-0 sm:ml-0`}>
            <b>DELHI PUBLIC SCHOOL - GREATER NOIDA</b>
          </h1>
        </div>
        

        {/* Right Side - Rounded Image */}
        <div className={`${display} sm:${display2} w-14 h-14 rounded-full overflow-hidden`}>
          <img
            className="w-full h-full object-cover"
            src="https://admissions.neverskip.com/assets/images/avatar.png"
            alt="Avatar"
          />
        </div>
      </div>
    </>
  );
}

export default HEADER;
