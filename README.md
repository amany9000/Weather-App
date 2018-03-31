# Weather-App
Node based weeather app which takes a location (address or postal code) and provides its real time weather statistics.
Uses the Google Maps API for geolocation (retrieving latitude and Longitutde).
The Dark Sky Forecast API is used for retireving the the curent weather statistics of the geolocation provided by the Google Maps API. -address "City or Adlocation

Installation
===
Clone The repo
cd into the directory
run  - npm install

Using the App
===
run the app using:- 
$ node --address "City or location"

You can use --a instead of address.

Note: 
Location pin-pointing and the number of queries of a particular location restricted to Google Maps API. 
This brach uses the axios package in place of request package and promises used in the master branch.