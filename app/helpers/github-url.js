/* global UriTemplate */
import Ember from 'ember';

export function githubUrl(input, resourceType) {
  var url = UriTemplate.expand(input.replace('api.', ''));

  if (resourceType) {
    url = url.replace(new RegExp("\\.com\\/" + resourceType + "s\\/"), '.com/');
  }

  return url;
}

export default Ember.Handlebars.makeBoundHelper(githubUrl);
