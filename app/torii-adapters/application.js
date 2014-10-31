import Ember from 'ember';

export default Ember.Object.extend({
  open: function (authentication) {
    var authorizationCode = authentication.authorizationCode;
    debugger;
    return new Ember.RSVP.Promise(function (resolve, reject) {
      Ember.$.ajax({
        url: 'https://api.github.com/user',
        data: { access_token: authorizationCode },
        dataType: 'json',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }).then(function (user) {
      // The returned object is merged onto the session (basically). Here
      // you may also want to persist the new session with cookies or via
      // localStorage.
      debugger;

      localStorage.setItem('user', JSON.stringify(user));

      return {
        currentUser: user
      };
    });
  }
});
