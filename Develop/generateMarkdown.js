function checkLicense(license){
  if (license==="None"){
      return {name: "No License"}

  }
 else if (license === "Apache")
{
  return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}
else if (license === "MIT")
{
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}
}
// function to generate markdown for README
function generateMarkdown(data){
  return `# ${data.title};

  ## Description
  ${data.description};
---
  ## Content
  *[Installation]{#installation}
  *[Test]{#test}
  *[License]{#license}
 *[Contribution]{#installation}
 *[contact]{#contact}
 
 ---

  ## Installation 
  ${data.installation}
  
  ---
  ##Test
  ${data.test}

  ---
  ##License
  ${data.license}

  ---

  ##Contribution
  ${data.contribution}

  ---
  ##Contact
  ${data.contact}







`}



// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = generateMarkdown;
