/**
 * ES6 logical
 * || or ??
 */

// || only work with truethy value
// const a = 0 || 5; // 5, vì 0 là falsy nên trả về 5
// const b = "" || "hello"; // 'hello', '' là falsy
// const c = null || "yes"; // 'yes', null là falsy
// const d = false || true; // true, false là falsy

// ?? work with null/undefined value
// if leftside is null or undefined return rightside
const a = 0 ?? 5; // 0, vì 0 không phải null hoặc undefined
const b = "" ?? "hello"; // '', chuỗi rỗng không phải null/undefined
const c = null ?? "yes"; // 'yes', null thì lấy giá trị bên phải
const d = undefined ?? true; // true, undefined thì lấy bên phải
