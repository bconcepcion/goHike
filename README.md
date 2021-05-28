# goHIKE

A simple web application that matches users to National Parks in their state that offer hiking trails.
This project was bootstrapped using create-react-app and generates information from the Navigator API, Google Maps API as well as the National Parks Service API.

### Take a Hike

This app works best if the user has location services enabled. Once the user has enable location services, the app will check the coordinates of their location using the Navigator API and display their location on a map. After their location is retrieved the app will convert those coordinates to an address using Googles geocoding services and use that information to filter the National Park Service API for their state.

#### Improvements

At the moment there is no way to use the app if the user does not enable location services. In the future I would like to add a functional dropdown menu that will allow the user to look for parks in different states. Additionally, I would like the parks to be populated on the map to give the user a visual representation of how far the parks are from their current location.


