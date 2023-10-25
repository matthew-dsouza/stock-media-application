/**
 * @copyright matthewdsouza 2023
 * @author matthew <matthewdsouza.one@outlook.com>
 */

"use strict";

// IMPORTS

// COnvert URL to object
// @params {string} urlString url string
// return {object} url object
export const urlDecode = (urlString) => {
  return Object.fromEntries(
    urlString
      .replace(/%23/g, "#")
      .replace(/%20/g, " ")
      .split("&")
      .map((i) => i.split("="))
  );
};
