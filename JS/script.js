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

// ! Price Range Slider Start
function initializePriceRangeSlider(sliderId, minValueId, maxValueId, minPrice = 0, maxPrice = 5000, startMin = 200, startMax = 4000) {
  const slider = document.getElementById(sliderId);
  const minValue = document.getElementById(minValueId);
  const maxValue = document.getElementById(maxValueId);

  noUiSlider.create(slider, {
      start: [startMin, startMax],
      connect: true,
      range: {
          'min': minPrice,
          'max': maxPrice
      },
      format: {
          to: function(value) {
              return '$' + Math.round(value);
          },
          from: function(value) {
              return Number(value.replace('$', ''));
          }
      }
  });

  slider.noUiSlider.on('update', function(values, handle) {
      if (handle === 0) {
          minValue.textContent = values[0];
      } else {
          maxValue.textContent = values[1];
      }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Price Range Slider
  initializePriceRangeSlider('price-range', 'min-value', 'max-value');
});
// ! Price Range Slider End

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

// ? login.html Start
// ! OTP Verification Logic Start
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".verification-input:not(.first-input)")
  const confirmBtn = document.getElementById("confirmBtn")
  const resendBtn = document.getElementById("resendBtn")

  // Handle input navigation and validation
  inputs.forEach((input, index) => {
    input.addEventListener("input", function (e) {
      // Allow only numbers
      this.value = this.value.replace(/[^0-9]/g, "")

      if (this.value.length === 1) {
        // Move to next input if available
        if (index < inputs.length - 1) {
          inputs[index + 1].focus()
        }
      }

      // Check if all inputs are filled
      checkInputs()
    })

    input.addEventListener("keydown", function (e) {
      if (e.key === "Backspace" && !this.value) {
        // Move to previous input if current is empty
        if (index > 0) {
          inputs[index - 1].focus()
        }
      }
    })

    // Prevent paste of non-numeric characters
    input.addEventListener("paste", (e) => {
      e.preventDefault()
      const pastedText = (e.clipboardData || window.clipboardData).getData("text")
      const numbers = pastedText.match(/\d/g)

      if (numbers) {
        numbers.forEach((num, i) => {
          if (index + i < inputs.length) {
            inputs[index + i].value = num
            if (index + i < inputs.length - 1) {
              inputs[index + i + 1].focus()
            }
          }
        })
      }
    })
  })

  // Check if all inputs are filled
  function checkInputs() {
    const allFilled = Array.from(inputs).every((input) => input.value.length === 1)
    confirmBtn.disabled = !allFilled
  }

  // Handle confirm button click
  confirmBtn.addEventListener("click", () => {
    let code = "2" // First digit is always 2
    inputs.forEach((input) => {
      code += input.value
    })
    console.log("Verification code:", code)
    // Add your verification logic here
  })

  // Handle resend button click
  resendBtn.addEventListener("click", () => {
    console.log("Resending verification code...")
    // Add your resend logic here

    // Clear all inputs except the first one
    inputs.forEach((input) => {
      input.value = ""
    })
    inputs[0].focus()
    confirmBtn.disabled = true
  })

  // Focus first input when modal opens
  const verificationModal = document.getElementById("verificationModal")
  verificationModal.addEventListener("shown.bs.modal", () => {
    inputs[0].focus()
  })
})


// ! OTP Verification Logic End
// ? login.html End

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

// ! Some JS is in Script.js