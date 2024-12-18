/**
 * This retrieves students in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * @returns
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
