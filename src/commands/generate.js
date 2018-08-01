const {Command, flags} = require('@oclif/command');

class GenerateCommand extends Command {
  async run() {
    const {flags} = this.parse(GenerateCommand);

    this.log(`\nCompiling contracts..`);
  }
}

GenerateCommand.description = `Generates documentation for contracts located in the ./contracts directory`

GenerateCommand.flags = {
  file: flags.string({
    char: 'f',                    // shorter flag version
    description: 'name of solidity file to compile/generate documentation for', // help description for flag
    required: false,              // make flag required (this is not common and you should probably use an argument instead)
  })
}

module.exports = GenerateCommand;
