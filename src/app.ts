//#region Callback functions using async await
// const run = (cb) => {
// 	setTimeout(() => {
// 	  cb('1s');
// 	  setTimeout(() => {
// 		cb('2s');
// 		setTimeout(() => {
// 		  cb('3s');
// 		}, 1000);
// 	  }, 1000);
// 	}, 1000);
//   }
  
  
//   const delay = (ms) => new Promise(res => setTimeout(res, ms));
  
//   const runAsync = async (cb) => {
// 	await delay(1000);
// 	cb('1s');
// 	await delay(1000);
// 	cb('2s');
// 	await delay(1000);
// 	cb('3s');
//   }
  
//   runAsync((time) => console.log(time));
//#endregion

//#region Promise Fundamentals using TypeScript
// const example = new Promise<number>((resolve, reject) => {
// 	// Use resolve or reject to determine the fate of the promise
//   resolve(123)
//   // reject(new Error('failed'));
//   });
  
//   example.then(value => {
//   console.log('then', value);
//   })
  
//   example.catch(error => {
//   console.log('catch', error);
//   })
  
//   const first = new Promise<number>((resolve, reject) => {
//   // Use resolve or reject to determine the fate of the promise
//   resolve(123)
//   });
//   const second = 
//   first
// 	.then(value => {
// 	  // return new Promise((res, rej) => rej(new Error('example')));
// 	  // throw new Error('example')
// 	  // foo.bar
// 	})
//   // console.log(first === second);
  
//   second.then(value => {
//   console.log('second then', value);
//   })
//   second.then(error => {
//   console.log('second catch', error);
//   })
  
  
//   new Promise<number>((resolve, reject) => {
//   // Use resolve or reject to determine the fate of the promise
//   resolve(123)
//   })
//   .then(res => {
// 	console.log(res);
// 	foo.bar
// 	return 456;
//   })
//   .then(res => {
// 	console.log(res);
// 	return 789;
//   })
//   .then(res => {
// 	console.log(res);
//   })
//   .then(err => {
// 	console.log('ERROR', err);
  
//   })

//#endregion

//#region Write Async Functions with the async/await Operators

// process.on('unhandledRejection', () => null);

// const notAPromise = 456;
// const promiseThatWillResolve = new Promise(res => res(123));
// const promiseThatWillReject = new Promise((res, rej) => rej(new Error('Hello')));

// async function foo() {
//   const res1 = await notAPromise;
//   console.log({ forNotAPromise: res1 });
//   const res2 = await promiseThatWillResolve;
//   console.log({ forPromiseThatWillResolve: res2 });
//   try {
//     const res3 = await promiseThatWillReject;
//     console.log('I will never get called');
//   }
//   catch (e) {
//     console.log({ forPromiseThatWillReject: e.message });
//   }
// }

// foo();


//#endregion

//#region Execute Promises in Parallel and Serial using async / await

// import { getUserDetails } from './getUserDetails'

// async function main() {
//   const handles = [
//     'basarat',
//     'eggheadio',
//     'joelhooks'
//   ];

//   for (const handle of handles) {
//     const item = await getUserDetails(handle);
//     console.log(`
//       Name: ${item.name}
//       Location: ${item.location}
//     `);
//   }
// }

// main();
//#endregion

//#region Asynchronous Iteration using for-await-of
import { magic } from './server';

(Symbol as any).asyncIterator =
  (Symbol as any).asyncIterator
  || Symbol.for("Symbol.asyncIterator");

async function* numbers() {
  let index = 1;
  while (true) {
    yield index;
    index = await magic(index);
    if (index > 10) {
      break;
    }
  }
}

async function main() {
  for await (const num of numbers()) {
    console.log(num);
  }
}
main();

//#endregion


