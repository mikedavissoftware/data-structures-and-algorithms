function sum(total, stack) {
  return total + stack
}

let clawPosition = 3
const stacks = [4, 5, 4, 5, 5]
let clawHasBox = 1

function solve(clawPos, boxes, boxInClaw) {
  const totalBoxes = boxes.reduce(sum) + boxInClaw
  const avgStackSize = Math.floor(totalBoxes / boxes.length)
  const remainingBoxes = totalBoxes % boxes.length

  function indexOfSmallest(stacks) {
    let smallestIndex = 0
    for (i = 1; i < stacks.length; i++) {
      if (stacks[i] < stacks[smallestIndex]) {
        smallestIndex = i
      }
    }
    return smallestIndex
  }

  const posOfSmallest = indexOfSmallest(boxes)

  console.log(boxes)
  console.log(`clawPos: ${clawPos}`)
  console.log(`boxInClaw: ${boxInClaw ? "yes" : "no"}`)
  console.log(`totalBoxes: ${totalBoxes}`)
  console.log(`avgStackSize: ${avgStackSize}`)
  console.log(`remainingBoxes: ${remainingBoxes}`)
  console.log(`posOfSmallest: ${posOfSmallest}`)

  
  if (boxes[clawPos] <= avgStackSize) {
    if (boxInClaw) {
      return "PLACE"
    } else {
      if (clawPos > posOfSmallest) {
        return "LEFT"
      } else if (clawPos < posOfSmallest) {
        return "RIGHT"
      }
    }
  } else if (boxes[clawPos] > avgStackSize) {
    if (!boxInClaw) {
      return "PICK"
    } else {
      if (clawPos > posOfSmallest) {
        return "LEFT"
      } else if (clawPos < posOfSmallest) {
        return "RIGHT"
      }
    }
  }
}

console.log(solve(3, [4, 5, 4, 5, 5], 1))
console.log(solve(2, [4, 5, 4, 5, 5], 1))

[5, 5, 5, 5, 4]


/*
if there is a remainder after calculating the avg stack size,
we need to set that number of stacks, left to right, as receiving an extra box
so, if (!boxInClaw && clawPos >= remainingBoxes
*/