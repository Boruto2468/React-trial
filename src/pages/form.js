import React from 'react';
import ReactDOM from 'react-dom/client';
import caleb from "../assets/images/caleb-img.png"
import solomon from "../assets/images/solomon.png"
import john from "../assets/images/john.png"
import downArrow from "../assets/icon/down-expand_more.svg"
import leftArrow from "../assets/icon/left-arrrow.svg"
import rightArrow from "../assets/icon/right-arrow-continue.svg"

export const FreeForm = () => {
    return(
        <div>
          
    <section className="bg-[#F3F2F7] flex ">
      {/* <Navbar name="Product Cataloge" /> */}
      <section className="body w-full">
        <section className="bg-[#F3F2F7]  min-h-[100vh] pb-16">
          <h1 className="font-medium text-3xl mb-4 text-center  mt-10 min-[600px]:hidden">
            Overview
          </h1>
          <p className="font-medium text-[#A3A3A3] text-center w-[70vw] mx-auto min-[600px]:hidden">
            Here, you get a quick overview of operational data and can take
            action accordingly
          </p>
          {/* Code starts from here */}
          {/* Mobile View */}
          <div className="bg-[#F3F2F7] font-sans leading-normal tracking-normal">
          <div className="min-[1024px]:hidden">
                <h1 className="text-3xl text-center font-semibold my-5">Careers List</h1>
                <div className="container bg-white rounded-md mx-auto p-4 max-w-[400px] min-w-[309px]">
                    <h2 className="text-2xl font-bold mb-4">Careers</h2>

                    <div className="bg-white shadow overflow-y-scroll h-[800px] sm:rounded-lg">
                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-medium mb-2">
                                    <p className="font-bold">Applied Position</p>
                                    <p>Security Officer</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-medium my-3">
                                    <p className="font-bold">Experience</p>
                                    <p>2 years</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-medium mb-4">
                                    <p className="font-bold">Contact Details</p>
                                    <p>+234808965412</p>
                                </div>
                                <div className="mt-2 flex justify-between">
                                    <p className="text-sm leading-5 font-bold my-auto">Applicant CV</p>
                                    <button className="ml-2 px-6 py-1 bg-[#009653] text-white font-medium rounded-full hover:bg-green-600 focus:outline-none">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-medium mb-2">
                                    <p className="font-bold">Applied Position</p>
                                    <p>Security Officer</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-medium my-3">
                                    <p className="font-bold">Experience</p>
                                    <p>2 years</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-medium mb-4">
                                    <p className="font-bold">Contact Details</p>
                                    <p>+234808965412</p>
                                </div>
                                <div className="mt-2 flex justify-between">
                                    <p className="text-sm leading-5 font-bold my-auto">Applicant CV</p>
                                    <button className="ml-2 px-6 py-1 bg-[#009653] text-white font-medium rounded-full hover:bg-green-600 focus:outline-none">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-medium mb-2">
                                    <p className="font-bold">Applied Position</p>
                                    <p>Security Officer</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-medium my-3">
                                    <p className="font-bold">Experience</p>
                                    <p>2 years</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-medium mb-4">
                                    <p className="font-bold">Contact Details</p>
                                    <p>+234808965412</p>
                                </div>
                                <div className="mt-2 flex justify-between">
                                    <p className="text-sm leading-5 font-bold my-auto">Applicant CV</p>
                                    <button className="ml-2 px-6 py-1 bg-[#009653] text-white font-medium rounded-full hover:bg-green-600 focus:outline-none">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-medium mb-2">
                                    <p className="font-bold">Applied Position</p>
                                    <p>Security Officer</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-medium my-3">
                                    <p className="font-bold">Experience</p>
                                    <p>2 years</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-medium mb-4">
                                    <p className="font-bold">Contact Details</p>
                                    <p>+234808965412</p>
                                </div>
                                <div className="mt-2 flex justify-between">
                                    <p className="text-sm leading-5 font-bold my-auto">Applicant CV</p>
                                    <button className="ml-2 px-6 py-1 bg-[#009653] text-white font-medium rounded-full hover:bg-green-600 focus:outline-none">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl text-center font-semibold my-5">Consultation List</h1>

                <div className="bg-white rounded-md mx-auto p-4 max-w-[400px] min-w-[309px]">
                    <h2 className="text-2xl font-bold mb-4">Consultation</h2>
                    <div className="bg-white shadow overflow-y-scroll h-[700px] sm:rounded-lg">
                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Email</p>
                                    <p><a href=''>calebkola2211@gmail.com</a></p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal my-4">
                                    <p className="font-bold">Phone Number</p>
                                    <p>+234808965412</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Location</p>
                                    <p>Ajah</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                  <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Email</p>
                                    <p><a href=''>calebkola2211@gmail.com</a></p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal my-4">
                                    <p className="font-bold">Phone Number</p>
                                    <p>+234808965412</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Location</p>
                                    <p>Ajah</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Email</p>
                                    <p><a href=''>calebkola2211@gmail.com</a></p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal my-4">
                                    <p className="font-bold">Phone Number</p>
                                    <p>+234808965412</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Location</p>
                                    <p>Ajah</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Email</p>
                                    <p><a href=''>calebkola2211@gmail.com</a></p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal my-4">
                                    <p className="font-bold">Phone Number</p>
                                    <p>+234808965412</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Location</p>
                                    <p>Ajah</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <h1 className="text-3xl text-center font-semibold my-5">Employees List</h1>

                <div className="bg-white rounded-md mx-auto p-4 max-w-[400px] min-w-[309px]">
                    <h2 className="text-2xl font-bold mb-4">Employees</h2>
                    <div className="bg-white shadow overflow-y-scroll h-[700px] sm:rounded-lg">
                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-bold mb-2">
                                    <p>Employee Id</p>
                                    <p>001</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal my-3">
                                    <p className="font-bold">Position</p>
                                    <p>Security Officer</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-4">
                                    <p className="font-bold">Experience</p>
                                    <p>2 years</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Salary</p>
                                    <p className="font-semibold">₦939,000</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-bold mb-2">
                                    <p>Employee Id</p>
                                    <p>001</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal my-3">
                                    <p className="font-bold">Position</p>
                                    <p>Security Officer</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-4">
                                    <p className="font-bold">Experience</p>
                                    <p>2 years</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Salary</p>
                                    <p className="font-semibold">₦939,000</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-bold mb-2">
                                    <p>Employee Id</p>
                                    <p>001</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal my-3">
                                    <p className="font-bold">Position</p>
                                    <p>Security Officer</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-4">
                                    <p className="font-bold">Experience</p>
                                    <p>2 years</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Salary</p>
                                    <p className="font-semibold">₦939,000</p>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 pb-5 pt-2 sm:px-6 border-gray-400 border-[.5px] rounded-md my-2">
                            <div className="flex items-center space-x-3 border-b-[.5px] border-gray-300 pb-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={caleb} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-zinc-900 truncate">Caleb Kolawole</p>
                                </div>
                                <div>
                                    <button className="p-1 text-zinc-400 hover:text-zinc-500 focus:outline-none">
                                        <span className="sr-only">More options</span>
                                        •••
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm leading-5 font-bold mb-2">
                                    <p>Employee Id</p>
                                    <p>001</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal my-3">
                                    <p className="font-bold">Position</p>
                                    <p>Security Officer</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-4">
                                    <p className="font-bold">Experience</p>
                                    <p>2 years</p>
                                </div>
                                <div className="flex justify-between text-sm leading-5 font-normal mb-2">
                                    <p className="font-bold">Salary</p>
                                    <p className="font-semibold">₦939,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>

      {/* Desktop View */}
      <div class="container mx-auto max-[1023px]:hidden max-w-[1200px] min-w-[1025px]">
                
                <div class="p-6 rounded-lg mb-8 max-w-[900px] min-w-[900px]">
                    <div class="flex justify-between">
                        <h2 class="text-xl font-bold mb-4">Careers List</h2>
                        <input type="search" placeholder="Search Here" class="border p-2" />
                    </div>
                    <div class="flex justify-between items-center my-4">
                        <div class="flex gap-6">
                            <button class="text-zinc-800 py-1 px-3 rounded">Applicant Name ▼</button>
                            <button class="text-zinc-800 py-1 px-3 rounded">Applied Position ▼</button>
                            <button class="text-zinc-800 py-1 px-3 rounded">Experience ▼</button>
                            <button class="text-zinc-800 py-1 px-3 rounded">Contact Details ▼</button>
                            <button class="text-zinc-800 py-1 px-3 rounded">Applicant CV ▼</button>
                        </div>
                    </div>
                    <div class="divide-y-8">
                        <div class="grid grid-cols-6 gap-6 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "180px 120px 120px 150px 90px 50px"}}>
                            <div class="flex space-x-3">
                                <img src={caleb} />
                                <p class="text-center my-auto">Caleb Kolawole</p>
                            </div>
                            <p>Security Officer</p>
                            <div class="text-center">2 years</div>
                            <p class="bg-[#EFF4FF] text-[#3A7DFF] px-2 py-1 rounded-full">+234808965412</p>
                            <button class="bg-[#009653] text-white py-2 px-5 rounded-full">View</button>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>

                        <div class="grid grid-cols-6 gap-5 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "180px 169px 80px 155px 90px 50px"}}>
                            <div class="flex space-x-3">
                                <img src={solomon} />
                                <p class="text-center my-auto">Solomon Kolawole</p>
                            </div>
                            <p>Event Security Specialist</p>
                            <div class="text-left">3 years</div>
                            <p class="bg-[#FFF4F0] text-[#FF8F6B] text-center px-2 py-1 rounded-full">+234808965412</p>
                            <button class="bg-[#009653] text-white py-2 px-5 rounded-full">View</button>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>
                        
                        <div class="grid grid-cols-6 gap-6 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "180px 140px 90px 155px 90px 50px"}}>
                            <div class="flex space-x-3">
                                <img src={john} />
                                <p class="text-center my-auto">John Anderson</p>
                            </div>
                            <p>Security Supervisor</p>
                            <div class="text-center">5 years</div>
                            <p class="bg-[#EFF4FF] text-[#3A7DFF] text-center px-2 py-1 rounded-full">+234808965412</p>
                            <button class="bg-[#009653] text-white py-2 px-5 rounded-full">View</button>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>

                        <div class="grid grid-cols-6 gap-6 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "180px 140px 90px 155px 90px 50px"}}>
                            <div class="flex space-x-3">
                                <img src={john} />
                                <p class="text-center my-auto">John Anderson</p>
                            </div>
                            <p>Security Specialist</p>
                            <div class="text-center">4 years</div>
                            <p class="bg-[#FFF4F0] text-[#FF8F6B] text-center px-2 py-1 rounded-full">+234808965412</p>
                            <button class="bg-[#009653] text-white py-2 px-5 rounded-full">View</button>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>
                        
                    </div>
                    <div class="flex justify-end mt-4">
                        <button class="flex justify-between bg-white px-2 py-1 my-auto">
                            <p>Show 10 </p>
                            <img src={downArrow} alt="" /></button>
                        <div class="flex gap-2 bg-white">
                            <button class="bg-white text-zinc-800 border-l-[.5px] py-1 px-3 rounded"><img src={leftArrow} alt="" /></button>
                            <button class="border-gray-300 border-l-[.5px] px-2">1</button>
                            <button class="border-gray-300 border-l-[.5px] px-2">2</button>
                            <button class="border-gray-300 border-l-[.5px] px-2">3</button>
                            <button class="bg-white text-zinc-800 border-l-[.5px] py-1 px-3 rounded"><img src={rightArrow} alt="" /></button>
                        </div>
                    </div>
                </div>
        
                
                <div class="p-6 rounded-lg mb-8 max-w-[900px] min-w-[900px]">
                    <div class="flex justify-between">
                        <h2 class="text-xl font-bold my-4">Consultation List</h2>
                    </div>
                    <div class="grid grid-cols-5 items-center my-4"
                    style={{gridTemplateColumns: "100px 250px 180px 120px 170px"}}>
                        <button class="text-zinc-800 py-1 px-3 rounded">Name ▼</button>
                        <button class="text-zinc-800 py-1 px-3 rounded">Email ▼</button>
                        <button class="text-zinc-800 py-1 px-3 rounded">Phone Number ▼</button>
                        <button class="text-zinc-800 py-1 px-3 rounded">Location ▼</button>
                        <button class="text-zinc-800 py-1 px-3 rounded">Service Needed ▼</button>
                    </div>
                    <div class="divide-y-8">
                        <div class="grid grid-cols-6 gap-6 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "150px 180px 120px 90px 130px 50px"}}>
                            <div class="flex space-x-3">
                                <img src={caleb} />
                                <p class="text-center my-auto">Caleb Kolawole</p>
                            </div>
                            <p>calebkola2211@gmail.com</p>
                            <div class="text-center">+234808965412</div>
                            <p class="bg-[#EFF4FF] text-[#3A7DFF] text-right px-5 py-1 w-[80px] rounded-full">Ajah</p>
                            <p class="text-right">Security Officer</p>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>

                        <div class="grid grid-cols-6 gap-2 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "180px 200px 120px 100px 130px 90px"}}>
                            <div class="flex space-x-3">
                                <img src={solomon} />
                                <p class="text-center my-auto">Solomon Kolawole</p>
                            </div>
                            <p>solomonkola41@gmail.com</p>
                            <div class="text-center">+234808965412</div>
                            <p class="bg-[#FFF4F0] text-[#FF8F6B] text-right px-5 py-1 w-[80px] rounded-full">Epe</p>
                            <p class="text-right">Security Officer</p>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>

                        <div class="grid grid-cols-6 gap-6 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "150px 180px 120px 90px 130px 50px"}}>
                            <div class="flex space-x-3">
                                <img src={john} />
                                <p class="text-center my-auto">John Anderson</p>
                            </div>
                            <p>johnanders4182@.com</p>
                            <div class="text-center">+234808965412</div>
                            <p class="bg-[#EFF4FF] text-[#3A7DFF] text-right px-5 py-1 w-[80px] rounded-full">Ikeja</p>
                            <p class="text-right">Security Officer</p>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>

                        <div class="grid grid-cols-6 gap-6 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "150px 180px 120px 90px 130px 50px"}}>
                            <div class="flex space-x-3">
                                <img src={john} />
                                <p class="text-center my-auto">John Anderson</p>
                            </div>
                            <p>johnanders4182@.com</p>
                            <div class="text-center">+234808965412</div>
                            <p class="bg-[#EFF4FF] text-[#3A7DFF] text-right px-5 py-1 w-[80px] rounded-full">Ikeja</p>
                            <p class="text-right">Security Officer</p>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>
                        
                    </div>
                    <div class="flex justify-end mt-4">
                        <button class="flex justify-between bg-white px-2 py-1 my-auto">
                            <p>Show 10 </p>
                            <img src={downArrow} alt="" /></button>
                        <div class="flex gap-2 bg-white">
                            <button class="bg-white text-zinc-800 border-l-[.5px] py-1 px-3 rounded"><img src={leftArrow} alt="" /></button>
                            <button class="border-gray-300 border-l-[.5px] px-2">1</button>
                            <button class="border-gray-300 border-l-[.5px] px-2">2</button>
                            <button class="border-gray-300 border-l-[.5px] px-2">3</button>
                            <button class="bg-white text-zinc-800 border-l-[.5px] py-1 px-3 rounded"><img src={rightArrow} alt="" /></button>
                        </div>
                    </div>
                </div>

                <div class="p-6 rounded-lg mb-8 max-w-[900px] min-w-[900px]">
                    <div class="flex justify-between">
                        <h2 class="text-xl font-bold mb-4">Employees List</h2>
                    </div>
                    <div class="grid grid-cols-5 items-center my-4"
                    style={{gridTemplateColumns: "140px 120px 210px 120px 170px"}}>                         
                            <button class="text-zinc-800 py-1 px-3 rounded">Employee ID ▼</button>
                            <button class="text-zinc-800 py-1 px-3 rounded">Full Name ▼</button>
                            <button class="text-zinc-800 py-1 px-3 rounded">Position ▼</button>
                            <button class="text-zinc-800 py-1 px-3 rounded">Experience ▼</button>
                            <button class="text-zinc-800 py-1 px-3 rounded">Salary ▼</button>
                    </div>
                    <div class="divide-y-8">
                        <div class="grid grid-cols-6 gap-6 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "120px 150px 120px 70px 150px 50px"}}>
                            <p class="text-center font-bold">001</p>
                            <div class="flex space-x-3">
                                <img src={caleb} />
                                <p class="text-center my-auto">Caleb Kolawole</p>
                            </div>
                            <p>Security Officer</p>
                            <div class="text-center">2 years</div>
                            <p class="bg-[#EFF4FF] text-[#3A7DFF] text-right font-bold w-[100px] ml-12 px-3 py-1 rounded-full">₦939,000</p>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>

                        <div class="grid grid-cols-6 gap-6 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "120px 150px 129px 59px 150px 50px"}}>
                            <p class="text-center font-bold">002</p>
                            <div class="flex space-x-3">
                                <img src={john} />
                                <p class="text-center my-auto">Alex Johnson</p>
                            </div>
                            <p>Security Specialist</p>
                            <div class="text-center">3 years</div>
                            <p class="bg-[#EFF4FF] text-[#3A7DFF] text-right font-bold w-[100px] ml-12 px-3 py-1 rounded-full">₦490,000</p>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>
                        
                        <div class="grid grid-cols-6 gap-6 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "120px 150px 139px 50px 150px 50px"}}>
                            <p class="text-center font-bold">003</p>
                            <div class="flex space-x-3">
                                <img src={caleb} />
                                <p class="text-center my-auto">John Doe</p>
                            </div>
                            <p>Security Supervisor</p>
                            <div class="text-center">5 years</div>
                            <p class="bg-[#EFF4FF] text-[#3A7DFF] text-right font-bold w-[100px] ml-12 px-3 py-1 rounded-full">₦609,000</p>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>

                        <div class="grid grid-cols-6 gap-3 items-center py-3 px-3 w-[860px] bg-white rounded-lg" 
                            style={{gridTemplateColumns: "120px 180px 130px 70px 170px 50px"}}>
                            <p class="text-center font-bold">004</p>
                            <div class="flex space-x-3">
                                <img src={john} />
                                <p class="my-auto">Solomon Kolawole</p>
                            </div>
                            <p>Security Officer</p>
                            <div class="text-center">2 years</div>
                            <p class="bg-[#EFF4FF] text-[#3A7DFF] text-right font-bold w-[100px] ml-12 px-3 py-1 rounded-full">₦9499,000</p>
                            <button class="p-1 text-zinc-400">•••</button>
                        </div>
                        
                    </div>
                    <div class="flex justify-end mt-4">
                        <button class="flex justify-between bg-white px-2 py-1 my-auto">
                            <p>Show 10 </p>
                            <img src={downArrow} alt="" /></button>
                        <div class="flex gap-2 bg-white">
                            <button class="bg-white text-zinc-800 border-l-[.5px] py-1 px-3 rounded"><img src={leftArrow} alt="" /></button>
                            <button class="border-gray-300 border-l-[.5px] px-2">1</button>
                            <button class="border-gray-300 border-l-[.5px] px-2">2</button>
                            <button class="border-gray-300 border-l-[.5px] px-2">3</button>
                            <button class="bg-white text-zinc-800 border-l-[.5px] py-1 px-3 rounded"><img src={rightArrow} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
      </section>
    </section>
        </div>
    )
}