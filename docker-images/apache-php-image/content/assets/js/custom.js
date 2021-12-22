const title = document.querySelector('.activity-content .title')
const link = document.querySelector('.activity-content .link')

// On affiche une nouvelle activité toutes les 3 secondes
setInterval(() => {
  fetch('/api/activities/')
  .then((response) => response.json())
  .then(data => {
    if (!data.length)
      return
    const activity = data[0]
    const linkHref = activity.link ? activity.link : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    console.log(activity)
    title.textContent = activity.activity
    link.href = linkHref
  });
}, 3000);
