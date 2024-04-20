function sum(total, stack) {
  return total + stack
}


function solve(clawPos, boxes, boxInClaw) {
  const totalBoxes = boxes.reduce(sum) + boxInClaw
  const avgStackSize = Math.floor(totalBoxes / boxes.length)
  const boxRemainder = totalBoxes % boxes.length

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
  console.log(`boxRemainder: ${boxRemainder}`)
  console.log(`posOfSmallest: ${posOfSmallest}`)

  if (boxInClaw) {
    if (clawPos > posOfSmallest) {
      return "LEFT"
    } else if (clawPos < posOfSmallest) {
      return "RIGHT"
    } else {
      return "PLACE"
    }

  } else { // no box
    if (clawPos < boxRemainder && boxes[clawPos] > avgStackSize + 1) {
      return "PICK"
    } else if (clawPos > boxRemainder && boxes[clawPos] > avgStackSize) {
      return "PICK"
    }
  }
  


  
  if (boxes[clawPos] < avgStackSize) {
    if (boxInClaw) {
      return "PLACE"
    }

    if (clawPos > posOfSmallest) {
      return "LEFT"
    } else if (clawPos < posOfSmallest) {
      return "RIGHT"
    }
  } else if (boxes[clawPos] = avgStackSize) {
    if (!boxInClaw) {
      return "PICK"
    }

    if (clawPos > posOfSmallest) {
      return "LEFT"
    } else if (clawPos < posOfSmallest) {
      return "RIGHT"
    }
  }
}

console.log(solve(3, [4, 5, 4, 5, 5], 1))
console.log(solve(2, [4, 5, 4, 5, 5], 1))
console.log(solve(2, [4, 5, 5, 5, 5], 0))




/*
if there is a remainder after calculating the avg stack size,
we need to set that number of stacks, left to right, as receiving an extra box
so, if (!boxInClaw && clawPos >= boxRemainder
*/