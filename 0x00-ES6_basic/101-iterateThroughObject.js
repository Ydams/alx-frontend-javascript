export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array, then join the elements with ' | '
  return [...reportWithIterator].join(' | ');
}

