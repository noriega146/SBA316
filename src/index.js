import "./styles.css";
// Menu data structure
var menuLinks = [
  { text: "Services", href: "/about" },
  {
    text: "Residential",
    href: "#",
    subLinks: [
      { text: "Apartment", href: "/catalog/apartment" },
      { text: "Home", href: "/catalog/home" },
      { text: "Other", href: "/catalog/other" },
    ],
  },
  {
    text: "Office",
    href: "#",
    subLinks: [
      { text: "Janitorial", href: "/orders/janitorial" },
      { text: "Disinfection", href: "/orders/disinfection" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>Schedule your Service Now!!!</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "100";

menuLinks.forEach((link) => {
  const a = document.createElement("a");
  a.href = link.href;
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});

const topMenuLinks = topMenuEl.querySelectorAll("a");
//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
topMenuEl.addEventListener("click", function (event) {
  // Prevent the default action
  event.preventDefault();

  // Return if the clicked element was not an <a> element
  if (event.target.tagName !== "A") {
    return;
  }

  // Log the content of the <a> element
  console.log(event.target.textContent);

  // Switch active class on the clicked <a> element
  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    subMenuEl.style.top = "0";
    subMenuEl.innerHTML = "";
  } else {
    // Remove active class from all <a> elements
    topMenuLinks.forEach((link) => link.classList.remove("active"));
    // Add active class to the clicked <a> element
    event.target.classList.add("active");
  }
  // Find the  "link" object in the menuLinks array
  const linkObject = menuLinks.find(
    (link) => link.text.toLowerCase() === event.target.textContent.toLowerCase()
  );

  if (linkObject && linkObject.subLinks) {
    buildSubmenu(linkObject.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
    subMenuEl.innerHTML = "";
  }
});

function buildSubmenu(sublinks) {
  subMenuEl.innerHTML = "";
  sublinks.forEach((linkobj) => {
    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", linkobj.href);
    linkEl.textContent = linkobj.text;
    subMenuEl.appendChild(linkEl);
  });
}
