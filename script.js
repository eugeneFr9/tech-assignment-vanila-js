const nativeCheckbox = document.querySelector(".native-checkbox");
const customCheckbox = document.querySelector(".custom-checkbox");
const checkmark = document.querySelector(".checkmark");

// Handle clicks on the checkboxes
customCheckbox.addEventListener("click", toggleCheck);
nativeCheckbox.addEventListener("click", toggleCheck);

function toggleCheck() {
  const isUnchecked = checkmark.classList.contains("unchecked");
  checkmark.classList.toggle("unchecked");
  if (isUnchecked) {
    nativeCheckbox.checked = true;
  } else {
    nativeCheckbox.checked = false;
  }
}

// Handle keyboard events
document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.key === " " && customCheckbox.classList.contains("focused")) {
    event.preventDefault();
    toggleCheck();
  } else if (event.key === "Tab") {
    console.log("here");
    event.preventDefault();
    customCheckbox.classList.toggle("focused");
    document.activeElement === nativeCheckbox
      ? nativeCheckbox.blur()
      : nativeCheckbox.focus();
  }
}
