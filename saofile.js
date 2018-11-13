const superb = require('superb')
const moment = require('moment-timezone')

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
        message: 'Author name',
        default: this.gitUser.name
      },
      {
        name: 'timezone',
        message: 'Which timezone?',
        default: moment.tz.guess(),
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
        message: 'Use tslint?',
        type: 'confirm',
        default: true,
        when: ({language}) => language==='ts'
      },
      {
        name: 'jest',
        message: 'Use jest?',
        type: 'confirm',
        default: true,
        when: ({language}) => language==='ts'
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
    await this.npmInstall()
    this.showProjectTips()
  }
}
