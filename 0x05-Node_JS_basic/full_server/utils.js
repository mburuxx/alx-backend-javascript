import fs from 'fs';
import path from 'path';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const fields = {};
        lines.slice(1).forEach((line) => {
          const [firstname, field] = line.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });
        resolve(fields);
      }
    });
  });
};

export { readDatabase };
