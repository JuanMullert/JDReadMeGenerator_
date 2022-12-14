// Function to return a message if user doesn't want contributors
function renderContributingSection(confirmContributers, data) {
    if (!confirmContributers) {
      return `
    Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.
      `;
    } else {
      return `
    ${data}
      `;
    }
  }
  
  // Function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) { 
    if (license !== 'no license') {
      return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
      `;
    } else {
      return ' ';
    }
  }