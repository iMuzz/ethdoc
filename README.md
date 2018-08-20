> ⚠️This tool is in **alpha**  and has not yet been officially released. The instructions below will not work.

<br />

<h2 align="center">
<img src="https://file-qdxymcjlzd.now.sh/" alt="">
</h2>

<p align="center">
  <i>Automatically generate beautiful documentation for your Ethereum smart contracts.</i>
  <br/>
  <br/>
  <img src="https://user-images.githubusercontent.com/7297269/44291274-32d9d000-a232-11e8-93a8-9180ee85399e.png" alt="ETHDoc" width="800" />
</p>

This repository contains the source code for the frontend portion of [**EthDoc**](https://ethdoc.io). An Open Source developer tool that generates documentation for Smart Contracts using [Ethereum Natural Specification Format](https://github.com/ethereum/wiki/wiki/Ethereum-Natural-Specification-Format). The project is split into two parts, the [CLI](https://github.com/iMuzz/ethdoc-cli) and frontend (the repo you're currently on).

<br />

## Getting Started
The easiest way to get started with EthDoc is through the [CLI](https://github.com/iMuzz/ethdoc-cli). Follow the instructions below to get started!

##### 1. Install NPM Package
```
$ npm install ethdoc --save
```

##### 2. Initialize Ethdoc within your Ethereum project

```
$ ethdoc init
```
This may take a few minutes. You only have to run this command the first time you integrate EthDoc into an Ethereum Project.

##### 3. Generate documentation

```
$ ethdoc generate contracts/ -s
```

Pass the name of the folder where your contracts are. In the example above, we chose `contracts/`. But if your contracts reside in some `otherDirectory/` you can just pass it in as an argument. Here's an example below: 
```
$ ethdoc generate otherDirectory/ -s
```

##### 4. Check out your documentation 

🎉 Navigate to http://localhost:3000 to check out your docs 🎉

<br />

## Development

EthDoc was built using [Next.js](https://github.com/zeit/next.js/) which is a framework created by the awesome people over at [Zeit](https://zeit.co/)!

##### 1. Install Dependencies
```
$ npm install
```

##### 2. Start your server
```
$ npm run dev
```

Navigate to http://localhost:3000 to see your changes. All changes are automatically reflected in the browser without having to refresh thanks to Next.js 😍

### Contributors
- Faraaz Nishtar ([iMuzz](https://github.com/iMuzz))
- Achal Srinivasan ([achalvs](https://github.com/achalvs))

## License
[MIT](https://github.com/iMuzz/ethdoc/blob/master/LICENSE)
