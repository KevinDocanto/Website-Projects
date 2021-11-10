const row = $(".row");
const day = $(".day");
const date = new Date();
let key = -1;

row.click(function () {
  if ($(this).find(".mark").length > 0) return removeMark(this);
  else {
    insertMark(this);
    let child = this.lastChild;
    localStorage.setItem(++key, child.textContent);
  }
});

function createMark() {
  let mark = document.createElement("div");
  let x = document.createElement("h1");
  x.textContent = "X";
  mark.classList.add("mark");
  mark.append(x);

  return mark;
}

function insertMark(row) {
  return row.prepend(createMark());
}

function removeMark(row) {
  return $(row)[0].removeChild($(row)[0].firstChild);
}

function getDay() {
  return (day[date.getDate() - 1].style.backgroundColor = "lightgray");
}

function saveMark() {
  for (let i = localStorage.length; i >= key; i--) {
    day[localStorage.getItem(i) - 1].prepend(createMark());
    console.log(i);
  }
}

getDay();
saveMark();
