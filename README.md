Introducing the Musik Share App: Seamlessly Convert Playlists Across Platforms
Music has always played a significant role in our lives, and with the rise of digital streaming platforms, it’s now easier than ever to access our favorite tunes. But switching between platforms while keeping our beloved playlists intact can be a challenge. Enter the Musik Share App, a project developed by Abosede ogundipe to solve this problem. The app allows users to seamlessly convert their playlists from one music streaming service to another, whether it's Spotify, Apple Music, YouTube Music, or others.

Team Members and Roles
The project was created by myself. I sorted for assistant from my senior peer based on my  strengths and interests:

Abosede ogundipe: Frontend and backend developer, responsible for the app’s core functionality and playlist conversion logic.
Abosede ogundipe: Worked on the API integrations, ensuring that the app communicates effectively with different music streaming services.
Abosede ogundipe: Focused on UI/UX design, making sure the app is intuitive and easy to use for a variety of users.
The project was developed over the course of one week, from September 11 to September 18, 2024, with intense focus on delivering an MVP that demonstrates playlist conversions in real-time.

Why This Project?
The inspiration behind this project stems from my own experience as a music lover who frequently switches between streaming platforms. I often found myself re-creating playlists manually, which was both time-consuming and frustrating. This sparked an idea—what if there was an easier way to migrate playlists from one service to another with just a few clicks?

Growing up, music was always a part of my daily routine, whether it was playing in the background while I studied or providing the soundtrack to family gatherings. As I transitioned into tech, I wanted to create something that combined my passion for music with my growing skills in software engineering. Musik Share App is the result of that journey.

What I Accomplished
The Musik Share App’s primary function is to allow users to:

Select a source platform and a target platform.
Authenticate via OAuth for both platforms.
Transfer their playlists in just a few simple steps, complete with metadata like album artwork and track order.
i built the backend using Node.js for its event-driven, non-blocking architecture, making it well-suited for handling multiple API requests. For the frontend, we opted for React due to its flexibility in creating dynamic user interfaces. We also integrated Spotify API and YouTube Music API to allow for real-time playlist conversion.

One of the most exciting features of the app is the real-time progress bar that updates users on the status of their playlist transfer. Additionally, we implemented a notification system that alerts users once the conversion is complete.

The Most Challenging Technical Hurdle
One of the biggest technical challenges we faced was managing the different authentication flows for each streaming platform. Some services, like Spotify, offer relatively straightforward OAuth implementations, while others, like Apple Music, have more restrictive security protocols.

At one point, we ran into a blocker with Apple Music’s API, where the authentication token we received wasn’t being accepted for API requests. With less than 24 hours to the deadline, I took the lead in troubleshooting the issue. After combing through documentation and consulting with peers, we discovered that the problem was related to the expiration time of the tokens. I quickly implemented a solution to refresh tokens before making any API calls, which resolved the issue just in time for our final presentation.

Lessons Learned
This project taught me a great deal about API integration, OAuth authentication, and how to efficiently troubleshoot under pressure. If I were to do it again, I would prioritize API research earlier in the project timeline to avoid the last-minute rush. I also learned how critical communication and teamwork are in ensuring the project’s success.

In the future, I see myself building more tools that bridge the gap between creative and technical fields, just like this project.

About Me
I am Abosede ogundipe, a software engineer in training with a passion for developing tools that enhance user experiences in creative spaces. This project is a reflection of my love for music,UI/UX Design and my dedication to solving real-world problems through technology. You can find the GitHub repository for the Musik Share App here, check out the live project here, and connect with me on LinkedIn here.

linkedlin:https://www.linkedin.com/in/abosede-oluwasheyi-ogundipe-8b73191b2/
  
