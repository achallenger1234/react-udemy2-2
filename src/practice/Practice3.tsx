import React from 'react'

export const Practice3 = () => {
    const getcTotalFee = (num: number) => {
        const total = num * 1.1;
        return total;
    };
    
   const onClickPractice = () => {
       let total: number = 0;
       total = getcTotalFee(1000);
       console.log(total);
   }
   
   return(
       <div>
            <p>練習問題・変数の型指定</p>
            <button onClick={onClickPractice}>練習問題１を実行</button>
       </div>
       );
}
