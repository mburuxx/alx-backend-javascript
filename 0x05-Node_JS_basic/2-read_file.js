const fs = require('fs');

/**
 * Counts the number of students in a CSV data-file.
 * @param {String} dataPath The path to the CSV data-file.
 */
const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const studentGroups = {
    CS: [],
    SWE: [],
  };
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (let i = 1; i < fileLines.length; i += 1) {
    const line = fileLines[i].trim();
    if (line === '') {
      continue;
    }

    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];

    if (field === 'CS' || field === 'SWE') {
      const studentEntry = {};
      studentPropNames.forEach((propName, idx) => {
        studentEntry[propName] = studentPropValues[idx];
      });
      studentGroups[field].push(studentEntry);
    }
  }

  let totalStudents = 0;
  for (const field in studentGroups) {
    if (Object.prototype.hasOwnProperty.call(studentGroups, field)) {
      totalStudents += studentGroups[field].length;
    }
  }

  console.log(`Number of students: ${totalStudents}`);
  for (const field in studentGroups) {
    if (Object.prototype.hasOwnProperty.call(studentGroups, field)) {
      const studentNames = studentGroups[field].map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${studentGroups[field].length}. List: ${studentNames}`);
    }
  }
};

module.exports = countStudents;
