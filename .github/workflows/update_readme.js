const fetch = require('node-fetch');
const fs = require('fs');

async function updateReadme() {
  try {
    // Fetch a random quote from the Quotable API
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const randomQuote = `**Random Quote:** ${data.content} - ${data.author}`;

    // Read the existing README.md file
    let readmeContent = fs.readFileSync('README.md', 'utf-8');

    // Replace the RANDOM_QUOTE_PLACEHOLDER with the new random quote
    readmeContent = readmeContent.replace('<!-- RANDOM_QUOTE_PLACEHOLDER -->', randomQuote);

    // Write the updated content back to README.md
    fs.writeFileSync('README.md', readmeContent);

    console.log('README.md updated successfully with a random quote.');
  } catch (error) {
    console.error('Error updating README.md:', error);
  }
}

updateReadme();
