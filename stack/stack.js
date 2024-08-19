class Stack {
    elements = [];

    /**
     * Adds a new element to the top of the stack.
     *
     * @param {*} element - the element to be added to the stack
     * @return {undefined} this function does not return any value
     */
    push(element) {
        this.elements.push(element);
    }

    /**
     * Removes and returns the top element from the stack.
     *
     * @return {*} The top element from the stack, or undefined if the stack is empty.
     */
    pop() {
        return this.elements.pop();
    }

    /**
     * Returns the top element from the stack without removing it.
     *
     * @return {*} The top element from the stack, or undefined if the stack is empty.
     */
    peek() {
        return this.elements[this.elements.length - 1];
    }
    
    /**
     * Checks if the stack is empty.
     *
     * @return {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty() {
        return this.elements.length === 0;
    }

    /**
     * Returns the number of elements in the stack.
     *
     * @return {number} The size of the stack.
     */
    size() {
        return this.elements.length;
    }
}

//isBalance ()

const isBalance = (string) => {
    if(string.length <= 0) return false;

    const stack = new Stack();

    for (let char of string) {

        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if(stack.isEmpty()) return false;

            stack.pop();
        }

    }

    return stack.isEmpty();
}

// leet code 20
const isValid = (string) => { 
    if(string.length <= 0) return false;

    const stack = new Stack();

    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    const mappingOpenChars  = Object.values(mapping);
    const mappingCloseChars = Object.keys(mapping);

    for (let char of string) {

        if( mappingOpenChars.includes(char) ) {
            stack.push(char);
        } else if( mappingCloseChars.includes(char) ) {

            if(stack.isEmpty()) return false;
            if(stack.pop() !== mapping[char]) return false;
        }
    }

    return stack.isEmpty();
}