![](https://i.imgur.com/zLHQchL.png)


> ⚠️This tool is in **alpha**  and has not yet been officially released. The instructions below will not work 

Automatically generate beautiful documentation for your Ethereum (`.sol`) smart contracts.

> This repository contains source code for the **frontend** of [**Ethdoc**](https://ethdoc.io), an open-source developer tool to generate documentation for Solidity smart contracts using the [Ethereum Natural Specification Format](https://github.com/ethereum/wiki/wiki/Ethereum-Natural-Specification-Format). To find the **CLI**, please visit the [other repo](https://github.com/iMuzz/ethdoc-cli).

### Getting Started
The easiest way to get started with Ethdoc is through the [CLI](https://github.com/iMuzz/ethdoc-cli). Follow the instructions below to get started!

##### 1. Install NPM Package
```
$ npm install ethdoc --save
```

##### 2. Initialize Ethdoc within your Ethereum project

```
$ ethdoc init
```
This may take a few minutes. You only have to run this command the first time you integrate Ethdoc into an Ethereum Project.

##### 3. Generate documentation

```
$ ethdoc generate contracts/ -s
```

Pass the name of the folder where your contracts are. In the example above, we chose `contracts/`. But if your contracts reside in some `otherDirectory/` you can just pass it in as an argument. Here's an example below: 
```
$ ethdoc generate otherDirectory/ -s
```

##### 4. Check out your documentation 

🎉 Navigate to `localhost:3000` to check out your docs 🎉


### Development

Ethdoc is built using [Next.js](https://github.com/zeit/next.js/) which is a framework created by the incredible team at [ZEIT](https://zeit.co/).

##### 1. Install Dependencies
```
$ npm install
```

##### 2. Start your server
```
$ npm run dev
```

Navigate to http://localhost:3000 to see your changes. All changes are automatically reflected in the browser without having to refresh, thanks to [Next.js](https://nextjs.org)! 😍

### Contributors
- Faraaz Nishtar ([iMuzz](https://github.com/iMuzz))
- Achal Srinivasan ([achalvs](https://github.com/achalvs))

### License
[MIT](https://github.com/iMuzz/ethdoc/blob/master/LICENSE)
