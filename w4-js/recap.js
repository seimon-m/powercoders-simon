// 1 == "1" ? console.log("true") : console.log("false");

// 1 == [1] ? console.log("true") : console.log("false");

// "1" == [1] ? console.log("true") : console.log("false");

// [] == ![] ? console.log("true") : console.log("false");

// "a" > "A" ? console.log("true") : console.log("false");

// varTest();
// letTest();
// var x = 1;
// function varTest() {
//     var x = 1;
//     {
//         var x = 2; // same variable!
//         console.log(x); // 2
//     }
//     console.log(x); // 2
// }

// function letTest() {
//     let x = 1;
//     {
//         let x = 2; // different variable
//         console.log(x); // 2
//     }
//     console.log(x); // 1
// }

// let total%sum
// let 1number;
// let firstNumber
// let _sum
// let x = -1;
// if (x > 0) {
//     console.log("x is bigger");
// } else {
//     console.log("x is smaller");
// }
// x > 0 ? console.log("x is bigger") : console.log("x is smaller");

// switch (x) {
//     case -1:
//         console.log("x is -1");
//         break;
//     case 0:
//         console.log("x is 0");
//         break;

//     default:
//         console.log("x is something else");
//         break;
// }

// if (x > 0) {
//     console.log("x is bigger");
// } else if (x == 0) {
//     console.log("x is 0");
// } else {
//     console.log("x is smaller");
// }

// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }

// array.forEach(element => {

// });
// let y = 3;
// while (y < 10) {
//     console.log(y);
//     y++;
// }
// let z = 3;
// do {
//     console.log(z);
//     z++;
// } while (z < 2);

let i = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    console.log(i);
}
