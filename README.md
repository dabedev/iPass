# iPass

iPass is a powerful password management software designed to securely store and organize your sensitive login information. With iPass, you can generate strong and unique passwords, sync them across your devices, and easily autofill them into your favorite websites and apps. With features like multi-factor authentication, iPass helps you keep your passwords safe and gives you peace of mind knowing that your online accounts are secure.

## Table of Contents

- [iPass](#ipass)
  - [Table of Contents](#table-of-contents)
  - [Client](#client)
    - [Client's installation](#clients-installation)
    - [Client's usage](#clients-usage)
  - [Server](#server)
    - [Server's installation](#servers-installation)
    - [Server's usage](#servers-usage)
  - [Contributing](#contributing)
  - [TODO](#todo)

## Client

### Client's installation

To install the client, follow these steps:

- Navigate to the `client` directory

```sh
cd iTools/client
```

- Install the required dependencies using `npm`

```sh
npm ci
```

### Client's usage

To use the client, follow these steps:

- For development, run the following command in the `client` directory:

```sh
npm run dev
```

This will start the development server and open the client application in your default browser.

- For production, run the following command in the `client` directory:

```sh
npm run build
```

This will create a production build of the client application in the `build` directory of the `client` folder. You can then serve this directory using a web server of your choice.

## Server

### Server's installation

To install the server, please follow these steps:

- Navigate to the server directory

```sh
cd iTools/server
```

- Install the required dependencies using `npm`

```sh
npm ci
```

### Server's usage

To use the server, follow these steps:

- For development, run the following command in the `server` directory:

```sh
npm test
```

This will start the server in development mode, allowing you to make changes to the code and see the results in real time.

- For production, run the following command in the `server` directory:

```sh
npm start
```

  This will start the server in production mode, allowing you to serve the application using a web server of your choice.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Make your changes
3. Submit a pull request

Bug reports and feature requests can be submitted through the Issues tab.

## TODO

 * [ ] EVERYTHING
