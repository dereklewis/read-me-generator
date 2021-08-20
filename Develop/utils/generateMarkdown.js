// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None") {
    return `## License
    This project is licensed with ${license}.
    `;

  }
  return "";


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None") {
    return `## License Link
    This project is licensed with ${license}.
    `;

  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}



## Usage
${data.usage}
    
## Contribute
${data.contributor}

## License
${data.license}
[https://opensource.org/licenses/MIT/](https://opensource.org/licenses/MIT).

## Tests
${data.test}


## Questions
${data.github}

${data.email}

`;
}

module.exports = generateMarkdown;
