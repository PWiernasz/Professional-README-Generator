// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'none':
      return ''
      break;
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Academic':
      return '[![License](https://img.shields.io/badge/License-Academic-blue.svg)](https://opensource.org/licenses/AFL-3.0)';
      break;
    case 'GNU':
      return '[![License](https://img.shields.io/badge/License-GNU-blue.svg)](https://opensource.org/licenses/AGPL-3.0)';
      break;
    case 'ISC':
      return '[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'MIT':
      return '[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla':
      return '[![License](https://img.shields.io/badge/License-Mozilla-blue.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Open':
      return '[![License](https://img.shields.io/badge/License-Open-blue.svg)](https://opensource.org/licenses/OSL-3.0)';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else {
  return '- [License](#license)';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    return `## License:
This project is licensed under ${license}    
      `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  ## Description: 
  ${data.description}
  
  ## Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation: 
  ${data.installation}
  ## Usage:
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing:
  ${data.contributing}
  
  https://github.com/${data.repo}
  ## Tests:
  ${data.tests}
  
  ## Questions:
  If you have questions about this project, please contact at:
  ${data.email}
  `;
}

module.exports = generateMarkdown;