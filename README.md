# E-Commerce Website Using MERN Stack

Welcome to the E-Commerce Website repository! This project uses the MERN stack (MongoDB, Express.js, React.js, Node.js). It is designed to be a flexible platform for selling various products, although it can also be adapted for various other purposes.

## Features

- User authentication using JWT tokens
- Admin panel for managing products and users
- RESTful API for backend functionality
- MongoDB is used as the database for storing data
- React.js for the frontend user interface

## Installation

To get started with the project, follow these steps:

1. Clone the repository to your local machine:
```
git clone https://github.com/TechieTripathi/E-commerce_using_MERN_stack.git
```

2. Navigate to the project directory:
```
cd E-commerce_using_MERN_stack
```

3. Install dependencies for both the backend and frontend:
```
cd backend
npm install
cd ../frontend
npm install
```

4. Set up your MongoDB database and configure the connection in the backend. Create a .env file in the backend directory with your MongoDB connection string and other necessary environment variables.

5. Start the backend server:
```
cd ../backend
npm start
```

6. Start the frontend development server:
```
cd ../frontend
npm start
```

7. Access the application in your web browser at http://localhost:3000.

## Usage 
1. Users can browse available products and make purchases.
2. Admins can log in to the admin panel to manage products and user accounts.
   
## Payment Integration with Dummy Stripe

This project includes integration with a dummy Stripe payment system for handling transactions. The integration allows users to make purchases securely using test card details provided by Stripe.

### Usage

1. Ensure you have obtained your test API keys from the Stripe Dashboard.
2. Configure your Stripe test API keys in the backend of the application.
3. Utilize the provided test card details from Stripe to simulate transactions in your application.
4. Test the checkout process thoroughly to ensure proper functionality.

For more information on integrating Stripe with your application, refer to the [Stripe documentation](https://stripe.com/docs).

### Note

Remember to replace the test API keys with live keys before deploying your application for production use.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## Contact
If you have any questions or suggestions, feel free to reach me at vishnu.tripathi.2004@gmail.com.
