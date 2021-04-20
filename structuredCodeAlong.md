package Programming;

import java.util.List;

public class FP01Structured {

    public static void main(String[] args) {
        List<Integer> numbers = List.of(12, 9, 13, 4, 6, 2, 4, 12, 15);

        //printAllNumbersInListFunctional(numbers);
        printEvenNumbersInListFunctional(numbers);

    }

    private static void printAllNumbersInListFunctional(List<Integer> numbers) {

        for (Number number : numbers) {
            System.out.println(number);

        }
    }

    private static void printEvenNumbersInListFunctional(List<Integer> numbers) {

        for (Integer number : numbers) {
            if (number % 2 == 0) {
                System.out.println(number);

            }
        }

    }
}
