/**
 * Created by bbogdanov on 7/9/17.
 */
const array = [5, 100, 3, 6, 5, 4, 7, 10, 30, 50, 86, 234236, 10, 50, 2234, 1234, 104, 23425325232];

export class Sorting {

    public static Insertion(array: number[]) {
        let sorted: number[] = [];
        array.forEach((number) => {
            sorted.push(number);
            sorted = Sorting.sorting(sorted);
        })

        return sorted;
    }

    private static sorting(array) {
        for (let i = 0; i < array.length; ++i) {
            let prevoius = array[i];
            let next = array[i + 1];
            if (prevoius > next) {
                // Moving next number to become previous.
                array[i] = next;
                // Moving previous number to become next.
                array[i + 1] = prevoius;

                // Recursion after changing the position for checking
                // if after changing the position of the two numbers,
                // now the number before previous is not larger than it.
                array = Sorting.sorting(array);
            }
        }

        return array;
    }
}

console.log(Sorting.Insertion(array));

