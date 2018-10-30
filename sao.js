const superb = require('superb')

module.exports = {
  prompts: {
    name: {
      message: 'Project name',
      default: ':folderName:'
    },
    description: {
      message: 'Project description',
      default: `My ${superb()} Google Apps Script project`
    },
    language: {
      message: 'Choose a language type',
      choices: [
        {name:'TypeScript',value:'ts'},
        {name:'JavaScript(Legacy)',value:'js'}
      ],
      type: 'list',
      default: 'ts'
    },
    lint: {
      message: ({language}) => `Use ts-lint`,
      type: 'list',
      choices: ['yes', 'no'],
      default: 'yes',
      when: ({language}) => language==='ts'
    },
    jest: {
      message: ({language}) => 'Use ts-jest',
      message: 'Use jest',
      type: 'list',
      choices: ['yes', 'no'],
      default: 'yes',
      when: ({language}) => language==='ts'
    },
    author: {
      type: 'string',
      message: 'Author name',
      default: ':gitUser:',
      store: true
    },
    pm: {
      message: 'Choose a package manager',
      choices: ['npm', 'yarn'],
      type: 'list',
      default: 'npm'
    }
  },
  filters: {
    'src/*.ts': 'language === "ts"',
    'src/*.js': 'language === "js"',
    '.tslintrc.js': 'lint === "yes"',
    'jest.config.js': 'jest === "yes"',
  },
  move: {
    'gitignore': '.gitignore'
  },
  showTip: true,
  gitInit: true,
  installDependencies: true
}
