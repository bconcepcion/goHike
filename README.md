#goHIKE

A simple web application that matches users to National Parks in their state that offer hiking trails.
This project was bootstrapped using create-react-app and generates information from the Navigator API, Google Maps API as well as the National Parks Service API.

###How to Start

This app works best if the user has location services enabled. Once the user has enable location services, the app will check the coordinates of their location using the Navigator API and display their location on a map. After their location is retrieved the app will convert those coordinates to an address using Googles geocoding services and use that information to filter the National Park Service API for their state.




