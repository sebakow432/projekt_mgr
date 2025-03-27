const fs = require('fs');

const patients = JSON.parse(fs.readFileSync('./db/patients.json'));
const doctors = JSON.parse(fs.readFileSync('./db/doctors.json'));
const visits = JSON.parse(fs.readFileSync('./db/visits.json'));
const nurses = JSON.parse(fs.readFileSync('./db/nurses.json'));
const users = JSON.parse(fs.readFileSync('./db/users.json'));

const mergedData = {
  patients,
  doctors,
  visits,
  nurses,
  users
};

fs.writeFileSync('db.json', JSON.stringify(mergedData, null, 2));
console.log('✅ Scalono pliki do db.json!');
