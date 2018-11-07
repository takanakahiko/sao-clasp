const superb = require('superb')

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'Project name',
        default: this.outFolder
      },
      {
        name: 'description',
        message: 'Project description',
        default: `My ${superb()} Google Apps Script project`
      },
      {
        name: 'author',
        type: 'string',
        message: 'Author name',
        default: this.gitUser.name
      },
      {
        name: 'language',
        message: 'Choose a language type',
        choices: [
          {name:'TypeScript',value:'ts'},
          {name:'JavaScript(Legacy)',value:'js'}
        ],
        type: 'list',
        default: 'ts'
      },
      {
        name: 'lint',
        message: 'Do you use tslint?',
        type: 'confirm',
        default: true,
        when: ({language}) => language==='ts'
      },
      {
        name: 'jest',
        message: 'Use jest',
        type: 'confirm',
        default: true,
        when: ({language}) => language==='ts'
      },
      {
        name: 'pm',
        message: 'Choose a package manager',
        choices: ['npm', 'yarn'],
        type: 'list',
        default: 'npm'
      }
    ]
  },
  actions() {
    return [
      {
        type: 'add',
        files: '**',
        filters: {
          'src/*.ts': 'language === "ts"',
          'src/*.js': 'language === "js"',
          '.tslintrc.js': 'lint',
          'jest.config.js': 'jest'
        }
      },
      {
        type: 'move',
        patterns: {
          gitignore: '.gitignore',
        }
      }
    ]
  },
  async completed() {
    await this.gitInit()
    console.log(this.answers.pm)
    await this.npmInstall({ packageManager: this.answers.pm })
    this.showProjectTips()
  }
}
