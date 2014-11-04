import ToriiGitHubProvider from 'torii/providers/github-oauth2';

export default ToriiGitHubProvider.extend({
  // Github doesn't allow the uri to be encoded.
  buildUrl: function () {
    var url = this._super();

    return url.replace(/redirect_uri\=([^&]*)&/, function (match, url) {
      url = decodeURIComponent(url);
      if (url.lastIndexOf('/') === url.length - 1) {
        url = url.substr(0, url.length - 1);
      }
      return 'redirect_uri=' + decodeURIComponent(url) + '&';
    });
  }
});
