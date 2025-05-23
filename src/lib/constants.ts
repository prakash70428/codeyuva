import type { NavItem, Course, Mentor, Article } from '@/types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '#courses-section' },
  { label: 'Mentors', href: '#mentors-section' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact-section' },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: 'About Us', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Careers', href: '#' },
];

export const SOCIAL_LINKS: NavItem[] = [
  { label: 'Facebook', href: '#', external: true },
  { label: 'Twitter', href: '#', external: true },
  { label: 'Instagram', href: '#', external: true },
  { label: 'LinkedIn', href: '#', external: true },
];


export const PLACEHOLDER_COURSES: Course[] = [
  {
    id: 'dsa-mastery',
    title: 'DSA Mastery Bootcamp',
    description: 'Conquer data structures and algorithms with hands-on projects and expert guidance.',
    syllabusOverview: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Dynamic Programming', 'Sorting & Searching'],
    duration: '12 Weeks',
    whoShouldJoin: ['Aspiring Software Engineers', 'Students preparing for interviews', 'Developers seeking to strengthen fundamentals'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'coding data',
  },
  {
    id: 'fullstack-pro',
    title: 'Full-Stack Web Development Pro',
    description: 'Become a full-stack developer by mastering frontend and backend technologies.',
    syllabusOverview: ['HTML, CSS, JavaScript', 'React & Next.js', 'Node.js & Express', 'Databases (SQL/NoSQL)', 'Deployment & DevOps'],
    duration: '16 Weeks',
    whoShouldJoin: ['Beginners in web development', 'Designers wanting to code', 'Entrepreneurs building web apps'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'web development',
  },
  {
    id: 'ml-foundations',
    title: 'Machine Learning Foundations',
    description: 'Dive into the world of AI and Machine Learning with practical examples and projects.',
    syllabusOverview: ['Python for ML', 'Supervised Learning', 'Unsupervised Learning', 'Neural Networks Basics', 'Model Evaluation'],
    duration: '10 Weeks',
    whoShouldJoin: ['Data Science Enthusiasts', 'Analysts looking to upskill', 'Engineers curious about AI'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'machine learning',
  },
];

export const PLACEHOLDER_MENTORS: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Aisha Khan',
    experience: 'Senior Software Engineer @ Google | 8+ Years in DSA & System Design',
    photo: 'https://placehold.co/300x300.png',
    dataAiHint: 'woman portrait',
    linkedinUrl: 'https://linkedin.com/in/aishakhan',
  },
  {
    id: 'mentor-2',
    name: 'Raj Patel',
    experience: 'Lead Full-Stack Developer @ Microsoft | 10+ Years in Web Technologies',
    photo: 'https://placehold.co/300x300.png',
    dataAiHint: 'man portrait',
    linkedinUrl: 'https://linkedin.com/in/rajpatel',
  },
  {
    id: 'mentor-3',
    name: 'Priya Sharma',
    experience: 'Machine Learning Scientist @ Amazon | 6+ Years in AI & Data Science',
    photo: 'https://placehold.co/300x300.png',
    dataAiHint: 'woman software',
    linkedinUrl: 'https://linkedin.com/in/priyasharma',
  },
  {
    id: 'mentor-4',
    name: 'Vikram Singh',
    experience: 'Cybersecurity Analyst | 7+ Years in Network Security & Ethical Hacking',
    photo: 'https://placehold.co/300x300.png',
    dataAiHint: 'man tech',
    linkedinUrl: 'https://linkedin.com/in/vikramsingh',
  },
];

export const PLACEHOLDER_ARTICLES: Article[] = [
  {
    slug: 'demystifying-big-o-notation',
    title: 'Demystifying Big O Notation: A Beginner\'s Guide',
    summary: 'Understand the core concepts of Big O notation and why it\'s crucial for analyzing algorithm efficiency. Learn with simple examples.',
    date: '2024-07-15',
    author: 'Dr. Algorithm',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'abstract algorithm',
    tags: ['DSA', 'Big O Notation', 'Algorithms'],
    content: `
      <h2>Introduction to Big O Notation</h2>
      <p>Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, it's used to classify algorithms according to how their run time or space requirements grow as the input size grows.</p>
      <h3>Why is it important?</h3>
      <p>Understanding Big O helps in choosing the most efficient algorithm for a problem, especially when dealing with large datasets. It provides a high-level understanding of an algorithm's performance.</p>
      <h3>Common Big O Complexities:</h3>
      <ul>
        <li><strong>O(1) - Constant Time:</strong> The algorithm takes the same amount of time regardless of the input size.</li>
        <li><strong>O(log n) - Logarithmic Time:</strong> The time taken increases logarithmically with the input size. Common in search algorithms like binary search.</li>
        <li><strong>O(n) - Linear Time:</strong> The time taken is directly proportional to the input size. Common in algorithms that iterate through an array once.</li>
        <li><strong>O(n log n) - Linearithmic Time:</strong> Common in efficient sorting algorithms like Merge Sort and Quick Sort.</li>
        <li><strong>O(n^2) - Quadratic Time:</strong> The time taken is proportional to the square of the input size. Common in algorithms with nested loops, like Bubble Sort.</li>
      </ul>
      <p>This is a simplified overview. For a deeper dive, consider enrolling in our DSA Mastery Bootcamp!</p>
    `
  },
  {
    slug: 'common-pitfalls-in-learning-recursion',
    title: 'Common Pitfalls in Learning Recursion (And How to Avoid Them)',
    summary: 'Recursion can be tricky. This article highlights common mistakes beginners make and provides tips for mastering recursive thinking.',
    date: '2024-07-20',
    author: 'Recursive Guru',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'code problem',
    tags: ['DSA', 'Recursion', 'Problem Solving'],
     content: `
      <h2>Understanding Recursion</h2>
      <p>Recursion is a powerful programming technique where a function calls itself to solve smaller instances of the same problem. While elegant, it can be a source of confusion for many learners.</p>
      <h3>Pitfall 1: Missing Base Case</h3>
      <p>The most common error is forgetting or incorrectly defining the base case. Without a base case, a recursive function will call itself indefinitely, leading to a stack overflow error.</p>
      <p><strong>Solution:</strong> Always define a clear base case that stops the recursion.</p>
      <h3>Pitfall 2: Not Changing Arguments Towards Base Case</h3>
      <p>Each recursive call must modify its arguments in such a way that it moves closer to the base case. If the arguments don't change or change incorrectly, the base case might never be reached.</p>
      <p><strong>Solution:</strong> Ensure each recursive step progresses towards the base condition.</p>
      <h3>Pitfall 3: Stack Overflow Errors</h3>
      <p>Even with a correct base case, recursion on very large inputs can exhaust the call stack. This is because each function call consumes memory on the stack.</p>
      <p><strong>Solution:</strong> For very deep recursions, consider iterative solutions or techniques like tail call optimization (if supported by the language/compiler).</p>
      <p>Mastering recursion takes practice. Work through examples and visualize the call stack to build intuition.</p>
    `
  },
  {
    slug: 'choosing-the-right-data-structure',
    title: 'Choosing the Right Data Structure: Arrays vs. Linked Lists',
    summary: 'A practical comparison of Arrays and Linked Lists, helping you decide which data structure to use for different scenarios in DSA.',
    date: '2024-07-25',
    author: 'Structy McStructureface',
    image: 'https://placehold.co/800x450.png',
    dataAiHint: 'data flow',
    tags: ['DSA', 'Data Structures', 'Arrays', 'Linked Lists'],
    content: `
      <h2>Arrays vs. Linked Lists</h2>
      <p>Arrays and Linked Lists are fundamental data structures, but they have different characteristics that make them suitable for different tasks.</p>
      <h3>Arrays</h3>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Fast random access (O(1)) if you know the index.</li>
        <li>Memory efficient as elements are stored contiguously.</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Fixed size (in many languages, or requires resizing which can be O(n)).</li>
        <li>Slow insertion and deletion in the middle (O(n)) as elements need to be shifted.</li>
      </ul>
      <h3>Linked Lists</h3>
      <p><strong>Pros:</strong></p>
      <ul>
        <li>Dynamic size, can grow or shrink easily.</li>
        <li>Efficient insertion and deletion (O(1)) if you have a pointer to the node before/after.</li>
      </ul>
      <p><strong>Cons:</strong></p>
      <ul>
        <li>Slow access to elements (O(n)) as you need to traverse from the head.</li>
        <li>Requires extra memory for pointers.</li>
      </ul>
      <h3>When to use which?</h3>
      <p>Use <strong>Arrays</strong> when:</p>
      <ul>
        <li>You need frequent random access to elements.</li>
        <li>The size of the collection is known or doesn't change much.</li>
      </ul>
      <p>Use <strong>Linked Lists</strong> when:</p>
      <ul>
        <li>You need frequent insertions and deletions.</li>
        <li>The size of the collection is dynamic and unpredictable.</li>
      </ul>
      <p>Understanding these trade-offs is key to effective problem-solving in DSA.</p>
    `
  },
];
