import React, { useState } from 'react'
import { Button } from '../../commons/button'

export const RenderButtons = ({ onChange, activeCategory }) => {
   const buttons = [
      {
         _id: 'btn1',
         text: 'pizzas',
         component: {
            avec: (
               <svg
                  className={'w-full'}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM1.275 15C1.275 22.5801 7.41989 28.725 15 28.725C22.5801 28.725 28.725 22.5801 28.725 15C28.725 7.41989 22.5801 1.275 15 1.275C7.41989 1.275 1.275 7.41989 1.275 15Z"
                     fill="#303636"
                  />
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M3.19339 17.9398C3.45811 18.3783 3.54879 18.4225 4.97539 18.8099L6.16866 19.1339L6.21479 18.9018C6.24024 18.7741 6.28882 18.3135 6.32276 17.8783C6.71973 12.7995 9.89291 8.60713 14.547 7.01261C15.4545 6.70166 17.2995 6.30297 17.9045 6.28711C18.8174 6.26323 18.806 6.29247 18.424 4.95888C18.015 3.53157 17.9228 3.35002 17.493 3.12561C17.0631 2.9011 16.146 2.97704 14.6981 3.35698C11.9543 4.0769 9.6161 5.46297 7.48782 7.63098C5.20745 9.95399 3.80821 12.6132 3.20495 15.7701C2.9345 17.1855 2.93281 17.5082 3.19339 17.9398ZM7.56132 19.5224C8.16331 19.7392 22.4596 23.4363 22.6961 23.4363C22.8653 23.4363 23.0845 23.3406 23.1931 23.2195C23.3828 23.0077 23.342 22.8371 21.4445 15.9089C20.376 12.0073 19.4299 8.53365 19.3422 8.18981C19.2545 7.84597 19.1105 7.53651 19.022 7.50223C18.7553 7.39886 16.6757 7.6974 15.7175 7.97665C11.4135 9.23086 8.50661 12.4828 7.71467 16.9292C7.45483 18.3882 7.39141 19.4612 7.56132 19.5224ZM11.4264 15.8823C11.604 15.5046 12.1198 15.1884 12.5587 15.1884C12.9791 15.1884 13.5236 15.6297 13.6748 16.0929C14.0337 17.1928 12.9196 18.1333 11.893 17.5971C11.3054 17.2903 11.1072 16.5617 11.4264 15.8823ZM15.2898 11.8919C15.7546 11.1221 17.0055 11.157 17.4267 11.9517C17.6148 12.3069 17.5834 12.9806 17.363 13.3206C17.1279 13.6829 16.5187 13.9387 16.0863 13.8568C15.7592 13.7948 15.2682 13.3687 15.1519 13.0461C15.0295 12.7063 15.0866 12.2286 15.2898 11.8919ZM17.2178 17.7266C17.3538 17.4645 17.9376 17.1173 18.243 17.1169C19.5083 17.1149 20.0071 18.946 18.8989 19.5248C17.7462 20.1267 16.6054 18.9065 17.2178 17.7266Z"
                     fill="#303636"
                  />
               </svg>
            ),
            sans: (
               <svg
                  className={'w-full'}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM1.275 15C1.275 22.5801 7.41989 28.725 15 28.725C22.5801 28.725 28.725 22.5801 28.725 15C28.725 7.41989 22.5801 1.275 15 1.275C7.41989 1.275 1.275 7.41989 1.275 15Z"
                     fill="#F9F0DC"
                  />
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M3.19339 17.9398C3.45811 18.3783 3.54879 18.4225 4.97539 18.8099L6.16866 19.1339L6.21479 18.9018C6.24024 18.7741 6.28882 18.3135 6.32276 17.8783C6.71973 12.7995 9.89291 8.60713 14.547 7.01261C15.4545 6.70166 17.2995 6.30297 17.9045 6.28711C18.8174 6.26323 18.806 6.29247 18.424 4.95888C18.015 3.53157 17.9228 3.35002 17.493 3.12561C17.0631 2.9011 16.146 2.97704 14.6981 3.35698C11.9543 4.0769 9.6161 5.46297 7.48782 7.63098C5.20745 9.95399 3.80821 12.6132 3.20495 15.7701C2.9345 17.1855 2.93281 17.5082 3.19339 17.9398ZM7.56132 19.5224C8.16331 19.7392 22.4596 23.4363 22.6961 23.4363C22.8653 23.4363 23.0845 23.3406 23.1931 23.2195C23.3828 23.0077 23.342 22.8371 21.4445 15.9089C20.376 12.0073 19.4299 8.53365 19.3422 8.18981C19.2545 7.84597 19.1105 7.53651 19.022 7.50223C18.7553 7.39886 16.6757 7.6974 15.7175 7.97665C11.4135 9.23086 8.50661 12.4828 7.71467 16.9292C7.45483 18.3882 7.39141 19.4612 7.56132 19.5224ZM11.4264 15.8823C11.604 15.5046 12.1198 15.1884 12.5587 15.1884C12.9791 15.1884 13.5236 15.6297 13.6748 16.0929C14.0337 17.1928 12.9196 18.1333 11.893 17.5971C11.3054 17.2903 11.1072 16.5617 11.4264 15.8823ZM15.2898 11.8919C15.7546 11.1221 17.0055 11.157 17.4267 11.9517C17.6148 12.3069 17.5834 12.9806 17.363 13.3206C17.1279 13.6829 16.5187 13.9387 16.0863 13.8568C15.7592 13.7948 15.2682 13.3687 15.1519 13.0461C15.0295 12.7063 15.0866 12.2286 15.2898 11.8919ZM17.2178 17.7266C17.3538 17.4645 17.9376 17.1173 18.243 17.1169C19.5083 17.1149 20.0071 18.946 18.8989 19.5248C17.7462 20.1267 16.6054 18.9065 17.2178 17.7266Z"
                     fill="#F9F0DC"
                  />
               </svg>
            ),
         },
      },
      {
         _id: 'btn2',
         text: 'boissons',
         component: {
            avec: (
               <svg
                  className={'w-full'}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM1.275 15C1.275 22.5801 7.41989 28.725 15 28.725C22.5801 28.725 28.725 22.5801 28.725 15C28.725 7.41989 22.5801 1.275 15 1.275C7.41989 1.275 1.275 7.41989 1.275 15Z"
                     fill="#303636"
                  />
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M11.5077 5.40841C10.941 5.68503 10.8589 5.96653 10.3566 9.35143C9.70444 13.7465 9.66327 14.1991 9.83957 15.0327C10.1746 16.6165 11.5042 18.1142 13.0122 18.6064L13.451 18.7496V21.0124V23.2751H12.503C11.8756 23.2751 11.4547 23.3264 11.2584 23.4268C10.6164 23.7552 10.1341 24.652 10.4177 24.99C10.5271 25.1202 11.1534 25.1385 14.7366 25.1153C18.0994 25.0936 18.9845 25.1087 19.0983 24.8198C19.146 24.6988 19.0584 24.5245 18.9608 24.2718C18.6664 23.5096 18.3218 23.3338 17.0387 23.2916L15.965 23.2563L15.9663 21.0123L15.9676 18.7683L16.7006 18.4747C18.3211 17.826 19.4946 16.2527 19.6889 14.4686C19.7705 13.7197 18.6636 6.16058 18.418 5.78999C18.0897 5.29423 17.7664 5.24751 14.6852 5.2501C12.3548 5.25196 11.7684 5.28118 11.5077 5.40841ZM17.2806 10.2208L17.0733 8.6667L16.866 7.11262H14.7442H12.6225L12.5655 7.44934C12.3829 8.5287 12.194 9.83258 12.194 10.0124C12.194 10.2154 12.2592 10.2208 14.7372 10.2208H17.2806Z"
                     fill="#303636"
                  />
               </svg>
            ),
            sans: (
               <svg
                  className={'w-full'}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM1.275 15C1.275 22.5801 7.41989 28.725 15 28.725C22.5801 28.725 28.725 22.5801 28.725 15C28.725 7.41989 22.5801 1.275 15 1.275C7.41989 1.275 1.275 7.41989 1.275 15Z"
                     fill="#F9F0DC"
                  />
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M11.5077 5.40841C10.941 5.68503 10.8589 5.96653 10.3566 9.35143C9.70444 13.7465 9.66327 14.1991 9.83957 15.0327C10.1746 16.6165 11.5042 18.1142 13.0122 18.6064L13.451 18.7496V21.0124V23.2751H12.503C11.8756 23.2751 11.4547 23.3264 11.2584 23.4268C10.6164 23.7552 10.1341 24.652 10.4177 24.99C10.5271 25.1202 11.1534 25.1385 14.7366 25.1153C18.0994 25.0936 18.9845 25.1087 19.0983 24.8198C19.146 24.6988 19.0584 24.5245 18.9608 24.2718C18.6664 23.5096 18.3218 23.3338 17.0387 23.2916L15.965 23.2563L15.9663 21.0123L15.9676 18.7683L16.7006 18.4747C18.3211 17.826 19.4946 16.2527 19.6889 14.4686C19.7705 13.7197 18.6636 6.16058 18.418 5.78999C18.0897 5.29423 17.7664 5.24751 14.6852 5.2501C12.3548 5.25196 11.7684 5.28118 11.5077 5.40841ZM17.2806 10.2208L17.0733 8.6667L16.866 7.11262H14.7442H12.6225L12.5655 7.44934C12.3829 8.5287 12.194 9.83258 12.194 10.0124C12.194 10.2154 12.2592 10.2208 14.7372 10.2208H17.2806Z"
                     fill="#F9F0DC"
                  />
               </svg>
            ),
         },
      },
      {
         _id: 'btn3',
         text: 'desserts',
         component: {
            avec: (
               <svg
                  className={'w-full'}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM1.275 15C1.275 22.5801 7.41989 28.725 15 28.725C22.5801 28.725 28.725 22.5801 28.725 15C28.725 7.41989 22.5801 1.275 15 1.275C7.41989 1.275 1.275 7.41989 1.275 15Z"
                     fill="#303636"
                  />
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M13.7103 5.39728C11.2536 5.98545 9.45322 8.20168 9.41258 10.6876L9.40032 11.4353L9.03369 11.5037C8.50732 11.6019 8.12718 11.8529 7.80224 12.3166C7.18504 13.1976 7.55115 14.488 8.55467 14.9685C8.98205 15.1731 9.17406 15.1793 15.0638 15.1791C21.8499 15.179 21.5314 15.2124 22.1583 14.436C22.9896 13.4065 22.3419 11.7384 21.0154 11.4922L20.6611 11.4264L20.6595 10.7905C20.656 9.33814 20.0828 7.97427 19.0398 6.93676C18.2548 6.15588 17.4635 5.70468 16.4127 5.43883C15.4752 5.20167 14.5844 5.188 13.7103 5.39728ZM11.9758 20.4891C13.1679 22.9347 14.0643 24.6483 14.2244 24.788C14.7415 25.2392 15.3047 25.2207 15.8433 24.7348C16.0579 24.5411 16.7672 23.1987 18.0946 20.4735C19.1605 18.2853 20.0326 16.4788 20.0326 16.4588C20.0326 16.4389 17.7738 16.4226 15.0131 16.4226H9.99353L11.9758 20.4891Z"
                     fill="#303636"
                  />
               </svg>
            ),
            sans: (
               <svg
                  className={'w-full'}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM1.275 15C1.275 22.5801 7.41989 28.725 15 28.725C22.5801 28.725 28.725 22.5801 28.725 15C28.725 7.41989 22.5801 1.275 15 1.275C7.41989 1.275 1.275 7.41989 1.275 15Z"
                     fill="#F9F0DC"
                  />
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M13.7103 5.39728C11.2536 5.98545 9.45322 8.20168 9.41258 10.6876L9.40032 11.4353L9.03369 11.5037C8.50732 11.6019 8.12718 11.8529 7.80224 12.3166C7.18504 13.1976 7.55115 14.488 8.55467 14.9685C8.98205 15.1731 9.17406 15.1793 15.0638 15.1791C21.8499 15.179 21.5314 15.2124 22.1583 14.436C22.9896 13.4065 22.3419 11.7384 21.0154 11.4922L20.6611 11.4264L20.6595 10.7905C20.656 9.33814 20.0828 7.97427 19.0398 6.93676C18.2548 6.15588 17.4635 5.70468 16.4127 5.43883C15.4752 5.20167 14.5844 5.188 13.7103 5.39728ZM11.9758 20.4891C13.1679 22.9347 14.0643 24.6483 14.2244 24.788C14.7415 25.2392 15.3047 25.2207 15.8433 24.7348C16.0579 24.5411 16.7672 23.1987 18.0946 20.4735C19.1605 18.2853 20.0326 16.4788 20.0326 16.4588C20.0326 16.4389 17.7738 16.4226 15.0131 16.4226H9.99353L11.9758 20.4891Z"
                     fill="#F9F0DC"
                  />
               </svg>
            ),
         },
      },
   ]

   return (
      <div className={' my-6 flex w-4/5 flex-wrap items-center justify-center gap-x-8 gap-y-4'}>
         {buttons.map(btn => (
            <Button
               key={btn._id}
               onClick={() => onChange(btn.text)}
               activeClass={activeCategory === btn.text}>
               <div className={'flex flex-col items-center justify-center md:gap-2'}>
                  <p>{btn.text.toUpperCase()}</p>
                  <span className={'w-8 md:w-16'}>
                     {activeCategory === btn.text ? btn.component.avec : btn.component.sans}
                  </span>
               </div>
            </Button>
         ))}
      </div>
   )
}
