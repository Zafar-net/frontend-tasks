// let arr = [1, 2, 3, 4, 5];

// arr.push(8); // 
// arr.pop();
// arr.unshift(0)
// arr.shift()
// console.log(arr)

// function moment(format) {
//     const date = new Date();
//     switch (format) {
//       case 'locale':
//         return 'uz'; 
//       case 'LT':
//         return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric', hour12: true }).format(date);
//       case 'LTS':
//         return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }).format(date);
//       case 'L':
//         return new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
//       case 'l':
//         return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'numeric', day: 'numeric' }).format(date);
//       case 'LL':
//         return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
//       case 'll':
//         return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
//       case 'LLL':
//         return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).format(date);
//       case 'lll':
//         return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).format(date);
//       case 'LLLL':
//         return new Intl.DateTimeFormat('en', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).format(date);
//       case 'llll':
//         return new Intl.DateTimeFormat('en', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }).format(date);
//       default:
//         return 'Noto\'g\'ri format!';
//     }
//   }
  

//   console.log(moment('locale')); // en
//   console.log(moment('LT'));     // 9:22 PM
//   console.log(moment('LTS'));    // 9:22:15 PM
//   console.log(moment('L'));      // 01/30/2025
//   console.log(moment('l'));      // 1/30/2025
//   console.log(moment('LL'));     // January 30, 2025
//   console.log(moment('ll'));     // Jan 30, 2025
//   console.log(moment('LLL'));    // January 30, 2025 9:22 PM
//   console.log(moment('lll'));    // Jan 30, 2025 9:22 PM
//   console.log(moment('LLLL'));   // Thursday, January 30, 2025 9:22 PM
//   console.log(moment('llll'));   // Thu, Jan 30, 2025 9:22 PM


