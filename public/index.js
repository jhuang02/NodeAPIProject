/*
 * Name: Jerry Huang
 * Date: 11/15/2021
 * Section AF Tara Wueger & Austin Jenchi
 *
 * This JS file uses a custon node API to randomly generate a
 * first name and last name when the user presses the generate female or male identity
 * button.
 */

"use strict";

// const first = require("ee-first");

(function() {
  window.addEventListener("load", init);

  /** Once page is loaded, create listeners to setup page behavior */
  function init() {
    document.getElementById("btn-generate-male").addEventListener("click", function() {
      createIdentity('male')});
    document.getElementById("btn-generate-female").addEventListener("click", function() {
      createIdentity('female')});
  }

  /**
   * Fetches fake identity info from custom API. Turns off generate button while loading,
   * displays loading message, resets identity info if button was previously pressed
   * before. The generate button can be pressed again once the response is received and
   * handled from the API.
   */
  function createIdentity(sex) {
    document.getElementById("btn-generate-" + sex).disabled = true;
    document.getElementById("loading").textContent = "Loading info!";
    document.getElementById("identity").innerHTML = "";

    fetchIdentity(sex);

    document.getElementById("btn-generate-" + sex).disabled = false;
  }

  function fetchIdentity(sex) {
    if (sex === "female") {
      fetch('/' + sex)
      .then(statusCheck)
      .then(resp => resp.json())
      .then(function(response) {
        processData(response, sex)
      })
      .catch(handleError);
    } else {
      fetch('/' + sex)
      .then(statusCheck)
      .then(resp => resp.text())
      .then(function(response) {
        processData(response, sex)
      })
      .catch(handleError);
    }

  }

  /**
   * Using response data from the API, appends info about the first name,
   * last name, email, and sex of the new fake identity onto the screen.
   * @param {JSON} responseData - response from custom node API
   */
  function processData(responseData, sex) {
    document.getElementById("loading").textContent = "";

    let identityArticle = document.getElementById("identity");

    let firstName;
    let lastName;
    if (sex === "male") {
      let response = responseData.split("\n");
      firstName = response[0];
      lastName = response[1];
    } else {
      firstName = responseData.firstName;
      lastName = responseData.lastName;
    }

    let firstText = document.createElement("p");
    firstText.textContent = "First name: " + firstName;
    identityArticle.appendChild(firstText);

    let lastText = document.createElement("p");
    lastText.textContent = "Last name: " + lastName;
    identityArticle.appendChild(lastText);

    let sexText = document.createElement("p");
    sexText.textContent = "Sex: " + capitalize(sex);
    identityArticle.appendChild(sexText);
  }

  function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  /**
   * If the response is successful, return, or else throw an error with the
   * response text.
   * @param {object} response - response from custom node API
   * @returns {object} response from custom node API if fetching went ok
   */
  async function statusCheck(response) {
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return response;
  }

  /**
   * Show user error message and prompt user to try again
   * @param {Error} error - the error that threw when the fetching went wrong
   */
  function handleError(error) {
    document.getElementById("loading").textContent = error + " error. Please check your wifi,\
    refresh the page, and try again :)";
  }
})();