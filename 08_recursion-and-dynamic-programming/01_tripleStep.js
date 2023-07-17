/**
 * A child is running up a staircase with n steps and can
 * hop either 1 step, 2 steps, or 3 steps at a time.
 * Implement a method to count how many possible ways the
 * child can run up the stairs.
 */

function tripleStep(numberOfSteps, memo = []) {
  if (numberOfSteps < 0) {
    return 0;
  }
  if (numberOfSteps === 0) {
    return 1;
  }
  if (!memo[numberOfSteps]) {
    memo[numberOfSteps] =
      tripleStep(numberOfSteps - 1, memo) +
      tripleStep(numberOfSteps - 2, memo) +
      tripleStep(numberOfSteps - 3, memo);
  }
  return memo[numberOfSteps];
}

// TEST CASES
console.log(tripleStep(1)); // 1
console.log(tripleStep(2)); // 2
console.log(tripleStep(3)); // 4
console.log(tripleStep(4)); // 7
