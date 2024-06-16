# Cloud-Community-Day-2024-website

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Organizer Guide

For making your event visible on website, raise a PR by adding following element in [community.json](./src/assets/data/community.json) file. Once approved by Organizers, your event will be added on the website (deployment is automated).

```json
{
  "community": "", // mention name of your community
  "city": "Hyderabad", // which city does it belong to
  "place": "EPAM Hyderabad", // brief address of place where your event will be organized
  "date": "01/08/2024", // format is DD/MM/YYYY, if date is not found valid it will not be shown
  "rsvp": "https://google.com", // rsvp link - bevy/any other forum
  "link": "", // link to event listing/event landing page
  "latitude": "", // latitude for place
  "longitude": "" // longitude for place
}
```
