/**
 * @copyright matthewdsouza 2023
 * @author matthew <matthewdsouza.one@outlook.com>
 */

"use strict";

// Imports
import { ripple } from "./utils/ripple.js";

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
 * Filter functionality
 */
window.filterObj ={};