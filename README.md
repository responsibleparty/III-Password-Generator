# III-Password-Generator
Assignment III - Password Generator made with JavaScript

# Goal
What is the goal of the program or function.

# Input
- What (if any) input does the function or program accept? Are there specific data types or ranges?
- Input implies that there was a question asked

# Output
What (if any) output does the function or program return.

# Steps
What are the steps (written in English) necessary to solve this problem? This should NOT be programming code, but each line should be specific enough to translate to a line or two of code in your specific language.

- Fewer lines = more efficient code
- If you're counting more paranthesis, it's prolly too complicated
- Be clear > be short
- Premature optimization is the root of all evil. Make your code clear for the program.
- constants should be in caps
- Array names can be plural, but individual values shouldn't be
- Avoid ternary operators if possible. Expand code into complete if - else structures when possible
- Avoid Boolean operators in if statements. Use else if or nested if for.
- Always add in final else clause, even if it's impossible.

# for Loops
- use for loops for deterministic repetition: you know how many times something whill happen before loop begins
- ideal for iterating through a listable data structure
- Sentry: are variable whose job is it to control access to that loop

# while Loops
- are non deterministic
- based on events or user input
- end of the loop is something you can't predict
- Condition of a while loop indicates when you will STAY in the loop
- When will you leave the loop?
- Initialize loop before the loop begins.

#keepgoing Loop
- Use a boolean sentry
- Initialize it outside of the loop
- Change inside the loop in basic if statements
- This allows you to keep all the conditions positive
- `while (keepGoing{}`

#Single-Purpose Function
- A function should solve a very specific problem
- 	If it does more than one thing, consider making it more than one function
-  Repeated or complex behavior that can be named is a good candidate for a function
-  It should be small enough to see all at once in VS code
-  Reasonable (<10) number of local variables
-  If a function does not return a value, it doesn't need an empty return statement.
-  Make a variable, change it's value, return that variable
-  If it's too complex, consider a data-driven solution
-  Try to test in isolation first before integration

# Objects
- Have a meaningful name
- Every object should have a constructor or equivalent 

