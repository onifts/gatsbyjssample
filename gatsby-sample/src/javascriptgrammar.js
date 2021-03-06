

// 10. get json array one field values list 

/*

var data = [

    {id: 1, name: 'A1'},
    {id: 1, name: 'A2'},
    {id: 1, name: 'A3'},
    {id: 1, name: 'A4'},
    {id: 1, name: 'A5'},

    {id: 2, name: 'B1'},
    {id: 2, name: 'B2'},
    {id: 2, name: 'B3'},
    {id: 2, name: 'B4'},
    {id: 2, name: 'B5'},

    {id: 3, name: 'C1'},
    {id: 3, name: 'C2'},
    {id: 3, name: 'C3'},
    {id: 3, name: 'C4'},
    {id: 3, name: 'C5'},

];

console.log( data.map(row => row.id) )

const key = "name"
const value = "C3"
var idex = -1

const temp = data.find((object,index) => { 
        
    if( object[key] === value ) {
        idex = index;
        return index;

    } //end if 
    
})

console.log( temp,idex )

//*/

// 9. === vs == 

/*

var a = 1
var b = '1'
var c = parseInt(b)

if ( a == b ) {
    
    console.log( 'case1 : ', a, b, c, typeof(a), typeof(b), typeof(c) )

}

if ( a === b ) {
    
    console.log( 'case2 : ', a, b, c, typeof(a), typeof(b), typeof(c) )

}

if ( a === c ) {
    
    console.log( 'case3 : ', a, b, c, typeof(a), typeof(b), typeof(c) )

}

*/

// 8. Promise 

/*

function printLater(number, fn) {
    setTimeout(
        function() { 
            console.log(number,fn); 

            if ( fn !== undefined ) {
                fn(); 
            }
        },
        1000
    );
}

printLater(1, function() {
    printLater(2, function() {
        printLater(3, function() {
            printLater(4);
        })
    })
});

*/

/*

function printLater(number) {
    
    return new Promise( ( resolve ) => {
            
            setTimeout( 
                () => {
                    console.log(number);
                    resolve(); // promise 가 끝났음을 알림
                },
                1000
            )
        }

    ); // end Promise

}


printLater(1)
.then(() => printLater(2))
.then(() => printLater(3))
.then(() => printLater(4))

*/

/*

function printLater(number) {
    
    return new Promise( ( resolve, reject ) => {
            
            setTimeout( 
                () => {

                    if(number > 3) { return reject('number is greater than 3'); } 

                    console.log(number);
                    
                    resolve(number+1); // promise 가 끝났음을 알림
                },
                1000
            )
        }

    ); // end Promise

}


printLater(1)
.then((number) => printLater(number))
.then((number) => printLater(number))
.then((number) => printLater(number))
.catch(e => console.log(e));

*/

// 7. String to int Array 

/*

var temp1 = '1,2,3'
var temp2 = temp1.split(',').map(x=>+x)

console.log(temp2, temp1)

var temp3 = '[1,2,3]'

console.log(JSON.parse(temp3), temp3)

*/

// 6. ES6 => code refactorying 

/*

var temp1 = [1,2,3]

function func1(nums) {
    return Math.max(...nums);
}

func2 = (nums) => {
    return Math.max(...nums)
}

func3 = nums => Math.max(...nums) // very good!!!

var result1 = func1(temp1)
var result2 = func2(temp1)
var result3 = func3(temp1)

console.log(result1,result2,result3)

*/

// 5. Spread Operator 
// https://jeong-pro.tistory.com/117

// 5-1. list 

/*

var temp1 = [1,2,3,4,5]

console.log(temp1) // [ 1, 2, 3, 4, 5 ]
console.log(...temp1) // 1 2 3 4 5

var temp2 = 'hello'

console.log(temp2)
console.log(...temp2)

function func1(x, y, z) { // x,y,z => 1,2,3 

    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
}

func1(...[1, 2, 3]);
func1(...temp1);

function foo(param, ...rest) {

    console.log(param); // 1
    console.log(rest);  // [ 2, 3 ]
}

foo(1, 2, 3);

var temp3 = [1, 2, 3];

//ES5
console.log(temp3.concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

// ES6
console.log([...temp3, 4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]

var temp4 = [4, 5, 6];

temp3.push(...temp4); // == temp3.push(4, 5, 6);

console.log(temp3)

*/

// 5-2. object 

/*

const object1 = { x: 1, y: 2 };
const object2 = { ...object1, z: 3 };

console.log(object2); // { x: 1, y: 2, z: 3 }
console.log(Object.assign(object1, object2)); // { x: 1, y: 2, z: 3 }
console.log({...object1}); // { x: 1, y: 2, z: 3 }
//console.log(...object1); // error 

*/

// 5-3. map 

/*

let map1 = new Map();
map1.set('name', 'Qman');
map1.set('age', '27');

func2(...map1);
console.log(...map1)
console.log(map1)

function func2(a, b) {
    console.log(a, b)
}

*/

// 5-4. setState 

/*

var temp1 = {
    name:'', 
    loading:true, 
    teleno:'',
    
    errors : {
        name:'', 
        loading:true, 
        teleno:'' 
    }
}

console.log( 1, temp1 )

//console.log( 2, {...temp1,teleno:'01021881019'} )
//console.log( 3, {...temp1,loading:false} )
//console.log( 4, {...temp1,value:123} )

console.log( 2, { ...temp1, teleno:'01021881019', loading:false, value:123 } )

console.log( 5, {...temp1.errors,loading:false} )
console.log( 6, {...temp1,errors:{...temp1.errors,loading:false}} )

*/

// 4. dic key exists, json list / json array 특정 필드의 값이 일치하는 json object 추출 

/*

var data = {}

data['test2'] = { '#11111' : { activeChatGroupId : 0 } }

var userid = 'test1';
var socketid = '#12356';
var activeChatGroupId = 123;

if (!(userid in data)) {

    data[userid] = {};
}

data[userid][socketid] = { activeChatGroupId : activeChatGroupId };

console.log(data);

*/

/*

var data = { 'a':1,'b':2,'c':3 }

for( key in data ) {
    
    console.log( key, data[key] )
    // a 1
    // b 2
    // c 3

}

*/

/*

var data = [

    {id: 1, name: 'A1'},
    {id: 1, name: 'A2'},
    {id: 1, name: 'A3'},
    {id: 1, name: 'A4'},
    {id: 1, name: 'A5'},

    {id: 2, name: 'B1'},
    {id: 2, name: 'B2'},
    {id: 2, name: 'B3'},
    {id: 2, name: 'B4'},
    {id: 2, name: 'B5'},

    {id: 3, name: 'C1'},
    {id: 3, name: 'C2'},
    {id: 3, name: 'C3'},
    {id: 3, name: 'C4'},
    {id: 3, name: 'C5'},

];

var key = 'id';
var value = 2;

const func1 = (data,key,value) => {

    return data.filter((object) => { return object[key] === value });

} // end func1

var temp = func1(data,key,value);

console.log(temp);

*/

// 3. [{}] json list, dic

/*

var data = [
    {id:11,name:'11'},
    {id:12,name:'12'},
    {id:13,name:'13'},
    {id:14,name:'14'},
    {id:15,name:'15'},
];

console.log(Object.keys(data[0])); // [ 'id', 'name' ]
console.log(Object.keys(data)); // [ '0', '1', '2', '3', '4' ]

// 2. reduce(), reduceRight() : 누적함수 

*/

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


