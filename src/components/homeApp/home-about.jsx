import React from 'react'

export const About = () => {
   return (
      <>
         <aside className={'font-accent text-3xl font-medium tracking-widest leading-relaxed relative -top-12 mx-8'}>
            <ul>
               <li className={'text-beige'}>La pizza,</li>
               <li>Un art,</li>
               <li>Un savoir-faire,</li>
               <li>Une passion</li>
            </ul>
         </aside>

         <section>
            <img
               className={'w-2/5  mx-auto rounded-xl'}
               src={
                  'https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80'
               }
               alt="Photo de l'une de nos délicieuses pizza"
            />
         </section>
         <section id={'about'} className={'mx-8 my-12 '}>
            <p className={'text-2xl font-describe text-normal tracking-wide leading-relaxed'}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt netus nunc lectus
               congue sed posuere. Accumsan vulputate tincidunt pharetra facilisis. Varius fermentum
               duis morbi quis felis turpis ante in. Vel donec nulla at sit non justo convallis eu.
            </p>
         </section>

            {/*<img*/}
            {/*   className={'hidden sm:block md:block md:col-start-6 md:col-span-5 rounded-xl '}*/}
            {/*   src={*/}
            {/*      'https://images.unsplash.com/photo-1631540223537-8f2d49a4ad9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'*/}
            {/*   }*/}
            {/*   alt="Photo de l'une de nos délicieuses pizza"*/}
            {/*/>*/}


            {/*<img*/}
            {/*   className={'col-start-7 col-end-12 rounded-xl'}*/}
            {/*   src={*/}
            {/*      'https://images.unsplash.com/photo-1615719413546-198b25453f85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80'*/}
            {/*   }*/}
            {/*   alt="Photo de l'une de nos délicieuses pizza"*/}
            {/*/>*/}

      </>
   )
}
