/**
 * Create Draft email.
 *
 * @param  {String} userId User's email address. The special value 'me'
 * can be used to indicate the authenticated user.
 * @param  {String} email RFC 5322 formatted String.
 * @param  {Function} callback Function to call when the request is complete.
 */
function createDraft(userId, email, callback) {
  // Using the js-base64 library for encoding:
  // https://www.npmjs.com/package/js-base64
  var base64EncodedEmail = Base64.encodeURI(email);
  var request = gapi.client.gmail.users.drafts.create({
    'userId': userId,
    'resource': {
      'message': {
        'raw': base64EncodedEmail
      }
    }
  });
  request.execute(callback);
}