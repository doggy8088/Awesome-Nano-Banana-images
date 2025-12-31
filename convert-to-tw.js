const fs = require('fs').promises;
const OpenCC = require('@willh/opencc-js');

// Initialize OpenCC converter with cn -> tw2 (Simplified Chinese to Traditional Chinese Taiwan)
const converter = OpenCC.Converter({ from: 'cn', to: 'tw2' });

// Read the source file
const inputFile = 'README.md';
const outputFile = 'README_tw.md';

async function convertFile() {
  try {
    // Read the content of README.md
    const content = await fs.readFile(inputFile, 'utf8');
    
    // Convert the content from cn to tw2
    const convertedContent = converter(content);
    
    // Write the converted content to README_tw.md
    await fs.writeFile(outputFile, convertedContent, 'utf8');
    
    console.log(`✅ Successfully converted ${inputFile} to ${outputFile}`);
    console.log(`   Conversion: cn -> tw2 (Simplified Chinese to Traditional Chinese Taiwan)`);
  } catch (error) {
    console.error('❌ Error during conversion:', error.message);
    process.exit(1);
  }
}

convertFile();
