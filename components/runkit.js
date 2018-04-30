const Embed = require('react-runkit')
 
const helloSource = `console.log('Hello, world!')`
 
module.exports = class HelloEmbed extends React.Component {
    run() {
        this.refs.embed.evaluate()
    }
    
    render() {
        return <Embed source={ helloSource } readOnly={ true } ref='embed' onLoad={ this.run.bind(this) }/>
    }
}