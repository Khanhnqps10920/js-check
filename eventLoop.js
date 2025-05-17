/**
 * JS is single thread by have event loop to handle async codes
 * JS also have many kind of tasks and the running order will depend on which kind
 */

// normal tasks will be push on callstack and run with order filo

function task1() {
  console.log("Start task1");
  task2();
  console.log("End task1");
}

function task2() {
  console.log("Start task2");
  task3();
  console.log("End task2");
}

function task3() {
  console.log("Executing task3");
}

task1();

//  task 1 called
// -> start task 1
// -> task 2 called
// -> start task 2
// -> task 3 called
// -> log at task 3 and pop from stack
// -> task 2 log end task 2
// -> pop from stack
// -> task 1 end task 1 pop from stack

/**
 * after normal tasks in callstack completed and callstack is empty
 * webapi will be resolve micro task push it to callback queue
 * callback queue will be  work at FIFO
 */

// micro tasks: promise.then catch finally, async await, queueMicrotask, MutationObserver

console.log("Script start");

Promise.resolve()
  .then(() => {
    console.log("Promise microtask 1");
  })
  .then(() => {
    console.log("Promise microtask 2");
  });

console.log("Script end");

/**
 * after micro task callback queue finish and empty
 * Webapi resolve macro tasks and push it into macro task callback queu (FIFO)
 * run when callstack is empty and micro task queue is empty
 */

// macrotasks: setinterval, settimeout, requestanimationframe, dom events

setTimeout(() => {
  console.log("macro task 1");
}, 0);

console.log("Script start");

Promise.resolve()
  .then(() => {
    console.log("Promise microtask 1");
  })
  .then(() => {
    console.log("Promise microtask 2");
  });

console.log("Script end");
