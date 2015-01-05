import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function () {
    return UriTemplate.expand(this.get('session').get('currentUser').starred_url);
  }
});
