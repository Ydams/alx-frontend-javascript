export default function createIteratorObject(report) {
  // Create an array of all employees across all departments
  const allEmployees = [];
  
  // Iterate over each department in the report object
  for (const department of Object.values(report.allEmployees)) {
    allEmployees.push(...department); // Spread the employees into the allEmployees array
  }
  
  // Return an iterator for the allEmployees array
  return allEmployees[Symbol.iterator]();
}

