window.problemsData = {
    // -------------------------------------------------------------
    // CHAPTER 1.1: Getting Started
    // -------------------------------------------------------------

    "1_1_1": {
        explanation: `Remember the first day of school when the teacher said "Introduce yourself"? This is exactly that — but for your computer. Hello World is your program saying "I'm alive!" to the world. Every programmer on this planet started here. From the person who built WhatsApp to the engineers at NASA — their first program was this. Welcome to the brotherhood. 🚀`,
        explanationList: [
            "main() is the entry point — Java starts reading your code from here, just like you open a book from page 1.",
            "System.out.println() is Java's way of speaking — 'out' means output, 'println' means print then go to new line.",
            "Every statement ends with a semicolon (;) — think of it as a full stop at the end of a sentence."
        ],
        io: [
            { input: "No Input required", output: "Hello World" }
        ],
        constraints: ["Output must exactly match — capital H, capital W, no extra spaces."],
        java: `class Solution {\n    public static void main(String[] args) {\n        // Your first ever Java statement\n        System.out.println("Hello World");\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // cout is C++'s way of printing\n    cout << "Hello World" << endl;\n    return 0;\n}`,
        python: `# Python is the most beginner-friendly — no class, no main needed!\nprint("Hello World")`,
        js: `// JS runs in browser console too — try it right now!\nconsole.log("Hello World");`,
        screenshots: [],
        homework: "✏️ 1. Change the program to print YOUR name — make it personal!\n✏️ 2. Print your name, college name, and city on 3 separate lines using 3 println statements.\n✏️ 3. Try using System.out.print() instead of println — what's the difference?",
        youtubeId: "UmnCZ7-9yJU",
        funFact: "🌍 The very first 'Hello World' was written in 1974 by Brian Kernighan. Since then, it's been estimated that over 2 billion Hello World programs have been written worldwide — you just joined that legacy."
    },

    "1_1_2": {
        explanation: `Imagine your friend says "I scored 45 in Maths and 52 in Science, what's my total?" — you add them. This is exactly what your program does. Variables are like little boxes in memory — you label them (a, b), put numbers inside, and then tell the computer to add. Simple as that. This is where programming starts feeling like real logic. 🧠`,
        explanationList: [
            "int a = 10 means: create a box named 'a', store the number 10 inside it.",
            "int sum = a + b means: open both boxes, add the values, put the result in a new box called 'sum'.",
            "System.out.println() then reads from the 'sum' box and displays it on screen."
        ],
        io: [
            { input: "a = 10, b = 20", output: "The sum is: 30", explanation: "10 + 20 = 30 — simple arithmetic in code." }
        ],
        constraints: [
            "-10^9 <= a, b <= 10^9 — use long instead of int for very large numbers.",
            "int can store up to ~2.1 billion — beyond that, it overflows silently!"
        ],
        java: `class Solution {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        int sum = a + b;  // store result in a new variable\n        System.out.println("The sum is: " + sum);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    int sum = a + b;\n    cout << "The sum is: " << sum << endl;\n    return 0;\n}`,
        python: `a = 10\nb = 20\nsum = a + b\nprint(f"The sum is: {sum}")  # f-string makes formatting clean`,
        js: `let a = 10;\nlet b = 20;\nlet sum = a + b;\nconsole.log("The sum is: " + sum);`,
        screenshots: [],
        homework: "✏️ 1. Find the sum of your Maths, Science, English marks and print the total.\n✏️ 2. Subtract b from a, multiply a and b, and divide a by b — print all four operations.\n✏️ 3. What happens if you do 5 / 2 in Java? Is it 2 or 2.5? Try it and explain why.",
        youtubeId: "VbMJWQgeGus",
        funFact: "⚡ Inside your CPU, addition happens using logic gates called 'Full Adders' made of transistors — and modern chips do this over 4 billion times per second. Your 10+20 = 30 took less than 1 nanosecond."
    },

    "1_1_3": {
        explanation: `Remember the time you turned 18 and suddenly you could vote? The government has a simple rule: age >= 18 → eligible. Your job here is to make the computer apply that same rule. This is your first taste of decision-making in code — the if-else block. Real-world apps are full of these: 'Is the user logged in?', 'Is the payment successful?', 'Is the cart empty?' — all if-else at the core. 🗳️`,
        explanationList: [
            "if (condition) — the computer checks if this is true. If yes, it runs the code inside {}.",
            "else — if the condition is false, the computer jumps here instead.",
            "age >= 18 uses the >= operator which means 'greater than OR equal to 18'."
        ],
        io: [
            { input: "age = 20", output: "Eligible to Vote", explanation: "20 >= 18 is true → first block runs." },
            { input: "age = 16", output: "Not Eligible", explanation: "16 >= 18 is false → else block runs." }
        ],
        constraints: ["0 <= age <= 120 — no negative ages, no 150 year old voters!"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int age = 20;  // change this value to test\n        if (age >= 18) {\n            System.out.println("Eligible to Vote");\n        } else {\n            System.out.println("Not Eligible");\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age = 20;\n    if (age >= 18) {\n        cout << "Eligible to Vote" << endl;\n    } else {\n        cout << "Not Eligible" << endl;\n    }\n    return 0;\n}`,
        python: `age = 20\nif age >= 18:\n    print("Eligible to Vote")\nelse:\n    print("Not Eligible")`,
        js: `let age = 20;\nif (age >= 18) {\n    console.log("Eligible to Vote");\n} else {\n    console.log("Not Eligible");\n}`,
        screenshots: [],
        homework: "✏️ 1. Add a third condition: if age >= 60, print 'Senior Citizen & Eligible'.\n✏️ 2. Write a program to check if a number is even or odd using the % (modulo) operator.\n✏️ 3. Check if a year is a leap year (divisible by 4, but not 100, unless also divisible by 400).",
        youtubeId: "vBmwzED01p4",
        funFact: "🗳️ The voting age is 18 in most countries — but did you know Brazil, Austria and Scotland allow 16-year-olds to vote? The if-condition changes, but the logic is the same!"
    },

    "1_1_4": {
        explanation: `Imagine three students in a competition — Rahul scored 85, Priya scored 92, Arjun scored 78. Who wins? You compare each one: is Priya greater than Rahul AND greater than Arjun? Yes — Priya wins! This is exactly what your program does. The && (AND) operator lets you check two conditions at once — like checking 'taller than Rahul AND taller than Arjun' in one shot. 🏆`,
        explanationList: [
            "if (a >= b && a >= c) — check if a beats BOTH b and c simultaneously using && (AND).",
            "else if checks the second possibility when the first condition failed.",
            "The final else handles the last remaining case — no need to check, if a and b both lost, c must be the winner."
        ],
        io: [
            { input: "a = 15, b = 42, c = 7", output: "42", explanation: "42 > 15 and 42 > 7 — b wins." },
            { input: "a = -5, b = -10, c = -2", output: "-2", explanation: "Among negatives, -2 is the least negative — so it's the largest." }
        ],
        constraints: ["-10^9 <= a, b, c <= 10^9 — works for negative numbers too, don't forget!"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int a = 15, b = 42, c = 7;\n        if (a >= b && a >= c) {\n            System.out.println("Largest: " + a);\n        } else if (b >= a && b >= c) {\n            System.out.println("Largest: " + b);\n        } else {\n            System.out.println("Largest: " + c);\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 15, b = 42, c = 7;\n    if (a >= b && a >= c) cout << "Largest: " << a << endl;\n    else if (b >= a && b >= c) cout << "Largest: " << b << endl;\n    else cout << "Largest: " << c << endl;\n    return 0;\n}`,
        python: `a, b, c = 15, 42, 7\nif a >= b and a >= c:\n    print(f"Largest: {a}")\nelif b >= a and b >= c:\n    print(f"Largest: {b}")\nelse:\n    print(f"Largest: {c}")`,
        js: `let a = 15, b = 42, c = 7;\nif (a >= b && a >= c) console.log("Largest: " + a);\nelse if (b >= a && b >= c) console.log("Largest: " + b);\nelse console.log("Largest: " + c);`,
        screenshots: [],
        homework: "✏️ 1. Now flip it — find the SMALLEST of three numbers using the same logic.\n✏️ 2. Find the MIDDLE number (not largest, not smallest — the median).\n✏️ 3. Can you solve 'largest of three' using just Math.max()? Try both ways and compare.",
        youtubeId: "dummyVideoId4",
        funFact: "🌲 Comparison logic like this is the foundation of sorting algorithms. Every time Swiggy shows you restaurants sorted by rating, a comparison like a >= b is running millions of times in milliseconds."
    },

    "1_1_5": {
        explanation: `Remember exam results day — you're waiting anxiously to know if you got an A, B, C, or failed? Your school's system runs exactly this logic. The teacher's rule book says: above 90 → A, above 80 → B, above 70 → C, else → Fail. In code, we call this an else-if ladder — like climbing steps, the computer checks each condition one by one and stops the moment it finds the right one. 📊`,
        explanationList: [
            "The if-else ladder checks conditions top to bottom — once one is true, the rest are SKIPPED entirely.",
            "Order matters! If you put marks > 70 before marks > 90, someone with 95 would get Grade C — wrong!",
            "Always put the strictest (highest) condition first, looser conditions below."
        ],
        io: [
            { input: "marks = 92", output: "Grade A", explanation: "92 > 90 → first condition is true, rest are skipped." },
            { input: "marks = 85", output: "Grade B", explanation: "85 is NOT > 90, but IS > 80 → Grade B." },
            { input: "marks = 40", output: "Fail", explanation: "40 fails all conditions → lands in else." }
        ],
        constraints: ["0 <= marks <= 100 — marks can't be 110, validate your inputs!"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int marks = 85;\n        if (marks > 90) {\n            System.out.println("Grade A — Outstanding!");\n        } else if (marks > 80) {\n            System.out.println("Grade B — Great work!");\n        } else if (marks > 70) {\n            System.out.println("Grade C — You can do better!");\n        } else if (marks >= 50) {\n            System.out.println("Grade D — Just passed, study harder!");\n        } else {\n            System.out.println("Fail — Let's bounce back next time!");\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int marks = 85;\n    if (marks > 90) cout << "Grade A" << endl;\n    else if (marks > 80) cout << "Grade B" << endl;\n    else if (marks > 70) cout << "Grade C" << endl;\n    else if (marks >= 50) cout << "Grade D" << endl;\n    else cout << "Fail" << endl;\n    return 0;\n}`,
        python: `marks = 85\nif marks > 90:\n    print("Grade A — Outstanding!")\nelif marks > 80:\n    print("Grade B — Great work!")\nelif marks > 70:\n    print("Grade C — You can do better!")\nelif marks >= 50:\n    print("Grade D — Just passed!")\nelse:\n    print("Fail — Bounce back next time!")`,
        js: `let marks = 85;\nif (marks > 90) console.log("Grade A");\nelse if (marks > 80) console.log("Grade B");\nelse if (marks > 70) console.log("Grade C");\nelse if (marks >= 50) console.log("Grade D");\nelse console.log("Fail");`,
        screenshots: [],
        homework: "✏️ 1. Add marks for 5 subjects, calculate the average, then assign and print the final grade.\n✏️ 2. Rewrite this using a switch-case statement — hint: use marks / 10 as the switch value.\n✏️ 3. What happens if marks = -5 or marks = 105? Add input validation to handle these edge cases.",
        youtubeId: "dummyVideoId5",
        funFact: "🏫 India's CBSE board uses a similar grading system for 20+ million students every year. When results come out, their servers run this exact conditional logic millions of times in minutes."
    },

    "1_1_6": {
        explanation: `How many digits does 12345 have? You say '5' instantly. But HOW did your brain know? You counted: 1, 2, 3, 4, 5 — one by one. The computer does it the same way but using division. Keep dividing by 10 (which removes the last digit each time) and count how many times you divided before reaching 0. That count = number of digits. Think of peeling layers off an onion — each divide removes one digit-layer. 🧅`,
        explanationList: [
            "12345 ÷ 10 = 1234 (removed 5), count = 1",
            "1234 ÷ 10 = 123 (removed 4), count = 2 ... keep going until 0",
            "When n becomes 0, the loop stops. The count variable holds your answer."
        ],
        io: [
            { input: "N = 12345", output: "5", explanation: "Divided 5 times before reaching 0." },
            { input: "N = 7", output: "1", explanation: "7 ÷ 10 = 0 immediately — just 1 digit." }
        ],
        constraints: ["N = 0 is a special case — 0 has 1 digit but the loop won't run. Handle it separately!"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 12345;\n        if (n == 0) {\n            System.out.println(1);  // 0 is a 1-digit number\n            return;\n        }\n        int count = 0;\n        while (n != 0) {\n            n /= 10;    // chop off the last digit\n            count++;    // one more digit found\n        }\n        System.out.println(count);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 12345;\n    if (n == 0) { cout << 1; return 0; }\n    int count = 0;\n    while (n != 0) {\n        n /= 10;\n        count++;\n    }\n    cout << count << endl;\n    return 0;\n}`,
        python: `n = 12345\nif n == 0:\n    print(1)\nelse:\n    count = 0\n    while n != 0:\n        n //= 10\n        count += 1\n    print(count)`,
        js: `let n = 12345;\nif (n === 0) { console.log(1); }\nelse {\n    let count = 0;\n    while (n !== 0) {\n        n = Math.floor(n / 10);\n        count++;\n    }\n    console.log(count);\n}`,
        screenshots: [],
        homework: "✏️ 1. Solve the same problem in O(1) time using Math.log10(n) + 1 — no loop needed!\n✏️ 2. Count how many times the digit '5' appears in a number like 155250.\n✏️ 3. Find the sum of all individual digits in a number (digit sum of 1234 = 10).",
        youtubeId: "dummyVideoId6",
        funFact: "💳 When you enter your 16-digit debit card number, the first thing the payment server checks is — does it have exactly 16 digits? This exact loop logic (or its O(1) version) runs before anything else."
    },

    "1_1_7": {
        explanation: `Your roll number is 657843. Print each digit on a new line: 6, 5, 7, 8, 4, 3. Easy to say, tricky to code WITHOUT converting to a string. The trick? Think of the number like a stack of floors in a building — you need to reach the TOP floor (leftmost digit) first. So we first find the 'divisor' that can extract the topmost digit, then peel floor by floor using division and modulo. 🏢`,
        explanationList: [
            "Step 1 — find the divisor: for 657843 (6 digits), divisor = 100000 (10^5).",
            "Step 2 — 657843 / 100000 = 6 (first digit). Print 6.",
            "Step 3 — 657843 % 100000 = 57843. Now divisor = 10000. Repeat.",
            "Keep going until divisor becomes 0 — all digits printed!"
        ],
        io: [
            { input: "N = 657843", output: "6\n5\n7\n8\n4\n3", explanation: "Each digit extracted from left to right." }
        ],
        constraints: ["1 <= N <= 10^9 — don't use String conversion, practice the math approach!"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 657843;\n        int div = 1;\n        int temp = n;\n        // Find the right divisor\n        while (temp >= 10) {\n            div *= 10;\n            temp /= 10;\n        }\n        // Extract and print each digit left to right\n        while (div > 0) {\n            System.out.println(n / div);  // get leftmost digit\n            n %= div;                      // remove it\n            div /= 10;                    // move to next digit\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 657843;\n    int div = 1, temp = n;\n    while (temp >= 10) { div *= 10; temp /= 10; }\n    while (div > 0) {\n        cout << (n / div) << endl;\n        n %= div;\n        div /= 10;\n    }\n    return 0;\n}`,
        python: `n = 657843\ndiv = 1\ntemp = n\nwhile temp >= 10:\n    div *= 10\n    temp //= 10\nwhile div > 0:\n    print(n // div)\n    n %= div\n    div //= 10`,
        js: `let n = 657843;\nlet div = 1, temp = n;\nwhile (temp >= 10) { div *= 10; temp = Math.floor(temp / 10); }\nwhile (div > 0) {\n    console.log(Math.floor(n / div));\n    n %= div;\n    div = Math.floor(div / 10);\n}`,
        screenshots: [],
        homework: "✏️ 1. Now print digits in REVERSE order (right to left) — which is actually easier! Use n % 10.\n✏️ 2. Find the sum of all digits of a number.\n✏️ 3. Find the largest digit in a number — e.g. in 57329, the answer is 9.",
        youtubeId: "dummyVideoId7",
        funFact: "🛒 Barcode scanners at your local kirana store and Big Bazaar read digits left-to-right using optical sensors — then decode them using the same kind of positional math you just wrote."
    },

    "1_1_8": {
        explanation: `Think of rotating a combination lock — if your code is 562984 and you rotate it 2 steps to the right, the last 2 digits '84' come to the front: 845629. This is number rotation. It's used in cryptography, circular queues, and even how your processor handles bit operations. The math trick: split the number into two parts using division and power of 10, then swap and rejoin. 🔑`,
        explanationList: [
            "Find total digits (len). For 562984, len = 6.",
            "Normalize K: K = K % len (handles K larger than digit count).",
            "Right rotation by K means: last K digits go to front.",
            "Split: rem = n % 10^K (last K digits), q = n / 10^K (remaining). Answer = rem * 10^(len-K) + q."
        ],
        io: [
            { input: "N = 562984, K = 2", output: "845629", explanation: "Last 2 digits '84' moved to front." },
            { input: "N = 562984, K = -1", output: "629845", explanation: "Negative K = left rotation. '5' moves from front to back." }
        ],
        constraints: ["0 <= N <= 10^9 — if K >= len, use K % len to normalize."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 562984, k = 2;\n        int temp = n, len = 0;\n        while (temp > 0) { temp /= 10; len++; }\n        k = k % len;\n        if (k < 0) k += len;  // handle left rotation\n        int div = (int) Math.pow(10, k);\n        int mult = (int) Math.pow(10, len - k);\n        int rem = n % div;   // last k digits\n        int q = n / div;     // remaining digits\n        System.out.println((rem * mult) + q);\n    }\n}`,
        cpp: `#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    int n = 562984, k = 2;\n    int temp = n, len = 0;\n    while (temp > 0) { temp /= 10; len++; }\n    k = k % len;\n    if (k < 0) k += len;\n    int div = pow(10, k);\n    int mult = pow(10, len - k);\n    cout << ((n % div) * mult + (n / div)) << endl;\n    return 0;\n}`,
        python: `n, k = 562984, 2\ntemp, length = n, 0\nwhile temp > 0:\n    temp //= 10\n    length += 1\nk = k % length\nif k < 0:\n    k += length\ndiv = 10 ** k\nmult = 10 ** (length - k)\nprint((n % div) * mult + (n // div))`,
        js: `let n = 562984, k = 2;\nlet temp = n, len = 0;\nwhile (temp > 0) { temp = Math.floor(temp / 10); len++; }\nk = k % len;\nif (k < 0) k += len;\nlet div = Math.pow(10, k);\nlet mult = Math.pow(10, len - k);\nconsole.log((n % div) * mult + Math.floor(n / div));`,
        screenshots: [],
        homework: "✏️ 1. Rotate an array of numbers by K positions — much more common in real interviews!\n✏️ 2. Rotate the number LEFT by K positions (hint: it's just right rotation by len-K).\n✏️ 3. What happens if all digits are the same, like 1111? Verify your code handles it.",
        youtubeId: "dummyVideoId8",
        funFact: "🔐 SHA-256 — the algorithm that protects your UPI payments and bank passwords — uses bit rotation (ROT) internally inside every hashing round. Same concept, just at the bit level instead of digit level."
    },

    "1_1_9": {
        explanation: `GCD = the biggest number that divides both a and b perfectly. Like: you have 36 chocolates and 24 toffees to distribute equally in groups — the largest group size where no chocolate/toffee is left over is 12. That's GCD(36,24) = 12. LCM = smallest number both a and b divide into — like finding the next time two buses with 36-min and 24-min intervals both arrive together: LCM = 72 minutes. The Euclidean algorithm finds GCD without brute force — it's 2300 years old and still the best way. 🍫`,
        explanationList: [
            "Euclidean trick: GCD(a, b) = GCD(b, a % b). Keep replacing until remainder is 0.",
            "Example: GCD(36, 24) → GCD(24, 12) → GCD(12, 0) → answer is 12.",
            "LCM formula: LCM = (a × b) / GCD — no extra loop needed!"
        ],
        io: [
            { input: "a = 36, b = 24", output: "GCD = 12\nLCM = 72", explanation: "12 × 6 = 72 — smallest common multiple." }
        ],
        constraints: ["1 <= a, b <= 10^9 — use long to avoid overflow in a*b calculation!"],
        java: `class Solution {\n    public static void main(String[] args) {\n        long n1 = 36, n2 = 24;\n        long a = n1, b = n2;  // save originals for LCM\n        while (n1 % n2 != 0) {\n            long rem = n1 % n2;\n            n1 = n2;\n            n2 = rem;\n        }\n        long gcd = n2;\n        long lcm = (a * b) / gcd;\n        System.out.println("GCD = " + gcd);\n        System.out.println("LCM = " + lcm);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    long n1 = 36, n2 = 24;\n    long a = n1, b = n2;\n    while (n1 % n2 != 0) {\n        long rem = n1 % n2;\n        n1 = n2;\n        n2 = rem;\n    }\n    cout << "GCD = " << n2 << endl;\n    cout << "LCM = " << (a * b) / n2 << endl;\n    return 0;\n}`,
        python: `n1, n2 = 36, 24\na, b = n1, n2\nwhile n1 % n2 != 0:\n    n1, n2 = n2, n1 % n2\ngcd = n2\nlcm = (a * b) // gcd\nprint(f"GCD = {gcd}")\nprint(f"LCM = {lcm}")`,
        js: `let n1 = 36, n2 = 24;\nlet a = n1, b = n2;\nwhile (n1 % n2 !== 0) {\n    let rem = n1 % n2;\n    n1 = n2;\n    n2 = rem;\n}\nlet gcd = n2;\nconsole.log("GCD = " + gcd);\nconsole.log("LCM = " + (a * b) / gcd);`,
        screenshots: [],
        homework: "✏️ 1. Find GCD of THREE numbers: GCD(a, b, c) = GCD(GCD(a, b), c).\n✏️ 2. Two numbers are 'co-prime' if their GCD = 1. Write a program to check this.\n✏️ 3. Find the GCD of all elements in an array — useful interview question!",
        youtubeId: "dummyVideoId9",
        funFact: "📡 The Euclidean algorithm is from 300 BC — older than zero itself! Today, it powers RSA encryption which protects every HTTPS website you visit. Ancient math, modern internet."
    },

    "1_1_10": {
        explanation: `MADAM reads the same forwards and backwards — that's a palindrome. 121 does the same: 1-2-1. The challenge is to check this WITHOUT converting the number to a string (which is too easy). Instead, we reverse the number mathematically using modulo and multiplication, then compare it with the original. This is a classic interview question at companies like Amazon and Microsoft. 🔄`,
        explanationList: [
            "Negative numbers are NEVER palindromes (because of the minus sign). Check first!",
            "Extract last digit using n % 10. Append it to reversed: reversed = reversed * 10 + digit.",
            "Remove last digit from n using n / 10. Repeat until n = 0.",
            "Finally: if original == reversed → palindrome. Otherwise not."
        ],
        io: [
            { input: "N = 121", output: "true", explanation: "Reversed 121 = 121. They match!" },
            { input: "N = -121", output: "false", explanation: "Negative numbers can never be palindromes." },
            { input: "N = 123", output: "false", explanation: "Reversed 123 = 321. They don't match." }
        ],
        constraints: ["-2^31 <= N <= 2^31 - 1 — handle negatives and zero as edge cases!"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 121;\n        if (n < 0) {\n            System.out.println("false");  // negatives are never palindromes\n            return;\n        }\n        int original = n;\n        int reversed = 0;\n        while (n != 0) {\n            int digit = n % 10;               // extract last digit\n            reversed = reversed * 10 + digit; // build reversed number\n            n /= 10;                          // remove last digit\n        }\n        System.out.println(original == reversed);\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 121;\n    if (n < 0) { cout << "false"; return 0; }\n    int original = n, reversed = 0;\n    while (n != 0) {\n        reversed = reversed * 10 + (n % 10);\n        n /= 10;\n    }\n    cout << (original == reversed ? "true" : "false") << endl;\n    return 0;\n}`,
        python: `n = 121\nif n < 0:\n    print("false")\nelse:\n    original = n\n    reversed_num = 0\n    while n != 0:\n        digit = n % 10\n        reversed_num = reversed_num * 10 + digit\n        n //= 10\n    print("true" if original == reversed_num else "false")`,
        js: `let n = 121;\nif (n < 0) { console.log(false); }\nelse {\n    let original = n, reversed = 0;\n    while (n > 0) {\n        reversed = reversed * 10 + (n % 10);\n        n = Math.floor(n / 10);\n    }\n    console.log(original === reversed);\n}`,
        screenshots: [],
        homework: "✏️ 1. Now check if a STRING is a palindrome — e.g. 'racecar', 'level', 'madam'.\n✏️ 2. Check if a number is palindrome after reversing only HALF the digits (optimization trick — Google it!).\n✏️ 3. Find all palindrome numbers between 100 and 999 — how many are there?",
        youtubeId: "dummyVideoId10",
        funFact: "🧬 Palindromes exist in DNA! A DNA sequence like GAATTC reads the same on both strands. These palindromic sites are where restriction enzymes cut DNA — used in genetic engineering and medicine."
    },

    "1_1_11": {
        explanation: `153 is magical. Why? 1³ + 5³ + 3³ = 1 + 125 + 27 = 153. The number equals the sum of cubes of its own digits — it's literally made of itself. These are called Armstrong numbers (or Narcissistic numbers — they're obsessed with themselves 😄). This problem tests your ability to extract digits + use the power operator, and it comes up in college exams and entry-level interviews all the time. 💫`,
        explanationList: [
            "Store a copy of n (you'll need the original for comparison at the end).",
            "In a loop: extract last digit using n % 10, cube it (digit³), add to sum.",
            "Remove last digit: n = n / 10. Repeat until n = 0.",
            "If sum == original number → Armstrong! Otherwise not."
        ],
        io: [
            { input: "N = 153", output: "true ✅", explanation: "1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ✓" },
            { input: "N = 370", output: "true ✅", explanation: "3³ + 7³ + 0³ = 27 + 343 + 0 = 370 ✓" },
            { input: "N = 123", output: "false ❌", explanation: "1³ + 2³ + 3³ = 36 ≠ 123" }
        ],
        constraints: ["0 <= N <= 10^9 — for 4-digit numbers, use 4th power, not cube! (Generalized version)"],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 153;\n        int sum = 0;\n        int original = n;  // save for final comparison\n        while (n > 0) {\n            int digit = n % 10;          // extract last digit\n            sum += digit * digit * digit; // cube it and add to sum\n            n /= 10;                     // remove last digit\n        }\n        if (sum == original) {\n            System.out.println("true — Armstrong Number!");\n        } else {\n            System.out.println("false — Not an Armstrong Number.");\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 153;\n    int sum = 0, original = n;\n    while (n > 0) {\n        int digit = n % 10;\n        sum += digit * digit * digit;\n        n /= 10;\n    }\n    cout << (sum == original ? "true" : "false") << endl;\n    return 0;\n}`,
        python: `n = 153\noriginal = n\nsum_val = 0\nwhile n > 0:\n    digit = n % 10\n    sum_val += digit ** 3  # ** is Python's power operator\n    n //= 10\nprint("true" if sum_val == original else "false")`,
        js: `let n = 153;\nlet original = n, sum = 0;\nwhile (n > 0) {\n    let digit = n % 10;\n    sum += digit * digit * digit;\n    n = Math.floor(n / 10);\n}\nconsole.log(sum === original);`,
        screenshots: [],
        homework: "✏️ 1. Print ALL Armstrong numbers between 1 and 1000 — there are only 5 of them!\n✏️ 2. Generalize: for a 4-digit number, use 4th power. Write a function that works for any digit count.\n✏️ 3. Check if 9474 is an Armstrong number (hint: it's a 4-digit Armstrong — use digit⁴).",
        youtubeId: "dummyVideoId11",
        funFact: "💫 There are only 88 Armstrong (narcissistic) numbers in the entire infinite number system. The largest known one has 39 digits. Mathematicians have proven no new ones exist beyond that — it's a closed club!"
    },

    // -------------------------------------------------------------
    // CHAPTER 1.2: Patterns
    // -------------------------------------------------------------

    "1_2_1": {
        explanation: `Remember drawing a staircase on your notebook in class? That's exactly this pattern. The Right-Angle Triangle is the FIRST pattern every interviewer asks — from TCS to Amazon. Row 1 has 1 star, row 2 has 2 stars... row N has N stars. The key insight: the inner loop runs exactly i times for row i. Master this and you've cracked the foundation of all nested loop problems. 🌟`,
        explanationList: [
            "Outer loop: i goes from 1 to N — controls the number of rows.",
            "Inner loop: j goes from 1 to i — prints exactly i stars in row i.",
            "System.out.println() after inner loop moves to the next line.",
            "Rule to remember: inner loop limit = outer loop variable."
        ],
        io: [
            { input: "N = 5", output: "*\n* *\n* * *\n* * * *\n* * * * *", explanation: "Row i always has exactly i stars." }
        ],
        constraints: ["1 <= N <= 20 for clean output on screen."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print("* ");\n            }\n            System.out.println(); // move to next line\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 5;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++)\n            cout << "* ";\n        cout << endl;\n    }\n    return 0;\n}`,
        python: `n = 5\nfor i in range(1, n + 1):\n    print(("* " * i).strip())`,
        js: `let n = 5;\nfor (let i = 1; i <= n; i++) {\n    console.log("* ".repeat(i).trim());\n}`,
        screenshots: [],
        homework: "✏️ 1. Print the INVERTED triangle — N stars on row 1, N-1 on row 2, down to 1.\n✏️ 2. Print the triangle with the right angle on the TOP-RIGHT corner instead of bottom-left.\n✏️ 3. Replace '*' with the column number j — so row 3 prints: 1 2 3.",
        youtubeId: "dummyId121",
        funFact: "📐 The total stars in an N-row triangle = N*(N+1)/2 — this is called a Triangular Number. Gauss calculated this formula at age 10 by adding 1 to 100 in seconds. Same logic, different application!"
    },

    "1_2_2": {
        explanation: `Imagine the border of a cricket ground — stars only on the boundary, empty inside. That's a Hollow Rectangle! This pattern teaches you one of the most important skills: printing something ONLY at the boundary (first row, last row, first column, last column) and space everywhere else. This boundary condition check appears in 50+ interview problems — from matrix problems to maze solving. 🏏`,
        explanationList: [
            "For a hollow shape: only print '*' when i==1, i==N (top/bottom row) OR j==1, j==N (left/right column).",
            "In every other position: print a space ' ' to keep the interior hollow.",
            "The condition is: if (i==1 || i==N || j==1 || j==N) → print star, else print space."
        ],
        io: [
            { input: "rows=4, cols=6", output: "* * * * * *\n*         *\n*         *\n* * * * * *", explanation: "Only border positions have stars, interior is hollow." }
        ],
        constraints: ["2 <= rows, cols <= 20 — minimum 2 so there's at least a border."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int rows = 4, cols = 6;\n        for (int i = 1; i <= rows; i++) {\n            for (int j = 1; j <= cols; j++) {\n                // print star only at the border\n                if (i == 1 || i == rows || j == 1 || j == cols) {\n                    System.out.print("* ");\n                } else {\n                    System.out.print("  "); // hollow inside\n                }\n            }\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int rows = 4, cols = 6;\n    for (int i = 1; i <= rows; i++) {\n        for (int j = 1; j <= cols; j++) {\n            if (i==1 || i==rows || j==1 || j==cols)\n                cout << "* ";\n            else\n                cout << "  ";\n        }\n        cout << endl;\n    }\n    return 0;\n}`,
        python: `rows, cols = 4, 6\nfor i in range(1, rows + 1):\n    row = ""\n    for j in range(1, cols + 1):\n        if i == 1 or i == rows or j == 1 or j == cols:\n            row += "* "\n        else:\n            row += "  "\n    print(row)`,
        js: `let rows = 4, cols = 6;\nfor (let i = 1; i <= rows; i++) {\n    let row = "";\n    for (let j = 1; j <= cols; j++) {\n        if (i==1 || i==rows || j==1 || j==cols)\n            row += "* ";\n        else\n            row += "  ";\n    }\n    console.log(row);\n}`,
        screenshots: [],
        homework: "✏️ 1. Print a Solid Rectangle (all stars, no hollow) — a simpler version to understand the base.\n✏️ 2. Print a Hollow Square where N x N, all in one input.\n✏️ 3. Print cross diagonals inside the hollow rectangle (X pattern inside the border).",
        youtubeId: "dummyId122",
        funFact: "🎮 Game developers use this exact boundary check logic to detect collision walls in 2D games — if your character touches row==1 or row==maxRow, it hits a wall. Same if-else, different output!"
    },

    "1_2_3": {
        explanation: `A Diamond = Pyramid on top + Inverted Pyramid below. It's the most visually satisfying pattern and appears in interviews at Infosys, Wipro, Cognizant, and TCS almost every year. The trick: upper half increases stars, lower half decreases. Spaces go the opposite way. Once you master pyramid logic, diamond is just running it twice — one forward, one reverse. 💎`,
        explanationList: [
            "Upper half (i: 1 to N): print (N-i) spaces, then (2*i - 1) stars.",
            "Lower half (i: N-1 to 1): same formula — print (N-i) spaces, then (2*i - 1) stars.",
            "The middle row (i=N) has 0 spaces and (2N-1) stars — the widest row."
        ],
        io: [
            { input: "N = 4", output: "   *\n  * * *\n * * * * *\n* * * * * * *\n * * * * *\n  * * *\n   *", explanation: "Upper half grows, lower half shrinks symmetrically." }
        ],
        constraints: ["1 <= N <= 15 for readable output."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        // Upper half (including middle)\n        for (int i = 1; i <= n; i++) {\n            for (int sp = 1; sp <= n - i; sp++) System.out.print(" ");\n            for (int st = 1; st <= 2 * i - 1; st++) System.out.print("*");\n            System.out.println();\n        }\n        // Lower half\n        for (int i = n - 1; i >= 1; i--) {\n            for (int sp = 1; sp <= n - i; sp++) System.out.print(" ");\n            for (int st = 1; st <= 2 * i - 1; st++) System.out.print("*");\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 4;\n    for (int i = 1; i <= n; i++) {\n        for (int sp = 1; sp <= n-i; sp++) cout << " ";\n        for (int st = 1; st <= 2*i-1; st++) cout << "*";\n        cout << endl;\n    }\n    for (int i = n-1; i >= 1; i--) {\n        for (int sp = 1; sp <= n-i; sp++) cout << " ";\n        for (int st = 1; st <= 2*i-1; st++) cout << "*";\n        cout << endl;\n    }\n    return 0;\n}`,
        python: `n = 4\n# Upper half\nfor i in range(1, n + 1):\n    print(" " * (n - i) + "*" * (2 * i - 1))\n# Lower half\nfor i in range(n - 1, 0, -1):\n    print(" " * (n - i) + "*" * (2 * i - 1))`,
        js: `let n = 4;\n// Upper half\nfor (let i = 1; i <= n; i++) {\n    console.log(" ".repeat(n-i) + "*".repeat(2*i-1));\n}\n// Lower half\nfor (let i = n-1; i >= 1; i--) {\n    console.log(" ".repeat(n-i) + "*".repeat(2*i-1));\n}`,
        screenshots: [],
        homework: "✏️ 1. Print a Hollow Diamond — stars only on the edges of each row, spaces inside.\n✏️ 2. Print the diamond with numbers instead of stars — middle row has the largest number.\n✏️ 3. Can you print TWO diamonds side by side? (Hint: use a 2D array to store both patterns first).",
        youtubeId: "dummyId123",
        funFact: "💎 The diamond shape is mathematically a rhombus rotated 45°. Computer graphics libraries use the same row-by-row star/space calculation to render rotated shapes on pixel grids!"
    },

    "1_2_4": {
        explanation: `Floyd's Triangle is named after Robert Floyd (the same guy behind Floyd-Warshall shortest path algorithm). It's a right-angle triangle where numbers are filled row by row continuously — 1 in row 1, then 2 3 in row 2, then 4 5 6 in row 3, and so on. This problem introduces a KEY concept: using a counter variable that keeps incrementing across both loops — not resetting. You'll use this technique in matrix problems and DP tables too. 🔢`,
        explanationList: [
            "Maintain a counter variable (num = 1) OUTSIDE both loops.",
            "Outer loop: i from 1 to N (rows). Inner loop: j from 1 to i (columns).",
            "In each inner iteration: print num, then num++. Don't reset num between rows!",
            "Row 1 gets 1 number, row 2 gets 2 numbers, row i gets i numbers."
        ],
        io: [
            { input: "N = 5", output: "1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15", explanation: "Counter never resets — it flows from row to row." }
        ],
        constraints: ["1 <= N <= 15 for clean display."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        int num = 1; // counter lives OUTSIDE both loops\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(num + " ");\n                num++; // keeps incrementing across rows\n            }\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 5, num = 1;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++)\n            cout << num++ << " ";\n        cout << endl;\n    }\n    return 0;\n}`,
        python: `n = 5\nnum = 1\nfor i in range(1, n + 1):\n    row = []\n    for j in range(i):\n        row.append(str(num))\n        num += 1\n    print(" ".join(row))`,
        js: `let n = 5, num = 1;\nfor (let i = 1; i <= n; i++) {\n    let row = [];\n    for (let j = 1; j <= i; j++) row.push(num++);\n    console.log(row.join(" "));\n}`,
        screenshots: [],
        homework: "✏️ 1. Print Floyd's Triangle but with ODD numbers only: 1, 3 5, 7 9 11...\n✏️ 2. Print the triangle in REVERSE — last row on top, first row at bottom.\n✏️ 3. Find the first and last number of any given row N without printing the whole triangle — derive a formula!",
        youtubeId: "dummyId124",
        funFact: "🧮 The total count of numbers in Floyd's Triangle with N rows = N*(N+1)/2 — same as triangular numbers. The last number in row N = N*(N+1)/2. This formula is used in competitive programming to jump directly to any row!"
    },

    "1_2_5": {
        explanation: `Pascal's Triangle is the most important pattern in DSA. It appears in: Binomial coefficients (probability), combinations nCr (combinatorics), DP problems, and coding interviews at Google and Amazon. Each number = sum of the two numbers directly above it. The edges are always 1. The inner values = left-parent + right-parent. The formula: value[i][j] = value[i-1][j-1] + value[i-1][j]. This is the gateway to understanding Dynamic Programming. 🔺`,
        explanationList: [
            "Row 0: [1], Row 1: [1,1], Row 2: [1,2,1], Row 3: [1,3,3,1]...",
            "Every value at position j in row i = C(i,j) = i! / (j! * (i-j)!) — or just add the two values above.",
            "Easier approach: use the formula C(i,j) = C(i, j-1) * (i-j+1) / j to generate each row.",
            "Print (N-i) spaces before each row to center it (optional but looks great)."
        ],
        io: [
            { input: "N = 5", output: "    1\n   1 1\n  1 2 1\n 1 3 3 1\n1 4 6 4 1", explanation: "Each inner number is the sum of the two above it." }
        ],
        constraints: ["1 <= N <= 15 before numbers get too large for int."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 0; i < n; i++) {\n            // print leading spaces for centering\n            for (int sp = 0; sp < n - i - 1; sp++) System.out.print(" ");\n            long val = 1;\n            for (int j = 0; j <= i; j++) {\n                System.out.print(val + " ");\n                val = val * (i - j) / (j + 1); // next C(i,j+1)\n            }\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 5;\n    for (int i = 0; i < n; i++) {\n        for (int sp = 0; sp < n-i-1; sp++) cout << " ";\n        long val = 1;\n        for (int j = 0; j <= i; j++) {\n            cout << val << " ";\n            val = val * (i - j) / (j + 1);\n        }\n        cout << endl;\n    }\n    return 0;\n}`,
        python: `n = 5\nfor i in range(n):\n    print(" " * (n - i - 1), end="")\n    val = 1\n    for j in range(i + 1):\n        print(val, end=" ")\n        val = val * (i - j) // (j + 1)\n    print()`,
        js: `let n = 5;\nfor (let i = 0; i < n; i++) {\n    let row = " ".repeat(n - i - 1);\n    let val = 1;\n    for (let j = 0; j <= i; j++) {\n        row += val + " ";\n        val = val * (i - j) / (j + 1);\n    }\n    console.log(row);\n}`,
        screenshots: [],
        homework: "✏️ 1. Generate only a specific ROW of Pascal's Triangle without generating all rows above it.\n✏️ 2. Use Pascal's Triangle to calculate C(10, 3) — verify with the formula 10!/(3!*7!).\n✏️ 3. LeetCode 118 — 'Pascal's Triangle' — solve it directly using this pattern!",
        youtubeId: "dummyId125",
        funFact: "🎲 If you color even numbers in Pascal's Triangle, you get the Sierpiński triangle fractal! Mathematicians discovered this in the 1600s. The same triangle connects probability theory, geometry, and algebra — it's the most connected object in mathematics."
    },

    "1_2_6": {
        explanation: `In a Number Pyramid, each row is centered and filled with the row number repeated. Row 1 has one '1', row 2 has three '2's, row 3 has five '3's. The number of characters in row i = 2*i - 1. This pattern drills two skills simultaneously: centering with spaces AND printing repetitive values. It's simple enough to code in 5 minutes but elegant enough to impress anyone watching. 🏛️`,
        explanationList: [
            "Row i has (N-i) spaces for centering, then (2*i - 1) copies of the number i.",
            "The number printed is always equal to the current row number i.",
            "Outer loop: i from 1 to N. Space loop: N-i times. Number loop: 2*i-1 times."
        ],
        io: [
            { input: "N = 5", output: "    1\n   222\n  33333\n 4444444\n555555555", explanation: "Row i prints the digit i exactly (2i-1) times, centered." }
        ],
        constraints: ["1 <= N <= 9 since single digit row numbers look cleanest."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            // leading spaces for center alignment\n            for (int sp = 1; sp <= n - i; sp++) System.out.print(" ");\n            // print row number (2*i-1) times\n            for (int j = 1; j <= 2 * i - 1; j++) System.out.print(i);\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 5;\n    for (int i = 1; i <= n; i++) {\n        for (int sp = 1; sp <= n-i; sp++) cout << " ";\n        for (int j = 1; j <= 2*i-1; j++) cout << i;\n        cout << endl;\n    }\n    return 0;\n}`,
        python: `n = 5\nfor i in range(1, n + 1):\n    spaces = " " * (n - i)\n    nums = str(i) * (2 * i - 1)\n    print(spaces + nums)`,
        js: `let n = 5;\nfor (let i = 1; i <= n; i++) {\n    console.log(" ".repeat(n - i) + String(i).repeat(2 * i - 1));\n}`,
        screenshots: [],
        homework: "✏️ 1. Print the same pyramid but with column numbers j instead of row numbers i.\n✏️ 2. Print an INVERTED number pyramid — starts with N at top, 1 at the bottom.\n✏️ 3. Print a pyramid where each row counts: 1 2 3 .. i .. 3 2 1 (palindrome row).",
        youtubeId: "dummyId126",
        funFact: "🏛️ The Ancient Greeks called 1, 3, 6, 10... 'Triangular Numbers' because they could arrange that many pebbles into perfect triangles. Mathematicians still study these shapes today in Number Theory!"
    },

    "1_2_7": {
        explanation: `The Butterfly pattern gets its name because it literally looks like a butterfly with open wings. It's two V-shapes mirrored — top half has stars growing from outside inward, bottom half mirrors it. This is a HARD pattern that tests your ability to track stars AND spaces in the same row simultaneously. Companies like Accenture and Capgemini have used this in written tests. 🦋`,
        explanationList: [
            "Upper half (i: 1 to N): print i stars, then 2*(N-i) spaces, then i stars.",
            "Lower half (i: N-1 down to 1): same formula — i stars, 2*(N-i) spaces, i stars.",
            "When i == N (middle row): 2*(N-N) = 0 spaces, so all stars join in center.",
            "Key: the left and right star count are equal = i. Spaces = 2*(N-i)."
        ],
        io: [
            { input: "N = 4", output: "*      *\n**    **\n***  ***\n********\n***  ***\n**    **\n*      *", explanation: "Wings grow inward in upper half, shrink in lower half." }
        ],
        constraints: ["1 <= N <= 15 for clean display."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        // Upper half\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) System.out.print("*");         // left wing\n            for (int j = 1; j <= 2*(n-i); j++) System.out.print(" "); // gap\n            for (int j = 1; j <= i; j++) System.out.print("*");         // right wing\n            System.out.println();\n        }\n        // Lower half\n        for (int i = n-1; i >= 1; i--) {\n            for (int j = 1; j <= i; j++) System.out.print("*");\n            for (int j = 1; j <= 2*(n-i); j++) System.out.print(" ");\n            for (int j = 1; j <= i; j++) System.out.print("*");\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 4;\n    for (int i = 1; i <= n; i++) {\n        for (int j=1;j<=i;j++) cout<<"*";\n        for (int j=1;j<=2*(n-i);j++) cout<<" ";\n        for (int j=1;j<=i;j++) cout<<"*";\n        cout<<endl;\n    }\n    for (int i = n-1; i >= 1; i--) {\n        for (int j=1;j<=i;j++) cout<<"*";\n        for (int j=1;j<=2*(n-i);j++) cout<<" ";\n        for (int j=1;j<=i;j++) cout<<"*";\n        cout<<endl;\n    }\n    return 0;\n}`,
        python: `n = 4\nfor i in range(1, n + 1):\n    print("*" * i + " " * (2*(n-i)) + "*" * i)\nfor i in range(n-1, 0, -1):\n    print("*" * i + " " * (2*(n-i)) + "*" * i)`,
        js: `let n = 4;\nfor (let i = 1; i <= n; i++)\n    console.log("*".repeat(i) + " ".repeat(2*(n-i)) + "*".repeat(i));\nfor (let i = n-1; i >= 1; i--)\n    console.log("*".repeat(i) + " ".repeat(2*(n-i)) + "*".repeat(i));`,
        screenshots: [],
        homework: "✏️ 1. Print a Hollow Butterfly — stars only at the edges of each wing, spaces inside too.\n✏️ 2. Replace stars with the row number i — what does the butterfly look like with numbers?\n✏️ 3. Print the butterfly rotated 90° — lying on its side instead of upright.",
        youtubeId: "dummyId127",
        funFact: "🦋 A real butterfly's wing symmetry is called 'bilateral symmetry' — same pattern on left and right. The mathematical study of symmetry is called Group Theory, used in cryptography and quantum physics!"
    },

    "1_2_8": {
        explanation: `A Hollow Diamond is a Full Diamond where only the border stars are printed — the inside is empty. This is a mix of the Diamond pattern (pattern 3) and the Hollow Rectangle (pattern 2) concept. You need to determine: for each row, what is the FIRST and LAST star position? Print star at those positions, space everywhere between. This type of boundary tracking is used in 2D matrix traversal problems. ◇`,
        explanationList: [
            "Upper half row i: first star at position (N-i), last star at position (N+i-2) — only print at these two spots.",
            "If it's the first or last row (single star), just print one star.",
            "Lower half: mirror the upper half starting from i = N-1 down to 1.",
            "Total width of each row = 2*N - 1 characters."
        ],
        io: [
            { input: "N = 4", output: "   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *", explanation: "Only border stars printed — inner space is hollow." }
        ],
        constraints: ["2 <= N <= 15 for visible hollow effect."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        // Upper half\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= 2*n-1; j++) {\n                if (j == n-i+1 || j == n+i-1) System.out.print("*");\n                else System.out.print(" ");\n            }\n            System.out.println();\n        }\n        // Lower half\n        for (int i = n-1; i >= 1; i--) {\n            for (int j = 1; j <= 2*n-1; j++) {\n                if (j == n-i+1 || j == n+i-1) System.out.print("*");\n                else System.out.print(" ");\n            }\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 4;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= 2*n-1; j++)\n            cout << ((j==n-i+1 || j==n+i-1) ? "*" : " ");\n        cout << endl;\n    }\n    for (int i = n-1; i >= 1; i--) {\n        for (int j = 1; j <= 2*n-1; j++)\n            cout << ((j==n-i+1 || j==n+i-1) ? "*" : " ");\n        cout << endl;\n    }\n    return 0;\n}`,
        python: `n = 4\nwidth = 2 * n - 1\nfor i in range(1, n + 1):\n    row = [" "] * width\n    row[n - i] = "*"   # left border\n    row[n + i - 2] = "*"  # right border\n    print("".join(row))\nfor i in range(n-1, 0, -1):\n    row = [" "] * width\n    row[n - i] = "*"\n    row[n + i - 2] = "*"\n    print("".join(row))`,
        js: `let n = 4, w = 2*n-1;\nfor (let i = 1; i <= n; i++) {\n    let r = Array(w).fill(" ");\n    r[n-i] = "*"; r[n+i-2] = "*";\n    console.log(r.join(""));\n}\nfor (let i = n-1; i >= 1; i--) {\n    let r = Array(w).fill(" ");\n    r[n-i] = "*"; r[n+i-2] = "*";\n    console.log(r.join(""));\n}`,
        screenshots: [],
        homework: "✏️ 1. Fill the hollow diamond with a different character inside (like '.' for dots).\n✏️ 2. Print a Hollow Triangle — only the three sides of a triangle, hollow inside.\n✏️ 3. LeetCode 48 — 'Rotate Image' uses the same boundary position math on a real matrix!",
        youtubeId: "dummyId128",
        funFact: "◇ A hollow diamond shape is the projection of a 3D octahedron (two pyramids joined base-to-base) onto a 2D plane. Crystals like diamonds form this octahedral structure — that's literally why they're called 'diamond' shaped!"
    },

    "1_2_9": {
        explanation: `Spiral Matrix — numbers fill a 2D grid going: RIGHT → DOWN → LEFT → UP → RIGHT... like a snake coiling inward. This is one of the most FAMOUS interview problems asked at Google, Amazon, Microsoft. It forces you to think in directions, track boundaries, and shrink the problem layer by layer. Solving this means you're ready for matrix traversal problems in real interviews. 🐍`,
        explanationList: [
            "Track 4 boundaries: top, bottom, left, right. All start at edges.",
            "Fill RIGHT across top row → move top boundary down.",
            "Fill DOWN along right column → move right boundary left.",
            "Fill LEFT across bottom row → move bottom boundary up.",
            "Fill UP along left column → move left boundary right. Repeat until all cells filled."
        ],
        io: [
            { input: "N = 4", output: " 1  2  3  4\n12 13 14  5\n11 16 15  6\n10  9  8  7", explanation: "Numbers spiral inward clockwise from top-left." }
        ],
        constraints: ["1 <= N <= 10 for clean display. Time complexity: O(N²)."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 4;\n        int[][] mat = new int[n][n];\n        int top = 0, bottom = n-1, left = 0, right = n-1, num = 1;\n        while (num <= n*n) {\n            for (int i = left; i <= right; i++) mat[top][i] = num++;   // go right\n            top++;\n            for (int i = top; i <= bottom; i++) mat[i][right] = num++; // go down\n            right--;\n            for (int i = right; i >= left; i--) mat[bottom][i] = num++;// go left\n            bottom--;\n            for (int i = bottom; i >= top; i--) mat[i][left] = num++;  // go up\n            left++;\n        }\n        // Print the matrix\n        for (int[] row : mat) {\n            for (int val : row) System.out.printf("%3d", val);\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int n = 4;\n    int mat[4][4] = {};\n    int top=0,bottom=n-1,left=0,right=n-1,num=1;\n    while(num<=n*n){\n        for(int i=left;i<=right;i++) mat[top][i]=num++;\n        top++;\n        for(int i=top;i<=bottom;i++) mat[i][right]=num++;\n        right--;\n        for(int i=right;i>=left;i--) mat[bottom][i]=num++;\n        bottom--;\n        for(int i=bottom;i>=top;i--) mat[i][left]=num++;\n        left++;\n    }\n    for(int i=0;i<n;i++){\n        for(int j=0;j<n;j++) cout<<setw(3)<<mat[i][j];\n        cout<<endl;\n    }\n    return 0;\n}`,
        python: `n = 4\nmat = [[0]*n for _ in range(n)]\ntop, bottom, left, right, num = 0, n-1, 0, n-1, 1\nwhile num <= n*n:\n    for i in range(left, right+1): mat[top][i] = num; num+=1\n    top += 1\n    for i in range(top, bottom+1): mat[i][right] = num; num+=1\n    right -= 1\n    for i in range(right, left-1, -1): mat[bottom][i] = num; num+=1\n    bottom -= 1\n    for i in range(bottom, top-1, -1): mat[i][left] = num; num+=1\n    left += 1\nfor row in mat:\n    print(" ".join(f"{v:3}" for v in row))`,
        js: `let n = 4;\nlet mat = Array.from({length:n}, ()=>Array(n).fill(0));\nlet [top,bottom,left,right,num] = [0,n-1,0,n-1,1];\nwhile(num<=n*n){\n    for(let i=left;i<=right;i++) mat[top][i]=num++;\n    top++;\n    for(let i=top;i<=bottom;i++) mat[i][right]=num++;\n    right--;\n    for(let i=right;i>=left;i--) mat[bottom][i]=num++;\n    bottom--;\n    for(let i=bottom;i>=top;i--) mat[i][left]=num++;\n    left++;\n}\nmat.forEach(row=>console.log(row.map(v=>String(v).padStart(3)).join("")));`,
        screenshots: [],
        homework: "✏️ 1. LeetCode 54 — 'Spiral Matrix' — return elements of a given matrix in spiral order.\n✏️ 2. Print the spiral ANTI-clockwise (LEFT → DOWN → RIGHT → UP).\n✏️ 3. Find the value at position (row, col) in an N×N spiral matrix WITHOUT generating the full matrix — derive a formula!",
        youtubeId: "dummyId129",
        funFact: "🐍 The Spiral Matrix algorithm is used in image processing to scan pixels in a cache-friendly order, and in printing circuit board traces (PCB routing) to minimize wire crossings in hardware design!"
    },

    "1_2_10": {
        explanation: `The Swastik is an ancient Indian symbol (स्वस्तिक) that appears across Vedic mathematics, Hindu temples, and even Buddhist art. In code, it's the HARDEST pattern in Chapter 1 — you need to track a cross shape with bent arms. The trick: draw it on paper first as a grid, mark which cells are '*', then find the row-column condition for each arm. This is exactly how engineers think — visualize, find the pattern, code the condition. 🕉️`,
        explanationList: [
            "Grid size = (2N+1) × (2N+1). Center is at (N, N).",
            "Top arm: row 0, columns 0 to N → stars. Plus: rows 1 to N-1, column 0 → left bar. Plus: row 0, column 2N → top-right extension.",
            "Middle bar: row N, all columns → full horizontal line.",
            "Bottom arm: row 2N, columns N to 2N → stars. Plus: rows N+1 to 2N-1, column 2N → right bar. Plus: row 2N, column 0 → bottom-left extension.",
            "Condition to print '*': (i==0 && j<=N) || (i==0 && j==2*N) || (j==0 && i<=N) || (i==N) || (i==2*N && j>=N) || (i==2*N && j==0) || (j==2*N && i>=N)"
        ],
        io: [
            { input: "N = 3", output: "*     * * * *\n*     *\n*     *\n* * * * * * *\n      *     *\n      *     *\n* * * *     *", explanation: "Top-left arm bends right, bottom-right arm bends left — classic Swastik 卐" }
        ],
        constraints: ["2 <= N <= 8 for recognizable output."],
        java: `class Solution {\n    public static void main(String[] args) {\n        int n = 3;\n        int size = 2 * n + 1;\n        for (int i = 0; i < size; i++) {\n            for (int j = 0; j < size; j++) {\n                boolean star =\n                    (i == 0   && (j == 0 || j >= n))     ||  // top: corner + right arm\n                    (i > 0    && i < n  && (j == 0 || j == n)) ||  // upper: left bar + center bar\n                    (i == n)                              ||  // full middle bar\n                    (i > n    && i < 2*n && (j == n || j == 2*n)) ||  // lower: center bar + right bar\n                    (i == 2*n && (j <= n || j == 2*n));     // bottom: left arm + corner\n                System.out.print(star ? "* " : "  ");\n            }\n            System.out.println();\n        }\n    }\n}`,
        cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 3, size = 2*n+1;\n    for (int i = 0; i < size; i++) {\n        for (int j = 0; j < size; j++) {\n            bool star =\n                (i==0   && (j==0 || j>=n))          ||\n                (i>0    && i<n  && (j==0 || j==n))  ||\n                (i==n)                               ||\n                (i>n    && i<2*n && (j==n || j==2*n))||\n                (i==2*n && (j<=n || j==2*n));\n            cout << (star ? "* " : "  ");\n        }\n        cout << endl;\n    }\n    return 0;\n}`,
        python: `n = 3\nsize = 2 * n + 1\nfor i in range(size):\n    row = ""\n    for j in range(size):\n        star = (\n            (i == 0   and (j == 0 or j >= n))          or\n            (i > 0    and i < n  and (j == 0 or j == n)) or\n            (i == n)                                    or\n            (i > n    and i < 2*n and (j == n or j == 2*n)) or\n            (i == 2*n and (j <= n or j == 2*n))\n        )\n        row += "* " if star else "  "\n    print(row)`,
        js: `let n = 3, size = 2*n+1;\nfor (let i = 0; i < size; i++) {\n    let row = "";\n    for (let j = 0; j < size; j++) {\n        let star =\n            (i==0   && (j==0 || j>=n))           ||\n            (i>0    && i<n  && (j==0 || j==n))   ||\n            (i==n)                                ||\n            (i>n    && i<2*n && (j==n || j==2*n)) ||\n            (i==2*n && (j<=n || j==2*n));\n        row += star ? "* " : "  ";\n    }\n    console.log(row);\n}`,
        screenshots: [],
        homework: "✏️ 1. Try N=2 and N=5 — observe how the Swastik scales with N.\n✏️ 2. Print the ANTI-clockwise Swastik (arms bent in opposite direction) by flipping the conditions.\n✏️ 3. Store the pattern in a 2D char array first, then print — this is how real pattern generation works in games.",
        youtubeId: "dummyId1210",
        funFact: "🕉️ The Swastik symbol is over 11,000 years old — found in ancient Indian, Greek, and Norse cultures. The word comes from Sanskrit: 'su' (good) + 'asti' (it is) = 'it is good'. In mathematics, its 4-fold rotational symmetry is studied under Group Theory!"
    },

};
