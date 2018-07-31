/* eslint-disable */

const {Command, flags} = require('@oclif/command')
const {Compiler} = require('@0xproject/sol-compiler')

class EthdocCommand extends Command {
  async run() {
    // can gets args as an object
    const {args} = this.parse(EthdocCommand)
    const {file} = args

    const currPath = `${process.cwd()}/`
    console.log(`\ncurrent PATH: ${currPath}\n`)
    console.log(`current FILE: ${file}\n`)

    const compilerOptions = {
      contracts: ['TokenRegistry', 'Ownable_v1'],
      artifactsDir: `./artifacts`,
      contractsDir: `${currPath}/contracts`,
      compilerSettings: {
        outputSelection: {
          ['*']: {
            ['*']: ['abi', 'devdoc'],
          },
        },
      },
      solcVersion: '0.4.19',
    }

    const compiler = new Compiler(compilerOptions)
    compiler.compileAsync().then((t) => {
      console.log(`we're in here!`, t)
    })

    // console.log(`The user passed in: ${args.file}`);
  }
}

EthdocCommand.args = [
  {
    name: 'file',
    // required: true,
    description: 'The solidity file you want to generate documentation for \'/yourpath/tokenRegistry.sol\'',
  },
]

EthdocCommand.description = `Describe the command here
...
Extra documentation goes here
`

EthdocCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = EthdocCommand
