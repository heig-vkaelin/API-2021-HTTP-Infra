import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ActivitiesService from 'App/Services/ActivitiesService'

export default class ActivitiesController {
  public async index({ response }: HttpContextContract) {
    return response.json(ActivitiesService.get())
  }

  public async show({ response }: HttpContextContract) {
    return response.json(ActivitiesService.get(1))
  }
}
