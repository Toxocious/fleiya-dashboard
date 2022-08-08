<div align="center">
  <img src="./static/PokeOne.ico" title="Fleiya Dashboard Logo" alt="Fleiya Dashboard Logo" height='64' width='64' />
  <h1 align="center">Fleiya Dashboard</h1>

  **Fleiya Dashboard** is the web-facing user interface for Fleiya &mdash; an injectable Windows .dll that enhances the user's playing experience with quality-of-life updates &mdash; which provides the end-user with a variety of information &mdash; Pok&eacute;dex information, item information, guides for in-game content, and more &mdash; in a single place.

  This is meant to be an extension to &mdash; or even replacement of &mdash; [Pok&eacute;One Community](https://pokeonecommunity.com/) once it is finished, as the Pok&eacute;One Community website is often quite slow and lacks a fair bit of useful information.

  <img src="https://img.shields.io/github/issues/Toxocious/fleiya-dashboard?style=for-the-badge&logo=appveyor" />
  <img src="https://img.shields.io/github/forks/Toxocious/fleiya-dashboard?style=for-the-badge&logo=appveyor" />
  <img src="https://img.shields.io/github/stars/Toxocious/fleiya-dashboard?style=for-the-badge&logo=appveyor" />
  <img src="https://img.shields.io/github/license/Toxocious/fleiya-dashboard?style=for-the-badge&logo=appveyor" />
  <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FToxocious%2Ffleiya-dashboard">
    <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FToxocious%2Ffleiya-dashboard&countColor=%2337d67a" />
  </a>
</div>



## Table of Contents
- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
  - [General Stance](#general-stance)
- [License](#license)



## About The Project
### Tech Stack
**Client**
- Node.js
- React
- TypeScript
- Express
- MongoDB
- Axios
- tRPC

**Server**
- Node.js
- Express
- MongoDB
- TypeScript
- tRPC

### Features
- Tracks the latest news in game, such as event releases or new regions
- Provides a vast number of in-depth guides for various pieces of content
- Provides a Pok&eacute;dex containing each Pok&eacute;mon's base stats, abilities, obtainable location data, and more
- Provides an Itemdex containing each item's information (description, stack limit, whether it's obtainable in game) and where it can be obtained in game
- Provides a variety of useful tools
  - Calculate the Hidden Power type of a Pok&eacute;mon based on a set of IVs
  - Calculate the needed Trainer Exp. to go from one trainer level to the next
- ... and more



## Getting Started
### Prerequisites
This project requires that Node.js is installed on your system.

Yarn is used as the package manager here, so make sure that it's installed.
```bash
npm i -g yarn
```

### Installation
1. Clone this repository onto your local machine.

```sh
git clone -r https://github.com/Toxocious/fleiya-dashboard
```

2. From your terminal, enter the ``fleiya-dashboard`` directory.
```sh
cd PATH/TO/fleiya-dashboard
```

3. Install all of the required packages for the project.
```sh
yarn install
```

4. Start up the client and server (uses the Concurrently npm package).
```sh
yarn dev
```

5. Visit the links displayed in your terminal to see the client-side and server-side



## Contributing
### General Stance
If you would like to contribute to this project, follow the process below, and await a response on your pull request.

1. Fork the Project
2. Create your Feature Branch (``git checkout -b feature/AmazingFeature``)
3. Commit your Changes (``git commit -m 'Add some AmazingFeature'``)
4. Push to the Branch (``git push origin feature/AmazingFeature``)
5. Open a Pull Request



## License
This project is licensed under GNU GPL 3.

For more information about the license, check out the [LICENSE](LICENSE).
