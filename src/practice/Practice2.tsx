
import React from 'react';

export const Practice2 = () => {
    const getcTotalFee = (num: number): number => {
        const total = num * 1.1;
        return total;
    };
    
   const onClickPractice = () => {
       console.log(getcTotalFee(1000))
   }
   
   return(
       <div>
            <p>練習問題・返却値の型指定</p>
            <button onClick={onClickPractice}>練習問題１を実行</button>
       </div>
       );
}




