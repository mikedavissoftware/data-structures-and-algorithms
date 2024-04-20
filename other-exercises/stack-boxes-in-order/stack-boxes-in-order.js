function solve(weight0, weight1, weight2) {
  if (weight0 >= weight1 && weight0 >= weight2) {
    return 0
  } else if (weight1 >= weight2) {
    return 1
  } else {
    return 2
  }
}