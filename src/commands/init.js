const fs = require('fs');
const path = require('path');

const {Command, flags} = require('@oclif/command');
const configTemplate = require('../configTemplate');

class InitCommand extends Command {
  async run() {
    const {flags} = this.parse(InitCommand)

    const name = flags.name || 'world'
    const currentWorkingDir = `${process.cwd()}`

    this.createConfigFile();
  }

  async createConfigFile() {
    fs.writeFile('.ethdocconfig', configTemplate, (err) => {
      if (err) {
        this.log('We tried creating .ethdocconfig but ran into an issue. Please check your permissions.')
        throw err;
      } else {
        console.log('creating')
      }
    });
  }
}

InitCommand.description = `Initializes the current directory as an EthDoc directory.
...
Extra documentation goes here
`

InitCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = InitCommand
