import React from 'react'
import head from './head'
import Dropdown from './dropdown'
export default function page() {
  return (
    <div className=' h-full bg-white'>
      <div className='sticky z-20 bg-transparent inset-0  backdrop-blur-md'>
        <div className=' flex justify-start pt-4 pl-4 '>
          <div>
<img src='/image/2.png' className=' w-20 h-20'>
</img>
          </div>
        </div>
        <nav className='flex md:justify-center lg:justify-center sm:justify-end justify-end w-full mt-[-53px]'>
          <div className=' pt-3  invisible sm:invisible md:visible lg:visible'>
        <a href='#/' className=' p-3 font-bold hover:bg-slate-100'>Home</a>
        <a href='#about' className=' p-3 font-bold hover:bg-slate-100'>About</a>
        <a href='#portfolio' className=' p-3 font-bold hover:bg-slate-100'>Portfolio</a>
        <a href='#services' className=' p-3 font-bold hover:bg-slate-100'>Services</a>
        <a href='#skills' className=' p-3 font-bold hover:bg-slate-100'>Skills</a>
        <a href='#contact' className=' p-3 font-bold hover:bg-slate-100'>Contact</a>
        </div>
        <div className=' mr-3 mt-[-8px] '>
          <Dropdown/>
        </div>
        </nav>
      </div>
      <div id='/' className=' pt-[100px]'>
 <h1 className='font-bold text-5xl ml-4 text-slate-700'><h1>
 I&apos;m</h1> <br></br>
 Full Stack Developer
</h1>
 <p className='font-semibold text-xl text-slate-600 mr-4 ml-4'>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor
</p>
</div>
      <div className=' flex justify-center'>
        <img src='/image/3.jpg' alt='my picture' className=' pr-4 pl-4 pt-10'></img>  
      </div>
      <div id='about' className='pt-[112px]'>
        <h1 className='font-bold text-5xl text-slate-600 mt-24 ml-4 border-b border-b-gray-400'>
          About</h1>
        <p className=' font-semibold text-lg text-slate-500 mt-8 mr-4 ml-4'>
        Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className=''>
        <button className=' bg-black rounded-3xl mt-8 ml-4 w-52 h-10 text-slate-200 font-semibold text-lg  hover:bg-slate-100 sm:w-48 sm:h-10 md:w-48  md:h-10 lg:w-52 lg:h-12 xl:w-52 xl:h-14 '>
        <div className=' flex justify-center'><span className='pt-[2px] '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z" clipRule="evenodd" />
</svg>
</span>
<span className=''>
 Download Resume
 </span></div>
        </button>
        </div>
      </div>
      <div id='portfolio' className='pt-[112px]'>
      <h1 className='font-bold text-5xl text-slate-600 mt-24 ml-4 border-b border-b-gray-400'>
       Portfolio
      </h1>
        <p className=' font-semibold text-lg text-slate-500 mt-8 mr-4 ml-4'>
This is my portfolio
        </p>
      </div>
      <div>
        <img className=' hover:bg-slate-100 pt-10 pr-4 pl-4' src='/image/4.jpg'></img>
        <img className=' hover:bg-slate-100 pt-10 pr-4 pl-4' src='/image/5.jpg'></img>
        <img className=' hover:bg-slate-100 pt-10 pr-4 pl-4' src='/image/6.jpg'></img>
        <img className=' hover:bg-slate-100 pt-10 pr-4 pl-4' src='/image/7.jpg'></img>
        <img className=' hover:bg-slate-100 pt-10 pr-4 pl-4' src='/image/8.jpg'></img>
        <img className=' hover:bg-slate-100 pt-10 pr-4 pl-4' src='/image/9.jpg'></img>
      </div>
      <div id='services' className='pt-[112px]'>
      <h1 className='font-bold text-5xl text-slate-600 mt-24 ml-4 border-b border-b-gray-400'>
       Services
      </h1>
      <div className='flex justify-center'>
      <span className=' mt-10 ml-4'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-sky-400">
  <path fillRule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
</svg>
<h1 className='font-bold text-lg text-slate-600 ml-4 ' >
  Digital Strategy
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-sky-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
      </span>
      <span className=' mt-10 ml-4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-cyan-400">
  <path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
</svg>
<h1 className='font-bold text-lg text-slate-600 ml-4 ' >
  Web Designing 
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-cyan-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
      </span>
      </div>
      <div className='flex justify-center'>
      <span className=' mt-10 ml-4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-teal-400 w-16 h-16">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
</svg>
<h1 className='font-bold text-lg text-slate-600 ml-4 ' >
  User Experience
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-teal-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
  
      </span>
      <span className=' mt-10 ml-4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-emerald-400 w-16 h-16">
  <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
</svg>
<h1 className='font-bold text-lg text-slate-600 ml-4 ' >
  Web Development
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-emerald-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
  
      </span>
      </div>
      <div className='flex justify-center'>
      <span className=' mt-10 ml-4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-green-400 w-16 h-16">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
</svg>
<h1 className='font-bold text-lg text-slate-600 ml-4 ' >
  Problem Solving
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-green-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
  
      </span>
      <span className=' mt-10 ml-4'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-lime-400 w-16 h-16">
  <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
  <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
</svg>

<h1 className='font-bold text-lg text-slate-600 ml-4 ' >
  Mobile Applications
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-lime-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
      </span>
      </div>
      </div>
      <div id='skills' className='pt-[112px]'>
<h1 className='font-bold text-5xl text-slate-600 mt-24 ml-4 border-b border-b-gray-400'>
 Skills
</h1>
<div className='flex justify-center mt-10'>
  <span>
<img src='/image/10.jpeg' className=' w-52 h-24 pr-4 '>
</img>
<h1 className='font-bold text-lg text-slate-600 ml-4 '>
Next.JS 13
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-cyan-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p></span>
<span>
<img src='/image/16.png' className=' w-52 h-24 pr-4'>
</img>
<h1 className='font-bold text-lg text-slate-600 ml-4 '>
Tailwind CSS
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-cyan-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
</span>
</div>
<div className='flex justify-center mt-10'>
  <span>
<img src='/image/12.png' className=' w-52 h-24 pr-4 '>
</img>
<h1 className='font-bold text-lg text-slate-600 ml-4 '>
Typescript
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-cyan-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p></span>
<span>
<img src='/image/13.png' className=' w-52 h-24 pr-4'>
</img>
<h1 className='font-bold text-lg text-slate-600 ml-4 '>
React.JS
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-cyan-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
</span>
</div>
<div className='flex justify-center mt-10'>
  <span>
<img src='/image/14.png' className=' w-52 h-24 pr-4 '>
</img>
<h1 className='font-bold text-lg text-slate-600 ml-4 '>
Figma
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-cyan-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p></span>
<span>
<img src='/image/15.png' className=' w-52 h-24 pr-4'>
</img>
<h1 className='font-bold text-lg text-slate-600 ml-4 '>
Java
</h1>
<p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4 border-b border-b-cyan-600'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
</span>
</div> 
<div id='contact' className='pt-[112px]'>
<h1 className=' font-bold text-5xl text-slate-600 mt-24 ml-4 border-b border-b-gray-400'>
 Contact Me
  </h1>
  <div className=' flex-none sm:flex md:flex  lg:flex justify-center  xl:flex '>
    <span>
  <h1 className=' font-bold text-2xl text-slate-600 mt-24 ml-4'>
 About Me
  </h1>
  <p className=' font-semibold text-sm text-slate-500 mt-4 mr-4 ml-4'>
  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt <br></br>ut labore et dolore magna aliqua.
  </p>
  <h1 className=' font-semibold text-md text-slate-600 mt-8 ml-4'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-violet-500 w-8 h-8">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>
myportfolio@gmail.com
</h1>
<h1 className=' font-semibold text-md text-slate-600 mt-8 ml-4'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-green-500 w-8 h-8">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
</svg>
+92123-45678910
</h1>
<h1 className=' font-semibold text-md text-slate-600 mt-8 ml-4'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-cyan-500 w-8 h-8">
  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
</svg>
s/65456, street 56 ,dolor sit amet,Lorem ipsum
</h1>
  </span>
  <span className='mt-10   ml-4 sm:mt-24 md:mt-24 lg:mt-24 xl:mt-24 lg:mr-5 xl:mr-5'>
 <form className='mt-10   ml-4 lg:mr-5 xl:mr-5'>
 <label className=' font-semibold w-10 h-10' form="Name">Name:</label><br></br>
<input className=' w-60 h-10 border-2 rounded-lg border-black bg-slate-200'type="text" id="Name" name="Name"></input><br></br>
<label className=' font-semibold w-10 h-10' form="Email">E-mail:</label><br></br>
<input className=' w-60 h-10 border-2 rounded-lg border-black bg-slate-200' type="text" id="Email" name="Email"></input><br></br>
<label className=' font-semibold w-10 h-10' form="Message">Message:</label><br></br>
<input className=' w-60 h-60 border-2 rounded-lg border-black bg-slate-200'type="text" id="Message" name="Message"></input>
 </form>
 <h1 className='ml-4 font-semibold text-md text-slate-600 mt-2 hover:text-teal-400'>
  FACEBOOK
 </h1>
 <h1 className='ml-4 font-semibold text-md text-slate-600 mt-2 hover:text-teal-400'>
INSTAGRAM
 </h1>
 <h1 className='ml-4 font-semibold text-md text-slate-600 mt-2 hover:text-teal-400'>
TWITTER
 </h1>
 <h1 className='ml-4 font-semibold text-md text-slate-600 mt-2 hover:text-teal-400'>
LINKEDIN
 </h1>
 </span>
  </div>
</div>
      </div>
    </div>
  )
}
