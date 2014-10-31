import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function () {
      var oauth = Ember.OAuth2.create({ providerId: 'github' });
      oauth.authorize();
    }
  }
});
