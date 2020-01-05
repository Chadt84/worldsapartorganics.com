const fs = require('fs'),
    path = require('path');
const CNAMPath = path.join(__dirname, 'CNAME');
if (fs.existsSync(CNAMPath)) {
    fs.copyFileSync(path.join(__dirname, 'CNAME'), path.join(__dirname, 'build', 'CNAME'));
    console.log('Successfully copied CNAME to dist folder')
} else {
    console.error('No CNAME file found to copy');
}
