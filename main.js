/*
 * Write a function that prints the temperature closest to 0 among input data.
 * If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5)
*/
const temps = [
    '1 -1 -3 3 2',
    '-4 -2 -111',
    '12 -1 3 6 2 9',
    '12 2 6 9 -2 7',
    '-5 -4 -2 7 -20 4 2 18 11 5',
    ''
];

// ---
function sortNumber(a, b) {
    return a - b;
}

// Receive string of temps one after each other
function outputTemp(tempRow) {
    if (tempRow) {
        const tempArray = tempRow.split(' ');
        const sortedArray = tempArray.sort(sortNumber);
        let prevVal;
        let smallestVal;
        for (let i = 0; sortedArray.length > i; i += 1) {
            if (prevVal) {
                if (!(prevVal + parseInt(sortedArray[i], 10))) {
                    return parseInt(sortedArray[i], 10);
                } else {
                    if (Math.abs(prevVal) < Math.abs(sortedArray[i])) {
                        if (smallestVal) {
                            if (Math.abs(prevVal) < Math.abs(smallestVal)) {
                                smallestVal = prevVal;
                            }
                        } else {
                            smallestVal = prevVal;
                        }
                    } else {
                        smallestVal = sortedArray[i];
                    }
                }
                if (i === sortedArray.length - 1) {
                    return parseInt(smallestVal, 10);
                }
            }
            prevVal = parseInt(sortedArray[i], 10);
        }
    } else {
        return Number(tempRow); // <-- wasn't sure what to do with empty string
    }
} // TEST DURATION - ~50min