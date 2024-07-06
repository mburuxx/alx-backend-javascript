const fs = require('fs');

/**
 * Counts the number of students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise} A promise that resolves when the operation is complete.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const fileLines = data.trim().split('\n').filter((line) => line.length > 0); // Filter out empty lines
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      if (studentRecord.length === dbFieldNames.length) { // Ensure the line has the correct number of fields
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1].trim(); // Trim any extra spaces
        if (field && field !== '') { // Ensure the field is not empty
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx].trim()]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
      }
    }

    const totalStudents = Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0);
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
    resolve();
  });
});

module.exports = countStudents;
