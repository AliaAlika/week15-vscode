function askNumber1() {
  return prompt("Пожалуйста, введите первое число");
}

function askNumber2() {
  return prompt("Пожалуйста, введите второе число");
}

function showResult(number) {
  if (number === Infinity) {
    alert("На 0 делить нельзя!");
  } else {
    alert(number);
  }
}

function sum() {
  let n1 = askNumber1();
  let n2 = askNumber2();
  return Number(n1) + Number(n2);
}

function sub() {
  let n1 = askNumber1();
  let n2 = askNumber2();
  return n1 - n2;
}

function div() {
  let n1 = askNumber1();
  let n2 = askNumber2();
  return n1 / n2;
}

function mult() {
  let n1 = askNumber1();
  let n2 = askNumber2();
  return n1 * n2;
}
