import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function () {
    return UriTemplate.expand(this.get('session').get('currentUser').events_url);
  }
});
