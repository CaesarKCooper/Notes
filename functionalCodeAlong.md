package Programming;

import java.util.List;

public class FP01Functional {

    public static void main(String[] args) {


        List<Integer> numbers = List.of(12, 9, 13, 4, 6, 2, 4, 12, 15);

        //printAllNumbersInListFunctional(numbers);
        //printEvenNumbersInListFunctional(numbers);
        //printOddNumbersInListFunctional(numbers);
        //printSquaresOfEvenNumbersInListFunctional(numbers);
        //printCubesOfOddNumbers(numbers);

        List<String> courses = List.of("Spring", "Spring Boot", "API", "Microservices", "AWS", "PCF", "Azure", "Docker", "Kubernetes");

        //printCoursesContainingSpring(courses);
        //printCoursesWithFourLetters(courses);
        printNumberOfCharacters(courses);


    }

/*
    private static void print(int number) {
        System.out.println(number);
    }
*/

/*
    private static boolean isEven(int number) {

        return number % 2 == 0;

    }
*/

    private static void printAllNumbersInListFunctional(List<Integer> numbers) {
        //[12, 9, 13, 4, 6, 2, 4, 12, 15]

        numbers.stream()
                .forEach(System.out::println); //Method Reference

    }

    //number -> number % 2 == 0
    private static void printEvenNumbersInListFunctional(List<Integer> numbers) {
        //[12, 9, 13, 4, 6, 2, 4, 12, 15]

        numbers.stream()
                //.filter(FP01Functional::isEven) //Filter - Only Allow Even Numbers
                .filter(number -> number % 2 == 0) //Lamdba Expression
                .forEach(System.out::println); //Method Reference


    }

    private static void printOddNumbersInListFunctional(List<Integer> numbers) {

        numbers.stream()
                .filter(number -> number % 2 > 0)
                .forEach(System.out::println);


    }

    private static void printCoursesContainingSpring(List<String> courses) {

        courses.stream()
                .filter(course -> course.contains("Spring"))
                .forEach(System.out::println);

    }

    private static void printCoursesWithFourLetters(List<String> courses) {

        courses.stream()
                .filter(course -> course.length() > 4)
                .forEach(System.out::println);

    }

    private static void printSquaresOfEvenNumbersInListFunctional(List<Integer> numbers) {

        numbers.stream()
                .filter(number -> number % 2 > 0)
                //mapping - x -> x * x
                .map(number -> number * number)
                .forEach(System.out::println);


    }

    private static void printCubesOfOddNumbers(List<Integer> numbers) {

        numbers.stream()
                .filter(number -> number % 2 != 0)
                .map(number -> number * number * number)
                .forEach(System.out::println);

    }

    private static void printNumberOfCharacters(List<String> courses) {

        courses.stream()
                .map(course -> course.length())
                .forEach(System.out::println);

/*
        for (String course : courses) {
            System.out.println(course.length());
        }
*/

    }

}

