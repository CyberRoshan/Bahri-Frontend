// ? Header JS Start

// ! Mobile Header Start
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const offCanvas = document.querySelector(".off-canvas");

  menuToggle.addEventListener("click", function () {
    offCanvas.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  document.addEventListener("click", function (event) {
    if (
      !offCanvas.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      offCanvas.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});
// ! Mobile Header End

// ! User Dropdown Header Start
document.addEventListener("DOMContentLoaded", function () {
  const userIcons = document.querySelectorAll(".user-icon");
  const dropdownMenus = document.querySelectorAll(".profile-dropdown");
  const backdrop = document.querySelector(".backdrop");

  function toggleDropdown(event) {
    event.stopPropagation();
    const clickedIcon = event.currentTarget;
    const associatedDropdown = clickedIcon.nextElementSibling;

    // Close all other dropdowns
    dropdownMenus.forEach((menu) => {
      if (menu !== associatedDropdown) {
        menu.classList.remove("show");
      }
    });

    // Toggle the clicked dropdown
    associatedDropdown.classList.toggle("show");
    backdrop.classList.toggle("show");
  }

  function closeAllDropdowns() {
    dropdownMenus.forEach((menu) => menu.classList.remove("show"));
    backdrop.classList.remove("show");
  }

  userIcons.forEach((icon) => {
    icon.addEventListener("click", toggleDropdown);
  });

  backdrop.addEventListener("click", closeAllDropdowns);

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropdown")) {
      closeAllDropdowns();
    }
  });
});
// ! User Dropdown Header End

// ! Notification Dropdown Header Start
document.addEventListener("DOMContentLoaded", function () {
  const notificationIcons = document.querySelectorAll(".notification-icon");
  const notificationMenus = document.querySelectorAll(".notification-menu");
  const backdrop = document.querySelector(".backdrop");

  function toggleNotification(event) {
    event.stopPropagation();
    const clickedIcon = event.currentTarget;
    const associatedDropdown = clickedIcon.nextElementSibling;

    // Close all other dropdowns
    notificationMenus.forEach((menu) => {
      if (menu !== associatedDropdown) {
        menu.classList.remove("show");
      }
    });

    // Toggle the clicked dropdown
    associatedDropdown.classList.toggle("show");
    backdrop.classList.toggle("show");
  }

  function closeAllNotifications() {
    notificationMenus.forEach((menu) => menu.classList.remove("show"));
    backdrop.classList.remove("show");
  }

  notificationIcons.forEach((icon) => {
    icon.addEventListener("click", toggleNotification);
  });

  backdrop.addEventListener("click", closeAllNotifications);

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".notification-dropdown")) {
      closeAllNotifications();
    }
  });
});
// ! Notification Dropdown Header End

// ? Header JS End

// ! Calender Logic Start
const currentDateTitle = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcons = document.querySelectorAll(".icons span");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Highlighted dates (similar to the design)
const highlightedDates = [8, 15];

const renderCalendar = () => {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const lastDayOfMonth = new Date(
    currentYear,
    currentMonth,
    lastDateOfMonth
  ).getDay();
  const lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();

  let liDayTag = "";

  // Adjust for Monday as first day of week
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  for (let i = adjustedFirstDay; i > 0; i--) {
    liDayTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isHighlight = highlightedDates.includes(i) ? "highlight" : "";
    liDayTag += `<li class="${isHighlight}">${i}</li>`;
  }

  const remainingDays = 7 - ((adjustedFirstDay + lastDateOfMonth) % 7);
  if (remainingDays < 7) {
    for (let i = 1; i <= remainingDays; i++) {
      liDayTag += `<li class="inactive">${i}</li>`;
    }
  }

  currentDateTitle.innerText = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liDayTag;
};

renderCalendar();

prevNextIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    currentMonth = icon.id === "prevIcon" ? currentMonth - 1 : currentMonth + 1;

    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
      date = new Date();
    }

    renderCalendar();
  });
});
// ! Calender Logic End

// ? login.html Start
// ! OTP Verification Logic Start
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    ".verification-input:not(:first-child)"
  );

  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      if (this.value.length === 1) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Backspace" && !this.value) {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    });
  });

  document.querySelector(".btn-confirm").addEventListener("click", function () {
    let code = "2"; // First digit is always 2
    inputs.forEach((input) => {
      code += input.value;
    });
    console.log("Verification code:", code);
  });

  document.querySelector(".resend-text").addEventListener("click", function () {
    console.log("Resending verification code...");
    // Add your resend logic here
  });
});
// ! OTP Verification Logic End
// ? login.html End

// ? cart-screen.html Start
// ! Add Address Script Start
document.getElementById("confirmButton").addEventListener("click", function () {
  const addressBox = document.getElementById("addressBox");
  addressBox.classList.remove("d-none");
  addressBox.classList.add("d-block");

  const addAddressButton = document.getElementById("addAddressButton");
  addAddressButton.style.display = "none";
});
// ! Add Address Script End
// ? cart-screen.html End

// ? booking-history.html Start
// ! Toggle Button Start
const buttons = document.querySelectorAll(".toggle-button");
const slider = document.querySelector(".slider");
const tabPanes = document.querySelectorAll(".tab-pane");

function toggle(index) {
  // Update toggle buttons
  buttons.forEach((button, i) => {
    if (i === index) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Move slider
  if (index === 1) {
    slider.classList.add("right");
  } else {
    slider.classList.remove("right");
  }

  // Switch tab content with animation
  tabPanes.forEach((pane, i) => {
    if (i === index) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  });
}
// ! Toggle Button End
// ? booking-history.html End

// ! Price Range Slider Start

// ! Price Range Slider End

