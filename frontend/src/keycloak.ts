import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
	url: 'http://localhost:8080',
	realm: 'bookworm',
	clientId: 'bw',
})

export default keycloak
