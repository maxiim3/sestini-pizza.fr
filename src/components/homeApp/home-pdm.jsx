import React from 'react'
import PizzaDuMois from '../../data/pizzaOfMonth.json'

export const TextGold = ({ children }) => {
   return <span className={' text-gold'}>{children}</span>
}

export const PdM = ({ refPDM }) => {
   const capitalizeFirstLetter = txt => {
      return txt.split(' ').map(word => (
         <>
            <span className={'font-decorative uppercase'}>{word.slice(0, 1)}</span>
            {word.slice(1)}
         </>
      ))
   }

   return (
      <>
         <section
            className={
               'mx-auto max-w-4xl border-t-2 border-b-2 border-beige px-8 py-16 text-center text-3xl font-thin leading-loose tracking-wide md:mx-auto md:flex md:justify-around  md:rounded-3xl md:border-2 '
            }>
            <p>
               <TextGold>Tous les mois</TextGold>, <br /> La Pizza Sestini<sup>&copy;</sup> met à
               profit sa <TextGold>créativité</TextGold> et son <TextGold>expérience</TextGold> afin
               de vous offrir une pizza <TextGold>originale</TextGold> et des{' '}
               <TextGold>produits</TextGold> de <TextGold>qualité sélectionnés</TextGold> avec
               soins.
            </p>
         </section>

         <article
            id={'pizza-du-mois'}
            ref={refPDM}
            className={
               'mx-auto mt-24 mb-12 flex flex-col items-center justify-between text-center text-3xl text-beige'
            }>
            <span className={'mx-auto text-center text-3xl text-beige-light'}>
               <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M17.0959 0.538523C16.5976 1.03603 16.4372 1.58508 16.5489 2.41294C16.5732 2.59391 16.9845 3.20899 17.463 3.77954C18.3958 4.89212 19.0687 6.24885 18.8574 6.59039C18.786 6.70577 18.4821 6.80009 18.182 6.80009C16.1835 6.80009 12.0735 8.07522 9.80188 9.3997C7.90704 10.5048 7.52301 11.0392 8.16386 11.6791C8.56875 12.0833 8.71287 12.0985 10.0163 11.8716C12.3567 11.4647 12.3101 11.4149 11.2971 13.2475C10.2109 15.212 10.3078 15.7775 11.6974 15.5841C11.8644 15.5608 14.0279 14.6518 16.5051 13.564L21.0093 11.586L25.5784 13.5962C30.3466 15.694 31.3197 15.9274 31.4515 15.0058C31.4875 14.7533 31.1224 13.8676 30.6401 13.0373C30.1577 12.2073 29.7913 11.4998 29.8255 11.4656C29.8598 11.4312 30.6089 11.5393 31.4904 11.7056C33.2791 12.0434 33.8402 11.9787 34.0199 11.4138C34.2411 10.7176 33.8769 10.2999 32.1819 9.30648C30.2355 8.16538 28.05 7.42877 25.1432 6.9339C24.0057 6.74021 23.0403 6.54695 22.9979 6.50462C22.9555 6.4625 22.771 5.84523 22.5875 5.13319C21.9258 2.56298 19.7788 0 18.2871 0C17.8877 0 17.4261 0.208609 17.0959 0.538523ZM3.96663 14.5132C1.61922 16.9022 0.524711 19.3278 0.0976293 23.0874C-0.285954 26.4642 0.483409 30.4969 2.00763 33.0989C2.87542 34.5802 5.63805 37.3746 7.3745 38.5271C9.19509 39.7358 11.8178 40.8328 14.48 41.4997C16.1844 41.9267 17.0326 41.9934 20.8405 41.9998C25.8482 42.0081 27.2716 41.7739 30.897 40.345C38.4796 37.3564 42.4001 31.5748 41.9677 24.0197C41.748 20.1803 40.6731 17.4188 38.4599 15.0071C36.7212 13.1128 36.4411 12.9761 35.7023 13.6634C35.3824 13.961 34.9116 14.3116 34.6563 14.4425C34.367 14.5906 34.1445 14.9736 34.0656 15.4584C33.7813 17.208 31.875 18.6011 30.1061 18.3521C29.6017 18.2811 27.3944 17.4297 25.2012 16.46C23.0082 15.4904 21.0917 14.697 20.9425 14.697C20.7931 14.697 18.8802 15.5 16.6914 16.4817C14.5026 17.4633 12.3066 18.3135 11.8112 18.371C9.90514 18.5926 8.16781 17.2466 7.84794 15.3002C7.76995 14.8264 7.58804 14.4776 7.41866 14.4776C7.25675 14.4776 6.76969 14.1236 6.33623 13.6906L5.5482 12.9037L3.96663 14.5132Z"
                     fill="#9E9E9E"
                  />
               </svg>
            </span>
            <h2
               className={
                  'text-uppercase my-16 px-16 text-center font-accent text-3xl font-thin leading-loose tracking-wider text-beige-light'
               }>
               Ce mois-ci, <br /> Découvrez
            </h2>
            <section className={'m-0 w-3/5 p-0'} aria-label={'Titre de la pizza du mois'}>
               <span
                  className={
                     'mx-auto block h-3 w-full border-t-2 border-b-2 border-beige-light md:mr-8 md:inline-block md:w-1/5'
                  }
               />
               <h3 className={'font-bolder my-12 font-accent text-5xl md:inline-block'}>
                  {capitalizeFirstLetter(PizzaDuMois.nom)}
               </h3>
               <div
                  className={
                     'mx-auto block h-3 w-full border-t-2 border-b-2 border-beige-light md:ml-8 md:inline-block md:w-1/5'
                  }
               />
            </section>
            <dl className={'my-12 font-describe text-3xl leading-relaxed tracking-wider'}>
               <dt className={'hidden'}>Ingrédients</dt>
               <dd>{PizzaDuMois.base.label}</dd>
               {PizzaDuMois.ingredients.map(ingredient => (
                  <dd>{ingredient}</dd>
               ))}
               {!PizzaDuMois.afterCook ? null : (
                  <>
                     <dt className={'hidden'}>Après cuisson</dt>
                     {PizzaDuMois.afterCook.map(ingredient => (
                        <dd>{ingredient}</dd>
                     ))}
                  </>
               )}
               <dt className={'hidden'}>Prix</dt>
               <dl className={'mx-8 mt-4 text-center font-accent text-3xl text-beige-light'}>
                  {PizzaDuMois.prix}€
               </dl>
            </dl>
         </article>
      </>
   )
}
