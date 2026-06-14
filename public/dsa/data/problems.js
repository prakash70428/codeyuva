window.problemsData = {
    // -------------------------------------------------------------
    // CHAPTER 1.1: Getting Started
    // -------------------------------------------------------------

    "1_1_1": {
        explanation: `In this problem, you are required to print a simple message "Hello, World!" to the standard output. This is usually the first program you write in any language to verify that your environment is set up correctly.`,
        explanationList: [
            "Understand the main method which serves as the entry point of the program.",
            "Learn how to use standard output streams (e.g., System.out.println).",
            "Familiarize yourself with basic syntax like semicolons and curly braces."
        ],
        io: [
            { input: "No Input", output: `"Hello World"` }
        ],
        constraints: ["Output must exactly match the required string casing."],
        java: `class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello World" << endl;\n    return 0;\n}`,
        python: `print("Hello World")`,
        js: `console.log("Hello World");`,
        screenshots: [
            "assets/ss_1_1_1_1.png"
        ],
        homework: "✏️ 1. Modify the program to print your own name instead of 'Hello World' on a new line.\n✏️ 2. Try to print multiple lines of text using a single print statement.",
        youtubeId: "UmnCZ7-9yJU",
        funFact: "The 'Hello World' program was created in 1978 in the famous book 'The C Programming Language' by Brian Kernighan and Dennis Ritchie. 🌍"
    },

    "1_1_2": {
        explanation: "In this problem, you need to calculate and print the sum of two integer variables. It introduces the concept of storing values in memory and applying basic arithmetic operations.",
        explanationList: [
            "Declare variables with appropriate data types (e.g., int).",
            "Use the addition arithmetic operator (+) to calculate the sum.",
            "Print the result concatenated with a readable message."
        ],
        io: [
            { input: "a = 10, b = 20", output: "30", explanation: "10 + 20 gives 30." }
        ],
        constraints: [
            "-10^4 <= a, b <= 10^4",
            "Result should fit within standard integer limits."
        ],
        java: `class Solution {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        int sum = a + b;\n        System.out.println("The sum is: " + sum);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    cout << "The sum is: " << (a + b) << endl;\n    return 0;\n}`,
        python: `a = 10\nb = 20\nprint(f"The sum is: {a + b}")`,
        js: `let a = 10;\nlet b = 20;\nconsole.log("The sum is: " + (a + b));`,
        screenshots: [
            "assets/ss_1_1_2_1.png"
        ],
        homework: "✏️ 1. Write a program that takes three numbers, multiplies them completely, and prints the final product.\n✏️ 2. Find the difference between a and b.",
        youtubeId: "VbMJWQgeGus",
        funFact: "At the hardware level, computers use binary logic gates (like XOR and AND gates inside an ALU) to compute the sum of two numbers incredibly fast! ⚡"
    },

    "1_1_3": {
        explanation: "You are given a person's age as an integer. Your task is to check whether the person is eligible to vote. A person is considered eligible if their age is 18 or greater.",
        explanationList: [
            "Learn how to use Conditional Statements (if-else).",
            "Understand relational operators like >= (greater than or equal to).",
            "Construct logic based on boolean values (true/false) to branch code execution."
        ],
        io: [
            { input: "age = 20", output: "Eligible to Vote", explanation: "20 is greater than or equal to 18." },
            { input: "age = 16", output: "Not Eligible", explanation: "16 is strictly less than 18." }
        ],
        constraints: ["0 <= age <= 120"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int age = 20;\n        if (age >= 18) {\n            System.out.println("Eligible to Vote");\n        } else {\n            System.out.println("Not Eligible");\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 20;\n    if (age >= 18) {\n        cout << "Eligible to Vote" << endl;\n    } else {\n        cout << "Not Eligible" << endl;\n    }\n    return 0;\n}`,
        python: `age = 20\nif age >= 18:\n    print("Eligible to Vote")\nelse:\n    print("Not Eligible")`,
        js: `let age = 20;\nif (age >= 18) {\n    console.log("Eligible to Vote");\n} else {\n    console.log("Not Eligible");\n}`,
        screenshots: [
            "assets/ss_1_1_3_1.png"
        ],
        homework: "✏️ 1. Use the modulo operator (%) to check whether a given number is Even or Odd.\n✏️ 2. Write a program to check if a person is a senior citizen (Age >= 60).",
        youtubeId: "vBmwzED01p4",
        funFact: "Did you know? The youngest voting age in the world is 16, which is used in countries like Brazil, Austria, and Argentina! 🗳️"
    },

    "1_1_4": {
        explanation: "You are given three distinct integer numbers. Your task is to find and print the largest number among them. This introduces compound conditional logic.",
        explanationList: [
            "Use Logical AND (&&) to combine multiple relational checks.",
            "Compare the first number against BOTH the second and third numbers simultaneously.",
            "Repeat using else-if for the second number, falling back to the third number in the else block."
        ],
        io: [
            { input: "a = 15, b = 42, c = 7", output: "42", explanation: "42 is strictly greater than both 15 and 7." },
            { input: "a = -5, b = -10, c = -2", output: "-2", explanation: "-2 is the largest negative number." }
        ],
        constraints: ["-10^9 <= a, b, c <= 10^9", "Assume all three numbers can be distinct or equal."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int a = 15, b = 42, c = 7;\n        if (a >= b && a >= c) {\n            System.out.println(a);\n        } else if (b >= a && b >= c) {\n            System.out.println(b);\n        } else {\n            System.out.println(c);\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 15, b = 42, c = 7;\n    if (a >= b && a >= c) cout << a << endl;\n    else if (b >= a && b >= c) cout << b << endl;\n    else cout << c << endl;\n    return 0;\n}`,
        python: `a, b, c = 15, 42, 7\nif a >= b and a >= c:\n    print(a)\nelif b >= a and b >= c:\n    print(b)\nelse:\n    print(c)`,
        js: `let a = 15, b = 42, c = 7;\nif (a >= b && a >= c) console.log(a);\nelse if (b >= a && b >= c) console.log(b);\nelse console.log(c);`,
        screenshots: ["assets/ss_1_1_4_1.png"],
        homework: "✏️ 1. Write a program to find the SMALLEST of three numbers.\n✏️ 2. Write a program to find the middle number (the median) out of 3 distinct numbers.",
        youtubeId: "dummyVideoId4",
        funFact: "Real World: Database search engines use highly optimized tree structures (like B-Trees) heavily reliant on comparators like these to route gigantic datasets efficiently! 🌲"
    },

    "1_1_5": {
        explanation: "You are given the marks of a student. Your task is to determine the grade of the student based on specific ranges. For example, if marks > 90, grade is 'A', etc.",
        explanationList: [
            "Use else-if ladders to check multiple conditions sequentially.",
            "Understand the flow of execution: once a true condition is found, the rest are skipped.",
            "Always include a fallback 'else' block for edge cases."
        ],
        io: [
            { input: "marks = 85", output: `"Grade B"`, explanation: "85 falls in the 80 to 90 bracket." },
            { input: "marks = 40", output: `"Fail"`, explanation: "Marks less than 50 are usually failing." }
        ],
        constraints: ["0 <= marks <= 100"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int marks = 85;\n        if (marks > 90) {\n            System.out.println("Grade A");\n        } else if (marks > 80) {\n            System.out.println("Grade B");\n        } else if (marks > 70) {\n            System.out.println("Grade C");\n        } else {\n            System.out.println("Fail");\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int marks = 85;\n    if (marks > 90) cout << "Grade A" << endl;\n    else if (marks > 80) cout << "Grade B" << endl;\n    else if (marks > 70) cout << "Grade C" << endl;\n    else cout << "Fail" << endl;\n    return 0;\n}`,
        python: `marks = 85\nif marks > 90:\n    print("Grade A")\nelif marks > 80:\n    print("Grade B")\nelif marks > 70:\n    print("Grade C")\nelse:\n    print("Fail")`,
        js: `let marks = 85;\nif (marks > 90) console.log("Grade A");\nelse if (marks > 80) console.log("Grade B");\nelse if (marks > 70) console.log("Grade C");\nelse console.log("Fail");`,
        screenshots: ["assets/ss_1_1_5_1.png"],
        homework: "✏️ 1. Ask for 5 subject marks, calculate average, and then assign a grade.\n✏️ 2. Try doing this using a switch-case statement by doing integer division (marks/10).",
        youtubeId: "dummyVideoId5",
        funFact: "Real World: Schools and universities use automated batch processing systems built on these exact if-else logic trees to generate millions of report cards simultaneously! 🏫"
    },

    "1_1_6": {
        explanation: "Given an integer N, count the number of digits present in N. For example, 1234 has 4 digits. It forms the basis of number extraction.",
        explanationList: [
            "Use a while loop that continues as long as N > 0.",
            "Divide N by 10 (N = N / 10) in each iteration to strip off the last digit.",
            "Maintain a counter to track how many times the loop runs."
        ],
        io: [
            { input: "N = 12345", output: "5", explanation: "There are 5 digits in 12345." },
            { input: "N = 7", output: "1", explanation: "Only a single digit is present." }
        ],
        constraints: ["0 <= N <= 10^9", "Time Complexity should be O(log10(N))"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 12345;\n        int count = 0;\n        while (n != 0) {\n            n /= 10;\n            count++;\n        }\n        System.out.println(count);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 12345, count = 0;\n    while (n != 0) {\n        n /= 10;\n        count++;\n    }\n    cout << count << endl;\n    return 0;\n}`,
        python: `n = 12345\ncount = 0\nwhile n != 0:\n    n //= 10\n    count += 1\nprint(count)`,
        js: `let n = 12345;\nlet count = 0;\nwhile (n !== 0) {\n    n = Math.floor(n / 10);\n    count++;\n}\nconsole.log(count);`,
        screenshots: ["assets/ss_1_1_6_1.png"],
        homework: "✏️ 1. Try finding number of digits using Math.log10(N) approach in O(1) time.\n✏️ 2. Write a program to count how many ZEROES exist in a number.",
        youtubeId: "dummyVideoId6",
        funFact: "Real World: Credit Card companies use exact length digit counts (e.g. 16 for Visa) to validate card authenticity before even hitting the payment gateway network! 💳"
    },

    "1_1_7": {
        explanation: "Given an integer N, print all its digits individually from left to right (front to back) on new lines.",
        explanationList: [
            "First, calculate the divisor needed to extract the leftmost digit (e.g. 10^(count-1)).",
            "Use N / div to get the first digit, print it.",
            "Use N % div to remove that digit from N.",
            "Reduce the divisor by dividing it by 10, repeat until divisor becomes 0."
        ],
        io: [
            { input: "N = 657843", output: "6\n5\n7\n8\n4\n3" }
        ],
        constraints: ["1 <= N <= 10^9", "Important: Avoid converting the number to a string first!"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 657843;\n        int div = 1;\n        int temp = n;\n        while (temp >= 10) {\n            div *= 10;\n            temp /= 10;\n        }\n        while (div > 0) {\n            int q = n / div;\n            System.out.println(q);\n            n %= div;\n            div /= 10;\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 657843;\n    int div = 1, temp = n;\n    while (temp >= 10) {\n        div *= 10;\n        temp /= 10;\n    }\n    while (div > 0) {\n        cout << (n / div) << endl;\n        n %= div;\n        div /= 10;\n    }\n    return 0;\n}`,
        python: `n = 657843\ndiv = 1\ntemp = n\nwhile temp >= 10:\n    div *= 10\n    temp //= 10\nwhile div > 0:\n    print(n // div)\n    n %= div\n    div //= 10`,
        js: `let n = 657843;\nlet div = 1;\nlet temp = n;\nwhile(temp >= 10){\n    div *= 10;\n    temp = Math.floor(temp / 10);\n}\nwhile(div > 0){\n    console.log(Math.floor(n / div));\n    n %= div;\n    div = Math.floor(div / 10);\n}`,
        screenshots: ["assets/ss_1_1_7_1.png"],
        homework: "✏️ 1. Print all digits purely in reverse (from right to left).\n✏️ 2. Write a program to sum up all the digits individually.",
        youtubeId: "dummyVideoId7",
        funFact: "Real World: Barcode scanners work conceptually identical to this! They read patterns sequentially front-to-back to extract the underlying product code digit by digit! 🛒"
    },

    "1_1_8": {
        explanation: "Rotate a number N by K positions to the right. If K is negative, rotate to the left. A rotation means digits falling off one end get attached to the other end.",
        explanationList: [
            "Find the number of digits in N (let's say len).",
            "Handle edge cases for K by doing K = K % len (and if K < 0, add len).",
            "Split the number into two parts: a multiplier and a divisor using Math pow(10, K).",
            "Compute new number: (rem * multiplier) + quotient."
        ],
        io: [
            { input: "N = 562984, K = 2", output: "845629", explanation: "'84' goes strictly from the end to the front." },
            { input: "N = 562984, K = -1", output: "629845", explanation: "'5' goes from front to end (left rotation)." }
        ],
        constraints: ["0 <= N <= 10^9", "-10^9 <= K <= 10^9"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 562984, k = 2;\n        int temp = n, len = 0;\n        while(temp > 0){ temp/=10; len++; }\n        k = k % len;\n        if(k < 0) k += len;\n        int div = (int)Math.pow(10, k);\n        int mult = (int)Math.pow(10, len - k);\n        int rem = n % div;\n        int q = n / div;\n        int ans = (rem * mult) + q;\n        System.out.println(ans);\n    }\n}`,
        cpp: `#include <iostream>\n#include<cmath>\nusing namespace std;\n\nint main() {\n    int n = 562984, k = 2;\n    int temp = n, len = 0;\n    while(temp > 0){ temp/=10; len++; }\n    k = k % len;\n    if(k < 0) k += len;\n    int div = pow(10, k);\n    int mult = pow(10, len - k);\n    int ans = (n % div) * mult + (n / div);\n    cout << ans << endl;\n    return 0;\n}`,
        python: `n = 562984\nk = 2\ntemp, length = n, 0\nwhile temp > 0:\n    temp //= 10\n    length += 1\nk = k % length\nif k < 0:\n    k += length\ndiv = 10**k\nmult = 10**(length - k)\nans = (n % div) * mult + (n // div)\nprint(ans)`,
        js: `let n = 562984, k = 2;\nlet temp = n, len = 0;\nwhile(temp > 0){ temp = Math.floor(temp/10); len++; }\nk = k % len;\nif(k < 0) k += len;\nlet div = Math.pow(10, k);\nlet mult = Math.pow(10, len - k);\nlet ans = (n % div) * mult + Math.floor(n / div);\nconsole.log(ans);`,
        screenshots: ["assets/ss_1_1_8_1.png"],
        homework: "✏️ 1. Try rotating a given Array by K positions instead of a Number.\n✏️ 2. Form the inverse of a number based on positions.",
        youtubeId: "dummyVideoId8",
        funFact: "Real World: Cryptography uses extensive bit and byte rotation natively inside hardware (like SHA-256) to completely obscure network requests and passwords securely! 🔐"
    },

    "1_1_9": {
        explanation: "Calculate the Greatest Common Divisor (GCD) and Least Common Multiple (LCM) of two numbers. Use the Euclidean division algorithm for perfect O(log(min(a,b))) complexity.",
        explanationList: [
            "While one number % other is not zero, keep updating dividend with divisor and divisor with remainder.",
            "When remainder hits 0, the last divisor is the GCD.",
            "Calculate LCM extremely fast using mathematical relation: LCM = (n1 * n2) / GCD."
        ],
        io: [
            { input: "a = 36, b = 24", output: "GCD = 12\nthe LCM is = 72" }
        ],
        constraints: ["1 <= a, b <= 10^9"],
        java: `class Solution {\n    public static void main(String[] args) {\n        long n1 = 36, n2 = 24;\n        long o1 = n1, o2 = n2;\n        while(n1 % n2 != 0){\n            long rem = n1 % n2;\n            n1 = n2;\n            n2 = rem;\n        }\n        long gcd = n2;\n        long lcm = (o1 * o2) / gcd;\n        System.out.println("GCD = " + gcd + "\\nLCM = " + lcm);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    long n1 = 36, n2 = 24;\n    long o1 = n1, o2 = n2;\n    while(n1 % n2 != 0){\n        long rem = n1 % n2;\n        n1 = n2;\n        n2 = rem;\n    }\n    long lcm = (o1 * o2) / n2;\n    cout << "GCD = " << n2 << "\\nLCM = " << lcm << endl;\n    return 0;\n}`,
        python: `n1, n2 = 36, 24\no1, o2 = n1, n2\nwhile n1 % n2 != 0:\n    n1, n2 = n2, n1 % n2\ngcd = n2\nlcm = (o1 * o2) // gcd\nprint(f"GCD = {gcd}\\nLCM = {lcm}")`,
        js: `let n1 = 36, n2 = 24;\nlet o1 = n1, o2 = n2;\nwhile(n1 % n2 !== 0){\n    let rem = n1 % n2;\n    n1 = n2;\n    n2 = rem;\n}\nlet gcd = n2;\nlet lcm = (o1 * o2) / gcd;\nconsole.log("GCD = " + gcd + "\\nLCM = " + lcm);`,
        screenshots: ["assets/ss_1_1_9_1.png"],
        homework: "✏️ 1. Write an algorithm to find the GCD of 3 integers simultaneously.\n✏️ 2. Write a program to check if two integers are co-primes (LCM is multiplied version).",
        youtubeId: "dummyVideoId9",
        funFact: "Real World: The Euclidean algorithm is one of the oldest algorithms in recorded history (300 BC). It forms the foundational bedrock of RSA public-key encryption protecting your internet traffic today! 📡"
    },

    "1_1_10": {
        explanation: "Check if a given integer is a Palindrome perfectly without converting it to a string. A palindrome number reads the same forwards and backwards.",
        explanationList: [
            "Store a copy of the original number.",
            "Iterate a while loop to extract the last digit (n % 10).",
            "Build a reversed number: reversed = (reversed * 10) + digit.",
            "At the end, check if reversed == original_copy."
        ],
        io: [
            { input: "N = 121", output: "true" },
            { input: "N = -121", output: "false", explanation: "-121 reversed is 121-, so not palindrome." }
        ],
        constraints: ["-2^31 <= N <= 2^31 - 1"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 121;\n        if(n < 0) { System.out.println("false"); return; }\n        int temp = n;\n        int reversed = 0;\n        while(temp != 0){\n            int digit = temp % 10;\n            reversed = reversed * 10 + digit;\n            temp /= 10;\n        }\n        System.out.println(n == reversed);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 121;\n    if(n < 0) { cout << "false"; return 0; }\n    int temp = n, reversed = 0;\n    while(temp != 0){\n        int digit = temp % 10;\n        reversed = reversed * 10 + digit;\n        temp /= 10;\n    }\n    cout << (n == reversed ? "true" : "false") << endl;\n    return 0;\n}`,
        python: `n = 121\nif n < 0:\n    print("false")\nelse:\n    temp, reversed_num = n, 0\n    while temp != 0:\n        digit = temp % 10\n        reversed_num = reversed_num * 10 + digit\n        temp //= 10\n    print("true" if n == reversed_num else "false")`,
        js: `let n = 121;\nif(n < 0) { console.log(false); } else {\n    let temp = n, reversed = 0;\n    while(temp > 0){\n        reversed = reversed * 10 + (temp % 10);\n        temp = Math.floor(temp / 10);\n    }\n    console.log(n === reversed);\n}`,
        screenshots: ["assets/ss_1_1_10_1.png"],
        homework: "✏️ 1. Write an algorithm to reverse a 32-bit Integer and handle potential integer overflows carefully.\n✏️ 2. Write an algorithm to check if a String is a perfect Palindrome.",
        youtubeId: "dummyVideoId10",
        funFact: "Real World: Many biological DNA sequences contain palindromic base-pair structures that act as critical markers for restriction mapping enzymes to cut DNA! 🧬"
    },

    "1_1_11": {
        explanation: "Check whether a given N is an Armstrong Number. An Armstrong number of 3 digits is a number where the sum of cubes of its digits is equal to the number itself.",
        explanationList: [
            "Store a copy of the original number so you can compare the sum later.",
            "Extract every single digit one by one.",
            "Multiply the digit by itself three times (cube) and add to sum.",
            "Compare sum against original_copy."
        ],
        io: [
            { input: "N = 153", output: "true", explanation: "1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153." },
            { input: "N = 123", output: "false", explanation: "1^3 + 2^3 + 3^3 = 36 != 123." }
        ],
        constraints: ["0 <= N <= 10^9", "If number length is K, do Math.pow(digit, K) for the generalized version."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 153;\n        int sum = 0, temp = n;\n        while(temp > 0){\n            int digit = temp % 10;\n            sum += (digit * digit * digit);\n            temp /= 10;\n        }\n        if(sum == n) System.out.println("true");\n        else System.out.println("false");\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 153;\n    int sum = 0, temp = n;\n    while(temp > 0){\n        int digit = temp % 10;\n        sum += (digit * digit * digit);\n        temp /= 10;\n    }\n    if(sum == n) cout << "true";\n    else cout << "false";\n    return 0;\n}`,
        python: `n = 153\nsum_val = 0\ntemp = n\nwhile temp > 0:\n    digit = temp % 10\n    sum_val += (digit ** 3)\n    temp //= 10\nprint("true" if sum_val == n else "false")`,
        js: `let n = 153;\nlet sum = 0, temp = n;\nwhile(temp > 0){\n    let digit = temp % 10;\n    sum += (digit * digit * digit);\n    temp = Math.floor(temp / 10);\n}\nconsole.log(sum === n);`,
        screenshots: ["assets/ss_1_1_11_1.png"],
        homework: "✏️ 1. Expand the code to dynamically check powers of the length of the string instead of just exactly cubing. (Narcissistic Number).\n✏️ 2. Write a code to print all Armstrong numbers between 1 and 500.",
        youtubeId: "dummyVideoId11",
        funFact: "Real World: Armstrong numbers (also called Narcissistic numbers) don't have massive direct engineering usage, but they form fantastic computational benchmarking tests for raw CPU algorithmic testing! 💻"
    },

    // -------------------------------------------------------------
    // CHAPTER 1.2: Patterns
    // -------------------------------------------------------------

    "1_2_1": {
        explanation: "In this pattern, you need to print a right-angled triangle. The number of '*'s in each row is exactly equal to the row number.",
        explanationList: [
            "Use an outer loop to track the number of rows.",
            "Use an inner loop to print '*' across each column on the current row.",
            "Print a newline after each inner loop finishes."
        ],
        io: [
            { input: "N = 5", output: "*\n* *\n* * *\n* * * *\n* * * * *", explanation: "Row 1 has 1 '*', Row 5 has 5 '*'s." }
        ],
        constraints: ["1 <= N <= 100"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        for(int i = 1; i <= n; i++) {\n            for(int j = 1; j <= i; j++) {\n                System.out.print("* ");\n            }\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 5;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= i; j++) {\n            cout << "* ";\n        }\n        cout << endl;\n    }\n    return 0;\n}`,
        python: `n = 5\nfor i in range(1, n + 1):\n    print("* " * i)`,
        js: `let n = 5;\nfor(let i = 1; i <= n; i++) {\n    let row = "";\n    for(let j = 1; j <= i; j++) row += "* ";\n    console.log(row.trim());\n}`,
        screenshots: [],
        homework: "✏️ 1. Try to print the triangle upside down (decreasing '*'s).\n✏️ 2. Change '*' to print numbers (1, 1 2, 1 2 3) instead.",
        youtubeId: "dummyId121",
        funFact: "Nested loops can be visualized as an area of a triangle, which is why the time complexity naturally becomes O(N^2)! 📐"
    },

    "1_2_2": {
        explanation: "This pattern prints a perfectly balanced pyramid. For each row `i`, you must print spaces to push the '*'s towards the center, then print the '*'s separated by spaces.",
        explanationList: [
            "First inner loop prints `n - i` spaces.",
            "Second inner loop prints `i` times '* '.",
            "Combine them inside the outer loop and print a newline."
        ],
        io: [
            { input: "N = 5", output: "    *\n   * *\n  * * *\n * * * *\n* * * * *", explanation: "The 1st row has 4 spaces and 1 '*', making it centered." }
        ],
        constraints: ["1 <= N <= 100"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            for (int space = 1; space <= n - i; space++) {\n                System.out.print(" ");\n            }\n            for (int j = 1; j <= i; j++) {\n                System.out.print("* ");\n            }\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 5;\n    for(int i = 1; i <= n; i++) {\n        for(int space = 1; space <= n - i; space++) {\n            cout << " ";\n        }\n        for(int j = 1; j <= i; j++) {\n            cout << "* ";\n        }\n        cout << endl;\n    }\n    return 0;\n}`,
        python: `n = 5\nfor i in range(1, n + 1):\n    spaces = " " * (n - i)\n    stars = "* " * i\n    print(spaces + stars.rstrip())\n`,
        js: `let n = 5;\nfor(let i = 1; i <= n; i++) {\n    let row = " ".repeat(n - i);\n    let stars = "* ".repeat(i);\n    console.log(row + stars.trimRight());\n}`,
        screenshots: [],
        homework: "✏️ 1. Print an inverted pyramid.\n✏️ 2. Form a complete diamond by combining the pyramid and inverted pyramid. 💎",
        youtubeId: "dummyId122",
        funFact: "Pyramid printing is a popular interview question to test a candidate's comfort level with basic algebra and grid logic! 🧱"
    },

    "1_2_3": {
        explanation: "This pattern prints two mirrored right-angled triangles that eventually merge at the base. You need to manage stars, then spaces, then stars again.",
        explanationList: [
            "Use variables `st` (stars) and `sp` (spaces). Initially `st = 1`, `sp = 2 * n - 3`.",
            "In each row, print `st` stars, then `sp` spaces, then `st` stars.",
            "Important: On the last row (when `i == n`), avoid printing the overlapping center star twice!"
        ],
        io: [
            { input: "N = 5", output: "*       *\n**     **\n***   ***\n**** ****\n*********" }
        ],
        constraints: ["1 <= N <= 100"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        int st = 1;\n        int sp = 2 * n - 3;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= st; j++) { System.out.print("*"); }\n            for (int j = 1; j <= sp; j++) { System.out.print(" "); }\n            int stars2 = (i == n) ? st - 1 : st;\n            for (int j = 1; j <= stars2; j++) { System.out.print("*"); }\n            System.out.println();\n            st++;\n            sp -= 2;\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 5;\n    int st = 1, sp = 2 * n - 3;\n    for(int i = 1; i <= n; i++) {\n        for(int j = 1; j <= st; j++) cout << "*";\n        for(int j = 1; j <= sp; j++) cout << " ";\n        int stars2 = (i == n) ? st - 1 : st;\n        for(int j = 1; j <= stars2; j++) cout << "*";\n        cout << endl;\n        st++;\n        sp -= 2;\n    }\n    return 0;\n}`,
        python: `n = 5\nst, sp = 1, 2 * n - 3\nfor i in range(1, n + 1):\n    left_stars = "*" * st\n    spaces = " " * sp if sp > 0 else ""\n    right_stars = "*" * (st - 1 if i == n else st)\n    print(left_stars + spaces + right_stars)\n    st += 1\n    sp -= 2\n`,
        js: `let n = 5;\nlet st = 1, sp = 2 * n - 3;\nfor(let i = 1; i <= n; i++) {\n    let row = "";\n    for(let j=1; j<=st; j++) row += "*";\n    for(let j=1; j<=sp; j++) row += " ";\n    let stars2 = (i === n) ? st - 1 : st;\n    for(let j=1; j<=stars2; j++) row += "*";\n    console.log(row);\n    st++;\n    sp -= 2;\n}`,
        screenshots: [],
        homework: "✏️ 1. Print the W pattern instead of the V shape.\n✏️ 2. Write the code so we use `\\t` instead of spaces, to see how grid alignment changes.",
        youtubeId: "dummyId123",
        funFact: "Merging shapes mathematically requires handling the intersection point. That `i == n` conditional check is the magic trick here! 🪄"
    },

    "1_2_4": {
        explanation: "This pattern is a variation of the pyramid, but the items printed alternate between '*' and '!'. It uses the odd/even indices inside the inner loop.",
        explanationList: [
            "The number of elements to print in row `i` is `2 * i - 1`.",
            "First print `n - i` dual spaces (`  `) for alignment.",
            "Use modulo arithmetic (`j % 2 != 0`) to print '* ' for odd positions, and '! ' for even positions."
        ],
        io: [
            { input: "N = 5", output: "        * \n      * ! * \n    * ! * ! * \n  * ! * ! * ! * \n* ! * ! * ! * ! *", explanation: "Alternation happens inside every row." }
        ],
        constraints: ["1 <= N <= 100"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            for (int k = 1; k <= n - i; k++) {\n                System.out.print("  ");\n            }\n            for (int j = 1; j <= 2 * i - 1; j++) {\n                if (j % 2 != 0) {\n                    System.out.print("* ");\n                } else {\n                    System.out.print("! ");\n                }\n            }\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 5;\n    for(int i = 1; i <= n; i++) {\n        for(int k = 1; k <= n - i; k++) cout << "  ";\n        for(int j = 1; j <= 2 * i - 1; j++) {\n            if(j % 2 != 0) cout << "* ";\n            else cout << "! ";\n        }\n        cout << endl;\n    }\n    return 0;\n}`,
        python: `n = 5\nfor i in range(1, n + 1):\n    spaces = "  " * (n - i)\n    chars = []\n    for j in range(1, 2 * i):\n        chars.append("*" if j % 2 != 0 else "!")\n    print(spaces + " ".join(chars))\n`,
        js: `let n = 5;\nfor(let i = 1; i <= n; i++) {\n    let row = "  ".repeat(n - i);\n    for(let j = 1; j <= 2 * i - 1; j++) {\n        if(j % 2 !== 0) row += "* ";\n        else row += "! ";\n    }\n    console.log(row.trimRight());\n}`,
        screenshots: [],
        homework: "✏️ 1. Write the logic using a boolean toggle variable instead of modulo `% 2`.\n✏️ 2. Substitute `!` with the row number instead.",
        youtubeId: "dummyId124",
        funFact: "Boolean toggles inside loops are heavily used in low level UI rendering, such as alternating colors in a data table (Zebra Striping)! 🦓"
    },

};
