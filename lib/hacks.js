import files from '../artifacts/files'

const contractNames = Object.keys(files)
const data = files[contractNames[0]]

function parseFunctionName(name) {
  return name.split('(')[0]
}

const contractAbi = data.compilerOutput.abi
const devdoc = data.compilerOutput.devdoc

const methodNames = Object.keys(devdoc.methods).map(parseFunctionName)

const steps = contractAbi
  .map(meth => {
    const methodDevdoc = getMethodDevdoc(meth.name, devdoc.methods)

    if (methodDevdoc) {
      meth.devdoc = methodDevdoc
    }
    return meth
  })
  .filter(abi => abi.devdoc)
  .filter(abi => abi.devdoc.details)

function getMethodDevdoc(methodName, devDocMethods) {
  let answer

  Object.keys(devDocMethods).forEach(key => {
    if (parseFunctionName(key) === methodName) {
      answer = devDocMethods[key]
    }
  })

  return answer
}

export default steps
