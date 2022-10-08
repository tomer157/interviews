// find common elements between two arrays
const intersection = (nums1, nums2) => {
  let firstSet = new Set();

  for (const num of nums1) {
    firstSet.add(num);
  }

  let intersectionSet = new Set();

  for (let num of nums2) {
    if (firstSet.has(num)) {
      intersectionSet.add(num);
    }
  }

  console.log(Array.from(intersectionSet));
  return Array.from(intersectionSet);
};

intersection([1, 2, 2, 1], [2, 2]);
