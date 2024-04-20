function solve(boxes, clawPosition, boxInClaw) {

  let minimumIndex = 0
  let maximumIndex = 0

  // find index of shortest stack (if multiple, select first from left to right)
  for (let i = 1; i < boxes.length; i++) {
    if (boxes[i] < boxes[minimumIndex]) {
      minimumIndex = i
    }
  }

  // find index of tallest stack (if multiple, select first from left to right)
  for (let i = 1; i < boxes.length; i++) {
    if (boxes[i] >= boxes[maximumIndex]) {
      maximumIndex = i
    }
  }

  console.log(`shortest stack at index ${minimumIndex}`)
  console.log(`tallest stack at index ${maximumIndex}`)


  if (boxInClaw) {
    if (clawPosition === minimumIndex) {
      return "PLACE"
    } else if (clawPosition > minimumIndex) {
      return "LEFT"
    } else {
      return "RIGHT"
    }
  }

  if (!boxInClaw) {
    if (clawPosition === maximumIndex) {
      return "PICK"
    } else if (clawPosition > maximumIndex) {
      return "LEFT"
    } else {
      return "RIGHT"
    }
  }
}

console.log(solve([2, 1, 1, 1, 2], 0, 0))