const translation = {
  "serverInit": "Server start up",
  "serverHost": `listining on http://localhost: ${process.env.PORT}`,
  "databaseInit": "initializing database",
  "databaseConn": "database connected",
  "libAddressValidation": "Invalid address",
  "apiRegionNotFound": "Region not found",
  "apiRegionLocationValidation": "Region location and coordinates are required",
  "apiRegionUpdateParametersMissing": "You need to specify the region parameters to update",
  "apiRegionUserValidation": "User needs to be an ObjectID",
  "apiUserNotFound": "User not found",
  "apiUserSchemaValidation": "You need to provide either address or location",
  "apiUserLocationValidation": "User location and coordinates are required",
  "apiRegionLocationCoordinatesValidation": "Coordinates are invalid",
  "apiRegionLocationCoordinatesInvalid": "Polygon Coordinates are invalid",
  "apiRegionLocationPolygonCoordinatesInvalid": "The first and last points needs to be the same to complete the polygon",
  "apiRegionLocationCoordinatesOrder": "Each point needs a longitude and a latitude, in this order",
  "apiRegionLocationCoordinatesInformation": "The longitude and latitude points needs to represented in numbers",
  "apiRegionNameRequired": "You need to give the region a name",
  "apiRegionUserRequired": "You need to provide a user for the region",
  "apiRegionLocationRequired": "You need to provide a location for the region",
  "apiUserLocationCoordinatesValidation": "Coordinates are invalid",
  "apiUserLocationInvalid": "Location is invalid",
  "apiUserAddressValidation": "Your address needs to be a string",
  "clientMenuUsers": "Users",
  "clientMenuRegions": "Regions",
  "clientMenuSearchByDistance": "Search By Distance",
  "clientMenuSearchByPoint": "Search By Point",
  "userRegistrationTitle": "Users Registration",
  "userRegistrationLabelName": "Name",
  "userRegistrationInputNameErrorMsg": "Please, provide a valid name",
  "userRegistrationLabelEmail": "Email",
  "userRegistrationInputEmailErrorMsg": "Please, provide a valid email",
  "userRegistrationLabelAddress": "Address",
  "userRegistrationInputAddressErrorMsg": "Please, provide a valid address",
  "userRegistrationLabelLocation": "Location",
  "userRegistrationLabelLongitude": "Longitude",
  "userRegistrationInputLongitudeErrorMsg": "Please, provide a valid longitude",
  "userRegistrationLabelLatitude": "Latitude",
  "userRegistrationInputLatitudeErrorMsg": "Please, provide a valid latitude",
  "userRegistrationInputUserFormErrorMsg": "Please, provide either address or location",
  "userRegistrationSubmitButton": "Submit",
  "userListingTitle": "Users Listing",
  "tableHeaderIndex": "#",
  "tableHeaderNameEmail": "Name / Email",
  "tableHeaderAddress": "Address",
  "tableHeaderLongLat": "Longitude / Latitude",
  "navPrev": "Prev",
  "navNext": "Next"
}

export default {translation}