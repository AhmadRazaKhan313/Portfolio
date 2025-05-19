// local-run.js
const { exec } = require('child_process');

// Set environment variables that mimic Replit
process.env.NODE_VERSION = '20';

// Start the application with Node 20 features enabled
exec('node --experimental-import-meta-resolve server/index.ts', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});