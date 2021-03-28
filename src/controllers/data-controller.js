/** Metodo POST para guardar URLs
 * @type {function}
 * @param {Object} req - "request" de la ruta
 * @param {Object} res - "response" de la ruta
 * @param {function} res.status - función para enviar un estado http con json
*/

export const sendUrl = async ( req, res ) => {
	const {
		nick,
		password,
		shortUrl,
		destinationUrl,
		passwordUrl,
		views
	} = req.body;

	res.status( 200 ).json( {
		nick, password, shortUrl, destinationUrl, passwordUrl, views
	} );
};

/** Metodo POST para guardar URLs
 * @type {function}
 * @param {Object} req - "request" de la ruta
 * @param {Object} res - "response" de la ruta
 * @param {function} res.status - función para enviar un estado http con json
*/

export const password = async ( req, res ) => {
	const data = req.body;

	res.status( 200 ).json( data );
};
