import React from 'react'

const H2 = ({ children }) => {
   return <h2 className={'my-4 font-decorative text-5xl'}>{children}</h2>
}
const H3 = ({ children }) => {
   return <h3 className={'my-4 font-main text-4xl font-normal'}>{children}</h3>
}
const P = ({ children }) => {
   return <p className={'leading-12 font-main text-4xl font-light tracking-wider'}>{children}</p>
}
export const About = () => {
   return (
      <article className="z-10 h-full w-screen bg-beige text-dark-grey md:mx-auto md:grid md:place-content-center md:px-[2%] ">
         <article className={' md:flex md:max-w-screen-md md:flex-row md:justify-start'}>
            <aside
               className={
                  'relative -top-[6rem] mx-8 font-accent text-5xl font-semibold leading-loose tracking-widest'
               }>
               <ul>
                  <li className={'text-beige'}>La pizza,</li>
                  <li className={'text-dark-grey'}> Un art,</li>
                  <li className={'text-dark-grey'}>Un savoir-faire,</li>
                  <li className={'text-dark-grey'}>Une passion</li>
               </ul>
            </aside>
            <section
               aria-label={'Photo de notre remorque'}
               className={'hidden md:block md:w-1/3 md:pt-8'}>
               <img
                  className={' rounded-xl md:col-span-5 md:col-start-6'}
                  src={
                     'https://images.unsplash.com/photo-1631540223537-8f2d49a4ad9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  }
                  alt="Remorque"
               />
            </section>
         </article>
         <article
            className={
               'flex flex-col items-center justify-center gap-y-12 px-12 pb-24 sm:px-24 md:max-w-screen-md md:flex-row md:flex-wrap md:justify-evenly md:gap-x-4 md:p-0 lg:gap-x-12'
            }>
            <section
               aria-label={'Photo de pâton'}
               className={'w-3/5  max-w-4xl md:w-1/5 md:max-w-xs '}>
               <img
                  className={'mx-auto rounded-xl '}
                  src={
                     'https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80'
                  }
                  alt="Notre pâte se repose plusieurs jours afin de vous offire un goût inoubliable"
               />
            </section>
            <section
               id={'about'}
               className={
                  'mx-auto max-w-3xl text-justify font-describe font-describe text-2xl leading-relaxed tracking-widest sm:px-0 md:mx-0 md:w-auto md:w-auto'
               }>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur
                  deleniti molestiae nobis officiis, provident quisquam quod repellendus soluta.
                  Atque, aut beatae corporis culpa cupiditate deleniti dolorum eos esse fuga laborum
                  molestias officia porro saepe, sed temporibus veritatis voluptatem voluptatum?
                  Accusantium alias beatae distinctio est illo laborum maxime repellendus,
                  repudiandae sit tempora!
               </p>
            </section>
         </article>
         <article
            aria-label={'Des produits frais'}
            className={
               'hidden md:my-12 md:block md:grid md:max-w-screen-md md:grid-cols-4 md:gap-x-[5%] lg:gap-x-12 '
            }>
            <div
               className={
                  'col-span-3 col-start-1 w-full self-center border-t-2 border-dark-gray-90 opacity-50'
               }
            />
            <img
               className={'hidden rounded-xl md:col-start-4 md:block md:w-full md:max-w-xs'}
               src={
                  'https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80'
               }
               alt="Des produits frais"
            />
         </article>
      </article>
   )
}
