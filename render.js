// !! NUM OF HEADINGS = NUM OF RENDER() && NUM OF HOLD DIVS IN HTML

const headings = ["DOM", "Arrays and Loops", "Strings", "Maths", "Beginner Level Projects"];

const domArr = [
  {
    h4: "Prompt & Alert",
    href: "DOM/program-1/one.html",
    code: "https://github.com/19dolly-hub/-mini-js-programs/blob/main/DOM/program-1/one.js",
  },
  {
    h4: "Copy Button",
    href: "DOM/program-2/two.html",
    code: "https://github.com/19dolly-hub/-mini-js-programs/blob/main/DOM/program-2/two.js",
  },
];

const arrayArr = [
  {
    h4: "Maximum Number",
    href: "Array/maximumNum/arr.html",
    code: "https://github.com/19dolly-hub/-mini-js-programs/blob/main/Array/maximumNum/arr.js",
  },
  {
    h4: "Average",
    href: "Array/average/avg.html",
    code: "https://github.com/19dolly-hub/-mini-js-programs/blob/main/Array/average/avg.js",
  },
  {
    h4: "Star patterns",
    href: "Loops/Star-pattern/star.html",
    code: "/",
  },
];

const stringsArr = [
  {
    h4: "Reverse Letters",
    href: "Strings/reverse/reverse.html",
    code: "https://github.com/19dolly-hub/-mini-js-programs/blob/main/Strings/reverse/reverse.js",
  },
  {
    h4: "Props & Methods*",
    href: "Strings/props-methods/str.html",
    code: "https://github.com/19dolly-hub/-mini-js-programs/blob/main/Strings/props-methods/str.js",
  },
  {
    h4: "is String = strinG ?",
    href: "Strings/caseSenstive/case.html",
    code: "/",
  },
  {
    h4: "Abbreviator",
    href: "Strings/abbreviator/abbr.html",
    code: "/",
  },
  {
    h4: "indexOf",
    href: "Strings/indexOf/indexof.html",
    code: "/",
  },
];

const mathsArr = [
  {
    h4: "Modulo",
    href: "Math/Modulo/modulo.html",
    code: "/",
  },
];

const apiArr = [
  {
    h4: "",
    href: "",
    code: "",
  },
  {
    h4: "",
    href: "",
    code: "",
  },
];

const projArr = [
  {
    h4: "CRUD App",
    href: "Projects/Crud-app/crud.html",
    code: "https://github.com/19dolly-hub/-mini-js-programs/blob/main/DOM/Crud-app/crud.js",
  },
  {
    h4: "Expense Calculator",
    href: "Projects/Expense-Calc/index.html",
    code: "/",
  },
  {
    h4: "Bubble Game",
    href: "Projects/BubbleGame/index.html",
    code: "/",
  },
];

// const Arr = [
// {
//   h4: "",
//   href: "",
//   code: "",
// },
//   {
//     h4: "",
//     href: "",
//     code: "",
//   },
// ];

let head = Array.from(document.querySelectorAll(".hold"));

head.forEach((tag) => {
  tag.innerHTML += `
  <img src="styles/special-icon.svg" alt="" width="32px">
  <h3>${headings[head.indexOf(tag)]}</h3>
  `;
})

function render(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    id.innerHTML += `
        <div>
        <a href="${obj.href}">
          <div class="img">
            <div class="dot-container">
              <div class="terminal-dots"></div>
            </div>
            <div class="hold">
              <img src="styles/idea-icon.svg" alt="" width="18px">
              <h4>${obj.h4}</h4>
            </div>
          </div>
        </a>
        <div class="btn">
          <a href="${obj.href}">Open</a>
          <a href="${obj.code}">Source Code</a>
        </div>
        </div>`;
  }
}

render(domArr, dom);
render(arrayArr, arrays);
render(stringsArr, strings);
render(mathsArr, maths);
render(projArr, proj)
