import allActivites from './activities.json'

export interface Activity {
  activity: string
  type: string
  participants: number
  price: number
  link: string
  key: string
  accessibility: number
}

class ActivitiesService {
  public get(maxNumber = 10) {
    const nbActivites = Math.floor(Math.random() * maxNumber)
    const activities: Set<Activity> = new Set()

    for (let i = 0; i < nbActivites; i++) {
      const randomIndex = Math.floor(Math.random() * allActivites.length)
      activities.add(allActivites[randomIndex])
    }

    return Array.from(activities).map((a) => {
      return {
        activity: a.activity,
        type: a.type,
        participants: a.participants,
        price: a.price,
        link: a.link.length ? a.link : undefined,
        accessibility: a.accessibility,
      }
    })
  }
}

export default new ActivitiesService()
