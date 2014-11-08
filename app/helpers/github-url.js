import Ember from 'ember';

export function githubUrl(input) {
  return input.replace('api.', '').replace(/\.com\/[^\/]+\//, '.com/');
}

export default Ember.Handlebars.makeBoundHelper(githubUrl);
