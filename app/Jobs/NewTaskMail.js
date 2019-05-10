'use strict'

const Mail = use('Mail')
const Helpers = use('Helpers')
class NewTaskMail {
  static get concurrency () {
    // determina quantos jobs quero processar simultaneamente
    return 1
  }

  static get key () {
    // chave unica de cada job
    return 'NewTaskMail-job'
  }

  async handle ({ username, title, file, email }) {
    console.log(`JOB: ${NewTaskMail.key}`)
    await Mail.send(
      ['emails.new_task'],
      {
        username,
        title,
        hasAttachment: !!file
      },
      message => {
        message
          .to(email)
          .from('matheus@yggtech.com.br', 'MATHEUS DIAS')
          .subject('Nova tarefa para você')

        if (file) {
          message.attach(Helpers.tmpPath(`uploads/${file.file}`), {
            filename: file.name
          })
        }
      }
    )
  }
}

module.exports = NewTaskMail
