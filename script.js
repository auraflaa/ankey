// Content data to be dynamically loaded
const content = {
    home: `
        <section>
            <h1>Welcome to My Portfolio!</h1>
            <p>This is the homepage of Priyangshu Mukherjee's portfolio. Navigate through the sections to learn more about me.</p>
        </section>
    `,
    about: `
        <section>
            <h2>About Me</h2>
            <img src="https://github.com/auraflaa/fullstack/blob/main/Screenshot%202024-10-28%20115012.png?raw=true" 
                 alt="Profile Picture" class="profile-pic">
            <p>Hello! I’m Priyangshu Mukherjee, a passionate learner with interests in programming, problem-solving, and generative AI.</p>
        </section>
    `,
    education: `
        <section>
            <h2>Educational Qualifications</h2>
            <table>
                <thead>
                    <tr>
                        <th>Institute of Education</th>
                        <th>Marks Obtained</th>
                        <th>Name of Board</th>
                        <th>Passing Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>R.M.S International School</td>
                        <td>78%</td>
                        <td>CBSE</td>
                        <td>2022</td>
                    </tr>
                    <tr>
                        <td>S.G.P.T.A PU College</td>
                        <td>96.8%</td>
                        <td>State Board</td>
                        <td>2024</td>
                    </tr>
                </tbody>
            </table>
        </section>
    `,
    skills: `
        <section>
            <h2>Skills</h2>
            <ul>
                <li>Programming in Python, C, and C++</li>
                <li>Basic Web Development (HTML)</li>
                <li>Generative AI</li>
                <li>Problem Solving</li>
                <li>Logical Thinking and Problem Analysis</li>
            </ul>
        </section>
    `,
    certificates: `
        <section>
            <h2>Certificates</h2>
            <ul>
                <li>The Basics of Google Cloud Compute - Google Cloud Skill Boost</li>
                <li>Introduction to Generative AI - Google Cloud Skill Boost</li>
                <li>Introduction to Large Language Models - Google Cloud Skill Boost</li>
                <li>Google Cloud Essentials - Google Cloud Skill Boost</li>
                <li>Google Ads for Beginners - Coursera</li>
            </ul>
        </section>
    `,
    hobbies: `
        <section>
            <h2>Hobbies</h2>
            <ul>
                <li>Reading Books</li>
                <li>Playing Chess</li>
                <li>Learning</li>
            </ul>
        </section>
    `,
    contact: `
        <section>
            <h2>Contact Me</h2>
            <form id="contactForm">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit">Submit</button>
            </form>
            <p id="formMessage"></p>
        </section>
    `
};

// Function to load content dynamically
function loadContent(section) {
    const contentArea = document.getElementById('content');
    contentArea.innerHTML = content[section];

    // Add form submission handling for the contact page
    if (section === 'contact') {
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            document.getElementById('formMessage').textContent = "Thank you for your message!";
        });
    }
}

// Load the default page (home)
window.onload = () => loadContent('home');
