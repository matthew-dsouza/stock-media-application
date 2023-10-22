/**
* @copyright matthewdsouza 2023
* @author matthew <matthewdsouza.one@outlook.com>
*/

"use strict";

/**
 * Convert Object to URL
 * @param {Object} urlObj url object
 * @returns url STRING
 */

export const urlEncode = urlObj => {
    return Object.entries(urlObj).join("&").replace(/,/g, "=").replace(/#/g, "%23");
}