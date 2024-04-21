# NovaGaming - Game E-Commerce Store

Welcome to NovaGaming, the ultimate destination for all your gaming needs! NovaGaming is an e-commerce platform built using Next.js, MongoDB, and Mongoose. This project serves as the final project for Group A of the Edgemony Coding Bootcamp CB8 2023/2024.

## Features

- Browse a vast collection of games available for purchase.
- Add games to your Wishlist for easy tracks.
- Add games to your Cart for easy checkout.
- Finally get your own games in your Library.
- User authentication using custom middleware for secure access with Hashed password 256-bit.
- Integration with a third-party API for fetching game data.
- Responsive design with SCSS for a seamless experience across devices.

## Technologies Used

- **JavaScript**: JavaScript is the programming language used for both frontend and backend development in NovaGaming.
- **Next.js**: Next.js is a React framework that enables server-side rendering and simplifies the setup of React applications.
- **MongoDB**: MongoDB is a NoSQL database used for storing user/games data and guest information.
- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution for modeling application data.
- **Custom Middleware**: Custom middleware is implemented for user authentication, ensuring secure access to protected routes.
- **JSON Web Token (JWT)**: JWT is used for securely transmitting information between parties as a JSON object. In NovaGaming, JWT is utilized for authentication and creating access tokens. The Bearer token authentication scheme is used, where the token is included in the Authorization header as `Bearer <token>`.
- **bcrypt**: bcrypt is a password hashing function designed to securely store passwords. In NovaGaming, bcrypt is employed for hashing user passwords before storing them in the database.
- **SASS**: (SCSS) is used for styling the application, offering features like variables, nesting, and mixins for enhanced CSS authoring.

## Getting Started

To get started with NovaGaming locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up a MongoDB database either locally or using a cloud service like MongoDB Atlas.
4. Create a `.env.local` file in the root directory and define the following environment variables: ACCESSTOKEN_SECRET= / DATABASE_URI= / NEXT_PUBLIC_API_KEY=
5. Run the development server using `npm run dev`.
6. Visit `http://localhost:3000` in your web browser to access NovaGaming in local.
7. Visit `https://a-team-final-project-cb8.vercel.app/` in your web browser to access NovaGaming Deployment.

## Contributing

Contributions to NovaGaming are welcome! If you have any ideas for features, enhancements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback regarding NovaGaming, please contact the project maintainers:

- Roberto Chiara - https://github.com/RobertoChiara
- Celeste Massaro - https://github.com/MCelesteMassaro
- Christian Schillaci - https://github.com/ChriSchillaci
- Andrea Torrisi - https://github.com/AndreaTorris
- Alex Venutelli - https://github.com/AlexVenutelli

## Acknowledgements

We would like to express our sincere gratitude to the following individuals who have played pivotal roles in the development and success of NovaGaming:

- **Giuseppe Senettone**: As our team leader, Giuseppe has been instrumental in guiding us through the project, inspiring us with ideas, and offering invaluable assistance whenever we encountered challenges.

- **Marco Guglielmino**: We extend our appreciation to Marco for serving as our mentor throughout the Edgemony Coding Bootcamp. His guidance, expertise, and encouragement have been invaluable in our learning journey.

- **Casimiro Ciancimino**: We are grateful to Casimiro for imparting his knowledge of coding and philosophy during the bootcamp. His teachings have greatly enriched our understanding and approach to software development.

Thank you, Giuseppe, Marco, and Casimiro, for your unwavering support, mentorship, and inspiration.

We are grateful for your assistance and encouragement throughout this journey.

Thank you for using NovaGaming!
