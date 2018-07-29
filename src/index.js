const {Command, flags} = require('@oclif/command')

class EthdocCommand extends Command {
  async run() {
    // can get args as an object
    const {args} = this.parse(EthdocCommand)

    console.log(args)
  }
}

EthdocCommand.args = [
  {name: 'firstArg'},
  {name: 'secondArg'},
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
