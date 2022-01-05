import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import os from 'os'

export default class Hostname {
  public async handle({ response }: HttpContextContract, next: () => Promise<void>) {
    response.safeHeader('docker_hostname', os.hostname())
    await next()
  }
}
