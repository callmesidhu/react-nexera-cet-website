import React from 'react'
import './CardSection.css';
import Ideathon from '../Cards/Ideathon.jpeg';
import Bgmi from '../Cards/Bgmi.jpeg';
import Efootball from '../Cards/Efootball.jpeg'
import BrainStorming from '../Cards/BrainStorming.jpeg' 

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


function xScrollLeft(){
  var left = document.querySelector(".xScroll2");
  left.scrollBy(500,0)
}
function xScrollRight(){
  var right = document.querySelector(".xScroll2");
  right.scrollBy(-500,0)
  
}


function CardSection2() {
  return (
    <div>
      <div>
      <div className="flex w-full" id="events">
        <h1 className="card-title float-left w-full mt-16">Events</h1>
        <div className="float-right flex pt-2 lg:mx-48 md:mx-24 sm:mx-5 lg:px-24 xsm:mx-0 xsm:px-0" >
          <button onClick={xScrollRight}>
          <MdChevronLeft id="slider1" className="cursor-pointer" size={50} />
          </button>
          <button onClick={xScrollLeft}>
          <MdChevronRight id="slider2" className="cursor-pointer" size={50} />
          </button>
        </div>
      </div>
      <div className="card-scroll-container">
        <div className="card-main-row xScroll2 lg:mx-52 md:mx-32 sm:mx-20 xsm:mx-12">
         
         
         
         
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets">
                <button>
                <img className="card-image" src={Ideathon} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a href="https://forms.gle/HZTewmk2nhBL2jFq6">
                <button>
                <img className="card-image" src={Bgmi} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a href="https://forms.gle/dXPp25VocsPM2XAi6">
                <button>
                <img className="card-image" src={Efootball} alt="" />
                </button>
              </a>
            </div>
          </div>
          <div className="card-section">
            <div className="card-content lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72 xsm:h-64 xsm:w-64">
              <a href="https://www.townscript.com/v2/e/nexera-24-002324/booking/tickets">
                <button>
                <img className="card-image" src={BrainStorming} alt="" />
                </button>
              </a>
            </div>
          </div>

        
          


        </div>
      </div>
    </div>
    </div>
  )
}

export default CardSection2
