/**
 * @copyright matthewdsouza 2023
 * @author matthew <matthewdsouza.one@outlook.com>
 */

"use strict";

// Imports
import { ripple } from "./utils/ripple.js";
import { addEventOnElements } from "./utils/event.js"

// Header on-scroll state
const /** {NodeElement} */ $header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

/**
 * Add ripple effect
 */
const /** {NodeList} */ $rippleElems =
    document.querySelectorAll("[data-ripple]");

$rippleElems.forEach(($rippleElem) => ripple($rippleElem));



/**
 * Navbar toggle for mobile screens
 */
const /** NODELIST */ $navTogglers = document.querySelectorAll("[data-nav-toggler]");
const /** NODEELEMENT */ $navbar = document.querySelector("[data-navigation]");
const /** NODEELEMENT */ $scrim = document.querySelector("[data-scrim]");

addEventOnElements($navTogglers, "click", function () {
    $navbar.classList.toggle("show");
    $scrim.classList.toggle("active");
});


/**
 * Filter functionality
 */
window.filterObj = {};