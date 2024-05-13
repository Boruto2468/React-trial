import './App.css';
import bgmimage from './assets/images/bg-intro-mobile.png';
import bgdimage from './assets/images/bg-intro-desktop.png';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FreeForm } from './pages/form'; 

function HomePage() {
  const [inputType, setInputType] = useState('password');

  const toggleInputType = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="App bg-red-400 h-[100vh] w-[100vw] text-white min-w-[390px] max-h-[2000px]"
      style={{backgroundImage: `url(${bgdimage})`}}>
        <div className='mx-4 min-w-[390px] min-[901px]:hidden'>
          <div className='py-12 min-[1000px]:mx-5'>
            <h1 className='text-[20px] font-bold w-[200px] mx-auto'>Learn to code by watching others</h1>
            <p className='w-[280px] mx-auto'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
              but understanding how developers think is invaluable. </p>
          </div>
          
          <div className='max-w-[500px] mx-auto'>
            <button className='bg-indigo-500 rounded-md shadow-lg w-full py-3 my-3'><p className='w-[200px] mx-auto'> <span className='font-bold'>Try if free 7 days</span> then $20/mo. thereafter</p></button>
            <form className='bg-white space-y-3 rounded-md shadow-lg mt-3 font-bold grid w-full'>
              <input type='text' required placeholder='First Name' className='border px-3 py-3 mx-8 rounded mt-4 text-black'/>
              <input type='text' required placeholder='Last Name' className='border px-3 py-3 mx-8 rounded text-black'/>
              <input type='email' required placeholder='Email Address' className='border px-3 py-3 mx-8 rounded text-black'/>
              <input type={inputType} required placeholder='*****' id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='border px-3 py-3 mx-8 rounded text-black'/>
              <div className='flex ml-8 space-x-2'>
                <input type="checkbox" checked={inputType === 'text'} // Checked when input is text
                onChange={toggleInputType} />
                <p className='text-black'>Show Password</p>
              </div>
              <button type='submit' className='bg-emerald-500 border px-12 py-3 rounded mx-8 text-[13px] font-normal'> <Link to="/form">CLAIM YOUR FREE TRIAL</Link> </button>

              <footer className='font-bold text-gray-300 w-[350px] pb-3'>By clicking the button, you are agreeing to our <span className='text-red-500'>Terms and Services</span></footer>
            </form>
          </div>       
      </div>

      {/* Desktop View */}
      <div className='flex max-[900px]:hidden max-w-[1300px] max-[1138px]:mx-7 mx-auto max pt-44 space-x-10 min-[901px]:bg-full'>
        <div className='text-left my-auto'>
          <h1 className='text-[40px] font-bold w-[350px] mb-8'>Learn to code by watching others</h1>
          <p className='w-[500px]'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
                but understanding how developers think is invaluable.</p>
        </div>
        <div className='min-w-[600px]'>
          <button className='bg-indigo-500 rounded-md shadow-lg py-3 my-3 px-[130px]'><p className='w-full'><span className='font-bold'>Try if free 7 days</span> then $20/mo. thereafter</p></button>
          <form className='bg-white space-y-3 rounded-md shadow-lg mt-3 font-bold grid w-full min-w-[190px]'>
              <input type='text' required placeholder='First Name' className='border px-3 py-3 mx-8 rounded mt-4 text-black'/>
              <input type='text' required placeholder='Last Name' className='border px-3 py-3 mx-8 rounded text-black'/>
              <input type='email' required placeholder='Email Address' className='border px-3 py-3 mx-8 rounded text-black'/>
              <input type={inputType} required placeholder='*****' id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" className='border px-3 py-3 mx-8 rounded text-black'/>
              <div className='flex ml-8 space-x-2'>
                <input type="checkbox" checked={inputType === 'text'} // Checked when input is text
                onChange={toggleInputType} />
                <p className='text-black'>Show Password</p>
              </div>
                <button type='submit' className='bg-emerald-500 border px-12 py-3 rounded mx-8 text-[13px] font-normal'> <Link to="/form">CLAIM YOUR FREE TRIAL</Link> </button>
              {/* <button type='submit' className='bg-emerald-500 border px-12 py-3 rounded mx-8 text-[13px] font-normal'>CLAIM YOUR FREE TRIAL</button> */}

              <footer className='font-bold text-gray-300 w-[350px] pb-3'>By clicking the button, you are agreeing to our <span className='text-red-500'>Terms and Services</span></footer>
            </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />}/>
          <Route path="/form" element={<FreeForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
