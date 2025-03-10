/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let new_numbers: number[] = [];
    if (!numbers.length) {
        return new_numbers;
    }
    new_numbers = [numbers[0], numbers[numbers.length - 1]];
    return new_numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let new_numbers = numbers.map((x: number): number => x * 3);
    return new_numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let new_numbers: number[] = numbers.map((x: string): number => {
        let z: number = +x;
        if (!z) {
            z = 0;
        }
        return z;
    });

    return new_numbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let new_amounts: number[] = amounts.map((x: string): number => {
        if (x[0] === "$") {
            x = x.slice(1);
        }
        let z: number = +x;
        if (!z) {
            z = 0;
        }
        return z;
    });

    return new_amounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let new_messages: string[] = messages.map((x: string): string => {
        if (x[x.length - 1] === "!") {
            x = x.toUpperCase();
        }
        return x;
    });
    return new_messages.filter((x: string): boolean => x[x.length - 1] !== "?");
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let total: number = 0;
    words.reduce((currentTotal: string, word: string): string => {
        if (word.length < 4) {
            total++;
        }
        return currentTotal;
    }, "");
    return total;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let same: boolean = true;
    colors.reduce((currentColor: string, color: string): string => {
        if (color !== "red" && color !== "green" && color !== "blue") {
            same = false;
        }
        return "";
    }, "");
    return same;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let finish: string = "";
    let total: number = addends.reduce(
        (currentTotal: number, sum: number, index: number): number => {
            currentTotal += sum;
            if (index !== 0) {
                finish += "+" + sum;
            } else {
                finish += sum;
            }
            return currentTotal;
        },
        0,
    );
    finish = total + "=" + finish;
    if (addends.length < 1) {
        finish += "0";
    }
    return finish;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let new_values: number[] = [...values];

    new_values.reduce(
        (currentSum: number, value: number, currentIndex: number): number => {
            if (value >= 0 && currentIndex !== new_values.length - 1) {
                currentSum += value;
            } else {
                if (value >= 0) {
                    currentSum += value;
                }
                if (currentSum >= 0) {
                    new_values.splice(currentIndex + 1, 0, currentSum);
                    currentSum = -1;
                }
            }
            return currentSum;
        },
        0,
    );
    if (!new_values.length) {
        new_values = [0];
    }
    return new_values;
}
