import Ember from 'ember';

var USER_KEY = 'user';
var AUTH_KEY = 'auth';

export default Ember.Object.extend({
  open: function (authentication) {
    var authorizationCode = authentication.authorizationCode;

    return new Ember.RSVP.Promise(function (resolve, reject) {
      Ember.$.ajax({
        url: 'https://api.github.com/user',
        data: { access_token: authorizationCode },
        dataType: 'json',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }).then(function (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      localStorage.setItem(AUTH_KEY, authorizationCode);

      return {
        currentUser: user
      };
    });
  },

  fetch: function () {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      var stored = localStorage.getItem(USER_KEY);
      try {
        stored = JSON.parse(stored);
      } catch (e) {}

      if (stored && stored.id) {
        resolve({
          isAuthenticated: true,
          currentUser:     stored
        });
      }
      else {
        reject("Not logged in");
      }
    });
  },

  close: function () {
    return new Ember.RSVP.Promise(function (resolve) {
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(AUTH_KEY);
      resolve();
    });
  }
});
