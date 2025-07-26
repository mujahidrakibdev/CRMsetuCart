document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".h-input__input");
  const inputWrapper = document.querySelector(".h-input__input-wrapper");
  const dropdownIcon = document.querySelector(".h-form-field-icon");
  const dropdownWrapper = document.querySelector(".h-select__select--wrapper");
  const options = document.querySelectorAll(".h-select__option");

  // Toggle dropdown visibility
  inputWrapper.addEventListener("click", function () {
    dropdownWrapper.classList.toggle("open");
    inputWrapper.classList.toggle("input-active");
    dropdownIcon.classList.toggle("dropdown-icon");
  });

  options.forEach((option) => {
    option.addEventListener("click", function () {
      options.forEach((opt) => opt.classList.remove("active"));

      this.classList.add("active");
      input.placeholder = this.textContent;

      dropdownWrapper.classList.remove("open");
    });
  });

  document.addEventListener("click", function (e) {
    if (!dropdownWrapper.contains(e.target) && !inputWrapper.contains(e.target)) {
      dropdownWrapper.classList.remove("open");
      inputWrapper.classList.remove("input-active");
    }
  });

  const collapsedView = document.querySelector(".order-summary-collapsed");
  const expandedView = document.querySelector(".order-summary-expanded");
  const expandBtn = document.getElementById("expand-summary");
  const collapseBtn = document.getElementById("collapse-summary");

  expandBtn.addEventListener("click", () => {
    collapsedView.style.display = "none";
    expandedView.style.display = "block";
  });

  collapseBtn.addEventListener("click", () => {
    expandedView.style.display = "none";
    collapsedView.style.display = "flex";
  });
});
