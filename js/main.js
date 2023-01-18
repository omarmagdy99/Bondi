// Get Data
// Navbar Data
let linksAn = document.querySelectorAll(".navbar li a");
let getStart = document.querySelectorAll(".get-started");
let sectionNames = document.querySelectorAll(".section");
let sectionArea = [];
sectionNames.forEach((sectionName) => {
  sectionArea.push([sectionName.classList[0], sectionName.offsetTop]);
});
let scrollToTop = document.querySelector(".scroll-top");
//Portfolio Data
let portBtn = document.querySelectorAll(".portfolio li");
let portImages = document.querySelectorAll(".p-gallary  .gallary-port");

// Start Navbar Section ==================================

// Function active links
function activeScroll(winTop, arrayLinks) {
  arrayLinks.forEach((linkAn) => {
    linkAn.classList.remove("active");
  });
  if (winTop >= sectionArea[0][1] && winTop <= sectionArea[1][1]) {
    activeFunction(sectionArea[0][0], arrayLinks);
  }
  if (winTop >= sectionArea[1][1] && winTop <= sectionArea[2][1]) {
    activeFunction(sectionArea[1][0], arrayLinks);
  }
  if (winTop >= sectionArea[2][1] && winTop <= sectionArea[3][1]) {
    activeFunction(sectionArea[2][0], arrayLinks);
  }
  if (winTop >= sectionArea[3][1] && winTop <= sectionArea[4][1]) {
    activeFunction(sectionArea[3][0], arrayLinks);
  }
  if (winTop >= sectionArea[4][1] && winTop <= sectionArea[5][1]) {
    activeFunction(sectionArea[4][0], arrayLinks);
  }
  if (winTop >= sectionArea[5][1] && winTop <= sectionArea[6][1]) {
    activeFunction(sectionArea[5][0], arrayLinks);
  }
  if (winTop >= sectionArea[6][1] && winTop <= sectionArea[7][1]) {
    activeFunction(sectionArea[6][0], arrayLinks);
  }
  if (winTop >= sectionArea[7][1] && winTop <= sectionArea[8][1]) {
    activeFunction(sectionArea[7][0], arrayLinks);
  }
  if (winTop >= sectionArea[8][1]) {
    activeFunction(sectionArea[8][0], arrayLinks);
  }
}
function activeFunction(sectionClassName, arrayLinks) {
  arrayLinks.forEach((linkAn) => {
    linkAn.classList.remove("active");
    if (linkAn.dataset.section == `.${sectionClassName}`) {
      linkAn.classList.add("active");
    }
  });
}
// Function active links

// Start navbar section click
function goToSection(linksF) {
  linksF.forEach((nav) => {
    nav.addEventListener("click", (e) => {
      e.preventDefault();
      let sectionLocation = document.querySelector(
        nav.dataset.section
      ).offsetTop;
      window.scrollTo({
        top: sectionLocation,
        behavior: "smooth",
      });
    });
  });
}
goToSection(linksAn);
goToSection(getStart);
// end navbar section click
// End Navbar Section ==================================

// Start Portfolio Section ==================================
// Active Function
function activeBtn(btns, targetBtn) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  targetBtn.classList.add("active");
}
// Active Function

portBtn.forEach((port) => {
  port.addEventListener("click", (e) => {
    activeBtn(portBtn, port);
    if (e.target.dataset.portBtn === "All") {
      portImages.forEach((image) => {
        image.classList.remove("hide");
      });
    } else {
      portImages.forEach((image) => {
        if (image.dataset.portImage === e.target.dataset.portBtn) {
          image.classList.remove("hide");
        } else {
          //   image.style.display = "none";
          image.classList.add("hide");
        }
      });
    }
  });
});
// End Portfolio Section ==================================

// on Scroll Window
window.onscroll = () => {
  let windowScrollTop = this.pageYOffset;

  // Start navbar active link
  activeScroll(window.scrollY, linksAn);
  // End navbar active link

  // scroll to top button
  if (windowScrollTop > 100) {
    scrollToTop.style.bottom = "40px";
  } else {
    scrollToTop.style.bottom = "-60px";
  }
  scrollToTop.addEventListener("click", (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  // scroll to top button
};
// on Scroll Window
