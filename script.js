const save = document.getElementById("save");
const remove = document.getElementById("remove");
const form = document.querySelector("form");
const p = document.querySelector("p");

const localStorageKey = "nome";

let localArr = localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : [];

if (localArr.length > 0) {
  let lastNameIndex = localArr.length - 1;
  p.innerHTML = `${localArr[lastNameIndex]}`;
}

const saveFnc = () => {
  const nome = document.getElementById("nome").value;

  if (nome.length > 2) {
    localArr.push(nome);

    localStorage.setItem(localStorageKey, JSON.stringify(localArr));

    let lastNameIndex = localArr.length - 1;
    p.innerHTML = `${localArr[lastNameIndex]}`;

    form.reset();
  }
};

const removeFnc = () => {
  localStorage.removeItem(localStorageKey);
  localArr = [];
  p.innerText = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  saveFnc();
});

remove.addEventListener("click", removeFnc);

// -------------------------------------------------------ES-2--------------------------------------------------------------

let sec = 0;
if (sessionStorage.getItem("timer")) {
  sec = sessionStorage.getItem("timer");
} else {
  sec = 0;
}

const timer = () => {
  sec++;
  const p = document.getElementById("timer");

  sessionStorage.setItem("timer", sec);

  p.innerText = `${sec}`;
};

setInterval(timer, 1000);
