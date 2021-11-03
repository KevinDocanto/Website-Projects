const row = $(".row");

row.click(function () {
  if ($(this).find(".mark").length > 0)
    $(this)[0].removeChild($(this)[0].firstChild);
  else {
    let mark = document.createElement("div");
    let x = document.createElement("h1");
    x.textContent = "X";
    mark.classList.add("mark");
    mark.append(x);
    this.prepend(mark);

    document.cookie = "name=kevin;";
  }
});
