import type { NavItem, Course, Mentor, Article, Testimonial } from '@/types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '#courses-section' },
  { label: 'Mentors', href: '#mentors-section' },
  // { label: 'Blog', href: '/blog' }, // Removed Blog link
  { label: 'Testimonials', href: '#testimonials-section' }, // Added Testimonials link
  { label: 'Contact', href: '#contact-section' },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: 'About Us', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Careers', href: '#' },
];

export const SOCIAL_LINKS: NavItem[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/people/Code-Yuva/61576738535747/', external: true },
  // { label: 'Twitter', href: '#', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/code.yuva?igsh=MXZhcTgwMGhpeTl6Nw==', external: true },
  { label: 'LinkedIn', href: '#', external: true },
];


export const PLACEHOLDER_COURSES: Course[] = [
  {
    id: 'dsa-mastery',
    title: 'Master Data Structure and Algorithms in Java',
    description: 'Conquer data structures and algorithms with hands-on projects and expert guidance.',
    syllabusOverview: ['Basics of Programming', 'Functions & Arrays', 'String,String Builder & Array List', 'Recursion & Backtracking', 'Sorting & Searching','Time & Space Complexity','Dynamic Programming & OOPs','Stack,Queue&Linked List','Tree & BST','Hashmap & Heap','Graph & Bitmasking'],
    duration: '4/6 Months Course',
    whoShouldJoin: ['Aspiring Software Engineers', 'Students preparing for interviews', 'Developers seeking to strengthen fundamentals'],
    image: '/images/dsapicture.png',
    dataAiHint: 'coding data',
  },
  {
    id: 'fullstack-pro',
    title: 'Master Full Stack Web Development with node.js(MERN)',
    description: 'Become a full-stack developer by mastering frontend and backend technologies.',
    syllabusOverview: ['Master HTML5', 'CSS & Tailwind', 'JavaScript ES6+', 'React.js','Git & GitHub', 'Node.js & Express.js', 'MongoDB','REST APIs', 'Live Project Deployment'],
    duration: '4/6 Months Course',
    whoShouldJoin: ['Beginners in web development', 'Designers wanting to code', 'Entrepreneurs building web apps'],
    image: '/images/mernPicture.webp',
    dataAiHint: 'web development',
  },
  {
    id: 'ml-foundations',
    title: 'Master Machine Learning',
    description: 'Dive into the world of AI and Machine Learning with practical examples and projects.',
    syllabusOverview: ['Python for ML', 'Supervised Learning', 'Unsupervised Learning', 'Neural Networks Basics', 'Model Evaluation'],
    duration: '4/6 Months Course',
    whoShouldJoin: ['Data Science Enthusiasts', 'Analysts looking to upskill', 'Engineers curious about AI'],
    image: '/images/mlpicture.webp',
    dataAiHint: 'machine learning',
  },
];

export const PLACEHOLDER_MENTORS: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Prakash Kumar Prasad',
    experience: 'Ex-Product Engineer and Java Mentor @ Coding Blocks | NSUT Delhi Alumnus | 5+ Years experience in teaching | passionate about simplifying complex tech concepts for students',
    photo: '/images/PrakashKr.png',
    dataAiHint: 'woman portrait',
    linkedinUrl: 'https://www.linkedin.com/in/prakash-kumar-464a63169/',
  },
  {
    id: 'mentor-2',
    name: 'Pawan kumar',
    experience: 'Software Development Engineer, SDE-II @ Amazon | NSUT Delhi Alumnus | 6+ Years in Industry Experience | Built Real-Time Systems for Millions of Users',
    photo: '/images/PawanSir.png',
    dataAiHint: 'man portrait',
    linkedinUrl: 'https://www.linkedin.com/in/pawan-kumar-375b53141/',
  },
  {
    id: 'mentor-3',
    name: 'Harsh Sharma',
    experience: 'Ph.D. doctoral candidate MARS Lab @ Washington State University Pullman | Published 4+ international research papers in the field of AI/ML | Strong academic foundation with global exposure and deep subject expertise ',
    photo: '/images/harsh.jpg',
    dataAiHint: 'woman software',
    linkedinUrl: 'https://www.linkedin.com/in/harshari/',
  },
  // {
  //   id: 'mentor-4',
  //   name: 'Vikram Singh',
  //   experience: 'Cybersecurity Analyst | 7+ Years in Network Security & Ethical Hacking',
  //   photo: '/images/PrakashKr.png',
  //   dataAiHint: 'man tech',
  //   linkedinUrl: 'https://linkedin.com/in/vikramsingh',
  // },
];

export const PLACEHOLDER_ARTICLES: Article[] = [
  {
    slug: 'demystifying-big-o-notation',
    title: 'Demystifying Big O Notation: A Beginner\'s Guide',
    summary: 'Understand the core concepts of Big O notation and why it\'s crucial for analyzing algorithm efficiency. Learn with simple examples.',
    date: '2024-07-15',
    author: 'Dr. Algorithm',
    image: '/images/download.jpeg',
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
    image: '/images/download.jpeg',
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
    image: '/images/download.jpeg',
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

export const PLACEHOLDER_TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    company: 'Google',
    message: 'The DSA course at Code Yuva was instrumental in helping me land my dream job at Google. The concepts were explained clearly, and the hands-on practice was invaluable.'
  },
  {
    id: 'testimonial-2',
    name: 'David Chen',
    company: 'Microsoft',
    message: 'I highly recommend the Full-Stack Development course. The instructors were fantastic, and I gained the skills and confidence to build real-world applications.'
  },
  {
    id: 'testimonial-4',
    name: 'Emily Rodriguez',
    company: 'Meta',
    message: 'Code Yuva\'s mentors are incredibly supportive. Their guidance during my interview preparation was key to my success in getting an offer from Meta.'
  },
  {
    id: 'testimonial-5',
    name: 'Michael Lee',
    company: 'Apple',
    message: 'The practical projects in the courses are top-notch. Building real applications with Code Yuva gave me the edge I needed to get hired at Apple.'
  },

  {
    id: 'testimonial-3',
    name: 'Amit Patel',
    company: 'Amazon',
    message: 'The Machine Learning course provided a solid foundation in AI. The projects were engaging, and I felt well-prepared to work on ML tasks after completing it.'
  }
];
