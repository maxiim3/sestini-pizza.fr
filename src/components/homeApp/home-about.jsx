import React from 'react'

const H2 = ({ children }) => {
   return <h2 className={'font-decorative text-5xl my-4'}>{children}</h2>
}
const H3 = ({ children }) => {
   return <h3 className={'font-main text-4xl my-4 font-normal'}>{children}</h3>
}
const P = ({ children }) => {
   return <p className={'font-main text-4xl tracking-wider leading-12 font-light'}>{children}</p>
}
export const About = () => {
   return (
      <>
         <aside
            className={
               'font-accent text-3xl font-medium tracking-widest leading-relaxed relative -top-12 mx-8'
            }>
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
            <H2>Pour nous,</H2>
            <H2>Pour vous,</H2>
            <H2>La Pizza Sestini c'est ...</H2>
            <H3>... des valeurs</H3>
            <P>
               Nous travaillons avec des producteurs locaux. Nos produits
               sont rigoureusement sélectionnés. Nous souhaitons respecter vos exigences gustatives
               et écologiques!
            </P>
            <H3>... une pâte savoureuse, authentique et traditionnelle</H3>
            <P>
               Nous laissons notre pâte reposer... Chez nous pas de pression! Notre pâte lève
               pendant plusieurs jours afin de recouvrer toute sa saveur, son goût et sa légèreté. À
               chaque bouchée votre palais sera sublimé de plusieurs siècles de tradition italienne.
            </P>
            <H3>... des produits de qualités </H3>
            <P>
               Nos produits sont frais et de saison. La Pizza Sestini recherche les circuits
               d'approvisionnement les plus court possibles. Le goût et la qualité sont nos
               priorités!
            </P>
            <H3>... le savoir faire et la passion</H3>
            <P>
               Fort de nombreuses années d'expériences dans la pizza traditionnelle, le pizzaïolo a
               aujourd'hui la prétention de mettre son savoir-faire et sa créativité à votre
               disposition afin de vous offrir la meilleure pizza possible.
            </P>
            <H3>... de la créativité et un soupçon d'audace</H3>
            <P>
               Voilà comment nous pourrions résumer nos ambitions: Vous offrir une expérience
               gustative hors du commun, alliant la tradition et le savoir-faire italien avec la
               qualité et l'excellence de notre terroir occitan.
            </P>
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
