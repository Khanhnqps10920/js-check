const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

// listen event at phrase capturing
outer.addEventListener(
  "click",
  () => {
    console.log("Outer div clicked (capturing)");
  },
  false
); // capture: true

// listen event at phrase bubbling (default)
outer.addEventListener(
  "click",
  () => {
    console.log("Outer div clicked (bubbling)");
  },
  false
);

inner.addEventListener("click", () => {
  console.log("Inner div clicked");
});

/**
 * Outer div clicked (capturing)
 *  inner div clicked
 * Outer div clicked (bubbling)
 * -> capture -> target -> bubbling
 */

// target phrases
const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  console.log("event.target:", event.target.tagName);
  console.log("event.currentTarget:", event.currentTarget.tagName);
});
/**
 * click on LI => event target tagname = <li>
 * currentTarget => <ul></ul>
 */

/**bubbling
 *
 * after event handler at (target), event will be bubbling to parent elements by order (inner → outer → document → window).
 * can prevent by event.stoppropagation()
 */
