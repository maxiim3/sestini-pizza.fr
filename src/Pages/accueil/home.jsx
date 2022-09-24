import React from 'react'
import { Hero } from './home-hero'
import { Footer } from '../../Layout/footer'
import { About } from './home-about'
import { NeoMorphismBTN } from '../../Components/neomorphismButton'
import { LayoutHomePage } from '../../Layout/homePageLayout'
import '../../../node_modules/animate.css/animate.css'
import { Modal } from './modal'

const Home = ({ refPDM, refAbout, refTop, handleScroll }) => {
   return (
      <>
         <main
            ref={refTop}
            className={
               'relative grid place-content-center gap-24 overflow-x-hidden bg-dark-grey md:gap-56 lg:gap-64 xl:gap-48'
            }>
            <header
               className={
                  'animate__animated animate__slideInDown tablet:hidden hidden bg-dark-grey md:block md:grid md:max-h-[50vh] md:w-full md:place-content-center mobile:hidden'
               }>
               <video
                  className={
                     'hidden hover:cursor-pointer active:cursor-grabbing md:block xl:rounded-3xl'
                  }
                  src={'./video/pexels-denys-gromov-6176588.mp4'}
                  controls={true}
                  controlsList={'nodownload nofullscreen noremotreplayback'}
                  loop={true}
                  muted={true}
               />
            </header>
            <img
               className={'hidden md:absolute md:top-[30%] md:-right-1 md:block'}
               src={'./img/basilic.png'}
               aria-hidden={true}
            />
            {/*            <img
               className={'hidden md:absolute md:top-[40%] md:-left-36 md:block lg:-left-0'}
               src={'./img/pizza-half.png'}
               aria-hidden={true}
            />*/}
            <div
               className={
                  'fixed bottom-44 right-[10vw] z-20 mt-24 hidden mix-blend-difference lg:block'
               }>
               <svg
                  className={'scroll-icon text-beige drop-shadow-md'}
                  aria-label={'Scroll Down'}
                  aria-hidden={true}
                  width="60"
                  height="62"
                  viewBox="0 0 60 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.9">
                     <path
                        d="M22.9875 41H30.259C31.0285 41.0384 31.5841 41.6613 31.5934 42.3457V45.6026C32.3083 46.5335 33.3005 47.1933 34.019 48.0905C34.2716 48.4071 34.5524 48.6521 34.8615 48.8255C35.969 49.3893 37.2582 49.0477 38.141 49.8489C38.8319 51.4591 37.8654 53.388 36.3486 53.9313C35.11 54.3584 33.8747 54.0722 32.7807 53.5412C32.7839 55.4636 32.7683 57.3861 32.7581 59.3085C32.6413 60.8736 31.5875 61.9896 30.0893 62C28.5795 61.9957 27.4815 60.6941 27.4544 59.3085V57.0468C27.0096 56.9714 26.6063 56.8244 26.2444 56.6058C25.3144 56.7325 24.4026 56.4426 23.7452 55.8821C18.3771 55.5745 21.5619 48.5418 21.6418 45.9079V42.3457C21.6785 41.5708 22.2997 41.0092 22.9875 41ZM22.9875 45.8514C22.9422 47.9588 19.756 55.1598 24.322 54.4685C24.7327 55.2305 25.832 55.5238 26.5271 55.0565C27.2272 55.7664 28.1067 55.9686 28.8002 55.2827C28.8002 55.9612 28.8039 56.6322 28.8115 57.2957C28.819 57.9591 28.8228 58.6301 28.8228 59.3086C28.8391 60.085 29.4088 60.6232 30.0893 60.6317C30.8939 60.6139 31.4042 60.0032 31.4124 59.3086C31.4126 56.6768 31.4347 54.0825 31.435 51.6413C33.1984 51.8611 35.5928 53.9648 36.9819 51.8166C37.1508 51.4727 37.2225 51.1977 37.1572 50.8385C37.127 50.7782 37.0969 50.7442 37.0667 50.7367C37.0365 50.7291 36.9875 50.7179 36.9197 50.7028C35.522 50.4745 34.1244 50.2614 33.1992 49.1761C32.2832 47.9815 30.8411 47.2771 30.259 45.908V45.8514L22.9875 45.8514Z"
                        fill="#F9F0DC"
                     />
                     <path
                        d="M5.97816 12.084C5.41816 12.084 4.91416 11.988 4.46616 11.796C4.01816 11.596 3.66616 11.316 3.41016 10.956C3.15416 10.596 3.02616 10.176 3.02616 9.696H4.49016C4.52216 10.056 4.66216 10.352 4.91016 10.584C5.16616 10.816 5.52216 10.932 5.97816 10.932C6.45016 10.932 6.81816 10.82 7.08216 10.596C7.34616 10.364 7.47816 10.068 7.47816 9.708C7.47816 9.428 7.39416 9.2 7.22616 9.024C7.06616 8.848 6.86216 8.712 6.61416 8.616C6.37416 8.52 6.03816 8.416 5.60616 8.304C5.06216 8.16 4.61816 8.016 4.27416 7.872C3.93816 7.72 3.65016 7.488 3.41016 7.176C3.17016 6.864 3.05016 6.448 3.05016 5.928C3.05016 5.448 3.17016 5.028 3.41016 4.668C3.65016 4.308 3.98616 4.032 4.41816 3.84C4.85016 3.648 5.35016 3.552 5.91816 3.552C6.72616 3.552 7.38616 3.756 7.89816 4.164C8.41816 4.564 8.70616 5.116 8.76216 5.82H7.25016C7.22616 5.516 7.08216 5.256 6.81816 5.04C6.55416 4.824 6.20616 4.716 5.77416 4.716C5.38216 4.716 5.06216 4.816 4.81416 5.016C4.56616 5.216 4.44216 5.504 4.44216 5.88C4.44216 6.136 4.51816 6.348 4.67016 6.516C4.83016 6.676 5.03016 6.804 5.27016 6.9C5.51016 6.996 5.83816 7.1 6.25416 7.212C6.80616 7.364 7.25416 7.516 7.59816 7.668C7.95016 7.82 8.24616 8.056 8.48616 8.376C8.73416 8.688 8.85816 9.108 8.85816 9.636C8.85816 10.06 8.74216 10.46 8.51016 10.836C8.28616 11.212 7.95416 11.516 7.51416 11.748C7.08216 11.972 6.57016 12.084 5.97816 12.084ZM11.8763 7.812C11.8763 6.996 12.0643 6.264 12.4403 5.616C12.8243 4.968 13.3403 4.464 13.9883 4.104C14.6443 3.736 15.3603 3.552 16.1363 3.552C17.0243 3.552 17.8123 3.772 18.5003 4.212C19.1963 4.644 19.7003 5.26 20.0123 6.06H18.3683C18.1523 5.62 17.8523 5.292 17.4683 5.076C17.0843 4.86 16.6403 4.752 16.1363 4.752C15.5843 4.752 15.0923 4.876 14.6603 5.124C14.2283 5.372 13.8883 5.728 13.6403 6.192C13.4003 6.656 13.2803 7.196 13.2803 7.812C13.2803 8.428 13.4003 8.968 13.6403 9.432C13.8883 9.896 14.2283 10.256 14.6603 10.512C15.0923 10.76 15.5843 10.884 16.1363 10.884C16.6403 10.884 17.0843 10.776 17.4683 10.56C17.8523 10.344 18.1523 10.016 18.3683 9.576H20.0123C19.7003 10.376 19.1963 10.992 18.5003 11.424C17.8123 11.856 17.0243 12.072 16.1363 12.072C15.3523 12.072 14.6363 11.892 13.9883 11.532C13.3403 11.164 12.8243 10.656 12.4403 10.008C12.0643 9.36 11.8763 8.628 11.8763 7.812ZM27.8056 12L25.8856 8.664H24.8416V12H23.4736V3.66H26.3536C26.9936 3.66 27.5336 3.772 27.9736 3.996C28.4216 4.22 28.7536 4.52 28.9696 4.896C29.1936 5.272 29.3056 5.692 29.3056 6.156C29.3056 6.7 29.1456 7.196 28.8256 7.644C28.5136 8.084 28.0296 8.384 27.3736 8.544L29.4376 12H27.8056ZM24.8416 7.572H26.3536C26.8656 7.572 27.2496 7.444 27.5056 7.188C27.7696 6.932 27.9016 6.588 27.9016 6.156C27.9016 5.724 27.7736 5.388 27.5176 5.148C27.2616 4.9 26.8736 4.776 26.3536 4.776H24.8416V7.572ZM36.7196 12.084C35.9436 12.084 35.2276 11.904 34.5716 11.544C33.9236 11.176 33.4076 10.668 33.0236 10.02C32.6476 9.364 32.4596 8.628 32.4596 7.812C32.4596 6.996 32.6476 6.264 33.0236 5.616C33.4076 4.968 33.9236 4.464 34.5716 4.104C35.2276 3.736 35.9436 3.552 36.7196 3.552C37.5036 3.552 38.2196 3.736 38.8676 4.104C39.5236 4.464 40.0396 4.968 40.4156 5.616C40.7916 6.264 40.9796 6.996 40.9796 7.812C40.9796 8.628 40.7916 9.364 40.4156 10.02C40.0396 10.668 39.5236 11.176 38.8676 11.544C38.2196 11.904 37.5036 12.084 36.7196 12.084ZM36.7196 10.896C37.2716 10.896 37.7636 10.772 38.1956 10.524C38.6276 10.268 38.9636 9.908 39.2036 9.444C39.4516 8.972 39.5756 8.428 39.5756 7.812C39.5756 7.196 39.4516 6.656 39.2036 6.192C38.9636 5.728 38.6276 5.372 38.1956 5.124C37.7636 4.876 37.2716 4.752 36.7196 4.752C36.1676 4.752 35.6756 4.876 35.2436 5.124C34.8116 5.372 34.4716 5.728 34.2236 6.192C33.9836 6.656 33.8636 7.196 33.8636 7.812C33.8636 8.428 33.9836 8.972 34.2236 9.444C34.4716 9.908 34.8116 10.268 35.2436 10.524C35.6756 10.772 36.1676 10.896 36.7196 10.896ZM45.5538 10.896H48.3738V12H44.1858V3.66H45.5538V10.896ZM52.7458 10.896H55.5658V12H51.3778V3.66H52.7458V10.896ZM10.6267 19.66C11.5147 19.66 12.2907 19.832 12.9547 20.176C13.6267 20.512 14.1427 21 14.5027 21.64C14.8707 22.272 15.0547 23.012 15.0547 23.86C15.0547 24.708 14.8707 25.444 14.5027 26.068C14.1427 26.692 13.6267 27.172 12.9547 27.508C12.2907 27.836 11.5147 28 10.6267 28H7.90266V19.66H10.6267ZM10.6267 26.884C11.6027 26.884 12.3507 26.62 12.8707 26.092C13.3907 25.564 13.6507 24.82 13.6507 23.86C13.6507 22.892 13.3907 22.136 12.8707 21.592C12.3507 21.048 11.6027 20.776 10.6267 20.776H9.27066V26.884H10.6267ZM22.0745 28.084C21.2985 28.084 20.5825 27.904 19.9265 27.544C19.2785 27.176 18.7625 26.668 18.3785 26.02C18.0025 25.364 17.8145 24.628 17.8145 23.812C17.8145 22.996 18.0025 22.264 18.3785 21.616C18.7625 20.968 19.2785 20.464 19.9265 20.104C20.5825 19.736 21.2985 19.552 22.0745 19.552C22.8585 19.552 23.5745 19.736 24.2225 20.104C24.8785 20.464 25.3945 20.968 25.7705 21.616C26.1465 22.264 26.3345 22.996 26.3345 23.812C26.3345 24.628 26.1465 25.364 25.7705 26.02C25.3945 26.668 24.8785 27.176 24.2225 27.544C23.5745 27.904 22.8585 28.084 22.0745 28.084ZM22.0745 26.896C22.6265 26.896 23.1185 26.772 23.5505 26.524C23.9825 26.268 24.3185 25.908 24.5585 25.444C24.8065 24.972 24.9305 24.428 24.9305 23.812C24.9305 23.196 24.8065 22.656 24.5585 22.192C24.3185 21.728 23.9825 21.372 23.5505 21.124C23.1185 20.876 22.6265 20.752 22.0745 20.752C21.5225 20.752 21.0305 20.876 20.5985 21.124C20.1665 21.372 19.8265 21.728 19.5785 22.192C19.3385 22.656 19.2185 23.196 19.2185 23.812C19.2185 24.428 19.3385 24.972 19.5785 25.444C19.8265 25.908 20.1665 26.268 20.5985 26.524C21.0305 26.772 21.5225 26.896 22.0745 26.896ZM40.4006 19.66L37.9286 28H36.3806L34.6286 21.688L32.7686 28L31.2326 28.012L28.8686 19.66H30.3206L32.0486 26.452L33.9206 19.66H35.4566L37.1966 26.416L38.9366 19.66H40.4006ZM50.2409 28H48.8729L44.7569 21.772V28H43.3889V19.648H44.7569L48.8729 25.864V19.648H50.2409V28Z"
                        fill="#F9F0DC"
                     />
                  </g>
               </svg>
            </div>
            {/*Modal PDM*/}
            <Modal />
            <LayoutHomePage>
               <Hero
                  handleScroll={handleScroll}
                  scrollToRef={refPDM}
               />
            </LayoutHomePage>
            {/*         <LayoutHomePage>
               <PdS refPDM={refPDM} />
            </LayoutHomePage>*/}
            <div className={'mx-auto mb-24'}>
               <NeoMorphismBTN
                  handleScroll={handleScroll}
                  toRef={refAbout}>
                  À PROPOS
               </NeoMorphismBTN>
            </div>
            <About refAbout={refAbout} />
            <div className={'my-24 mx-auto'}>
               <NeoMorphismBTN
                  handleScroll={handleScroll}
                  toRef={refTop}>
                  Haut de la page
               </NeoMorphismBTN>{' '}
            </div>
            <Footer />
         </main>
      </>
   )
}

export default Home
