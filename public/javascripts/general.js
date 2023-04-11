function checkSelect() {
    let select = document.getElementsByName("teamId")[0];
    let button = document.getElementById("select-button");
    if (select.value === "no team") {
      button.style.display = "none";
    } else {
      button.style.display = "block";
    }
}
