

// 2. reduce(), reduceRight() : 누적함수 

/*

// [1]

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer)); // 1 + 2 + 3 + 4 = 10 

console.log(array1.reduce(reducer, 5)); // 5 + 1 + 2 + 3 + 4 = 15 

// arr.reduce(callback[, initialValue])

// reducer( acc, cur, idx, src )
// 누산기accumulator (acc)
// 현재 값 (cur)
// 현재 인덱스 (idx)
// 원본 배열 (src)

//*/

// [2]

/*

const array1 = [1, 2, 3];

result = array1.reduce((acc, cur) => {
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
  }, []);

console.log(result); // ['홀수', '짝수', '홀수']
//console.log(result()); // error 

//*/

// [3]

/*

const promiseFactory = (time) => {
    return new Promise((resolve, reject) => {
      console.log(time); 
      setTimeout(resolve, time);
    });
};

[1000, 2000, 3000, 4000].reduce((acc, cur) => {
    return acc.then(() => promiseFactory(cur));
}, Promise.resolve());

// 1000 바로 
// 2000 1초 후 
// 3000 2초 후 
// 4000 3초 후 

//*/

// 1. callback 

/*

fun1 = (x, func2) => {
    
    let sum = x + x;
    
    setTimeout(()=>{
    
        console.log(sum); // 6 
        
        func2(sum); // callback func 

    },1000);

}

fun1( 3, (sum) => {

    console.log(sum*2); // 12

});

console.log(999); // 999 

//*/

/*
# Ans : 
    999
    6
    12
*/

/*

var chatgrouplist = {};

chatgrouplist[1] = [1,2,3,4];
chatgrouplist[2] = [1,2,3,4];

console.log(chatgrouplist[1]);

chatgrouplist[1].forEach(item=> console.log(item));

chatgrouplist[1].forEach((item)=> {
    console.log(item);
});
*/

//console.log(new Date());


