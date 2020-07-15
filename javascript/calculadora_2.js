// const result = document.querySelector('.result');
// const operations = document.querySelector('.operations');
// const numKeys = document.querySelector('.numbers');

// operations.addEventListener('click', (e) => {
//     const et = e.target;
//     const op = et.dataset.op;
//     if(op){ //Added to check if 'op' is receiving valid input
//         opKey(op);
//     }
// })
// numKeys.addEventListener('click', (e) => {
//     const et = e.target;
//     const num = et.dataset.num;
//     if(num){ //Same as 'op', it was added to check if is receiving valid input
//         numKey(num);
//     }
// })

// let firstNum = 0, secondNum = 0;
// let selectedOp = '';

// const numKey = (num) => {
//     if(result.textContent === '0'){
//         result.textContent = num;
//     }
//     else {
//         result.textContent += num;
//     }
// } 

// const opKey = (op) => {
//     const ops = ['add', 'subtract', 'multiply', 'divide'];
//     if(ops.includes(op)){
//         firstNum = result.textContent;
//         result.textContent = 0;
//         selectedOp = op;
//     }
//     if(op==='equals'){
//         secondNum = result.textContent;
//             switch(selectedOp){
//                 case 'add':
//                     result.textContent = parseFloat(Number(firstNum) + Number(secondNum));
//                     break;
//                 case 'subtract':
//                     result.textContent = parseFloat(Number(firstNum) - Number(secondNum));
//                     break;
//                 case 'multiply':
//                     result.textContent = parseFloat(Number(firstNum) * Number(secondNum));
//                     break;
//                 case 'divide':
//                     result.textContent = parseFloat(Number(firstNum) / Number(secondNum));
//                     break;
//             }       
//     }
//     if(op==='allClear'){
//         result.textContent = 0;
//         firstNum = 0;
//         secondNum = 0;
//         selectedOp = '';
//     }
// }



https://www.youtube.com/watch?v=GqOkRvNbHeU