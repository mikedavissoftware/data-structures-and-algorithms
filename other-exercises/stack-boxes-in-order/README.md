# Equal Stacks at Box Factory

## Goal

- 

## Instructions

You work in an automated factory that controls a robotic arm to move packages. 
The arm can pick packages from the conveyor belts to form a stack of packages.
The packages are sorted from the heaviest to the lightest on each of the conveyor
belts. Your objective is to pick the heaviest package among the 3 conveyor belts
to move it on a stack. The available commands are:

Implement the function `solve(weight0, weight1, weight2)` that takes 3 integer
arguments: `weight0`, `weight1` and `weight2`. These values represent the weight of
the packages available on the conveyor belts with respective index 0, 1 and 2. When
a conveyor belt is empty, the value is 0.

The function must return the index of the conveyor belt that has the heaviest
package. For example, if the values for weight0, weight1 and weight2 are 85, 100 and
90, then the expected answer is 1. In case of equality, any correct answer is accepted.

The function `solve(weight0, weight1, weight2)` will be called successively until all
the conveyor belts are empty.

## Before you start coding

1. Rewrite the problem in your own words
2. Validate that you understand the problem
3. Write your own test cases
4. Pseudocode
5. Code!
