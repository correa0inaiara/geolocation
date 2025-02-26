const translation = {
  serverInit: 'Servidor iniciando',
  serverHost: `escutando em http://localhost: ${process.env.PORT}`,
  databaseInit: 'iniciando bando de dados',
  databaseConn: 'banco de dados conectado',
  libAddressValidation: 'Endereço inválido',
  apiRegionNotFound: 'Região (region) não encontrada',
  apiRegionLocationValidation:
    'Localização (Location) e coordenadas (coordinates) da região (region) são obrigatórias',
  apiRegionUpdateParametersMissing:
    'Você precisa informar os paramêtros para realizar a atualização',
  apiRegionUserValidation: 'Usuário (user) precisa ser do tipo ObjectID',
  apiUserNotFound: 'Usuário (user) não encontrado',
  apiUserSchemaValidation: 'Você precisa enviar ou endereço (address) ou localização (location)',
  apiUserLocationValidation:
    'Localização (Location) e coordenadas (coordinates) do usuário (user) são obrigatórias',
  apiUserUpdateParametersMissing:
    'Você precisa informar os paramêtros do usuário (user) para realizar a atualização',
  apiRegionLocationCoordinatesValidation: 'Coordenadas (coordinates) são inválidas',
  apiRegionLocationCoordinatesInvalid:
    'Coordenadas (coordinates) do polígono (polygon) são inválidas',
  apiRegionLocationPolygonCoordinatesInvalid:
    'O primeiro e o último ponto (point) precisam ser os mesmos para ser um polígono (polygon)',
  apiRegionLocationCoordinatesOrder:
    'Cada ponto (point) precisa de uma longitude e de uma latitude, nessa ordem',
  apiRegionLocationCoordinatesInformation:
    'A longitude e a latitude precisam ser representadas por números',
  apiRegionNameRequired: 'Você precisa dar um nome (name) a região (region)',
  apiRegionUserRequired: 'Você precisa atribuir um usuário (user) a região (region)',
  apiRegionLocationRequired:
    'Você precisa informar uma localização (location) para a região (region)',
  apiUserLocationCoordinatesValidation: 'Coordenadas (coordinates) são inválidas',
  apiUserLocationInvalid: 'Localização (location) é inválida',
  apiUserAddressValidation: 'O seu endereço (address) precisa ser um texto',
  clientMenuUsers: 'Usários',
  clientMenuRegions: 'Regiões',
  clientMenuSearchByDistance: 'Busca pela Distância',
  clientMenuSearchByPoint: 'Busca por Ponto',
  userRegistrationTitle: 'Cadastro de Usuários',
  userRegistrationLabelName: 'Nome',
  userRegistrationInputNameErrorMsg: 'Por favor, informe um nome válido',
  userRegistrationLabelEmail: 'E-mail',
  userRegistrationInputEmailErrorMsg: 'Por favor, informe um e-mail válido',
  userRegistrationLabelAddress: 'Endereço',
  userRegistrationInputAddressErrorMsg: 'Por favor, informe um endereço válido',
  userRegistrationLabelLocation: 'Localização',
  userRegistrationLabelLongitude: 'Longitude',
  userRegistrationInputLongitudeErrorMsg: 'Por favor, informe uma longitude válido',
  userRegistrationLabelLatitude: 'Latitude',
  userRegistrationInputLatitudeErrorMsg: 'Por favor, informe uma latitude válido',
  userRegistrationInputUserFormErrorMsg: 'Por favor, informe apenas endereço ou localização',
  userRegistrationSubmitButton: 'Enviar',
  userListingTitle: 'Lista de Usuários',
  tableHeaderIndex: '#',
  tableHeaderNameEmail: 'Nome / E-mail',
  tableHeaderAddress: 'Endereço',
  tableHeaderLongLat: 'Longitude / Latitude',
  navPrev: 'Anterior',
  navNext: 'Próximo',
};

export default { translation };
