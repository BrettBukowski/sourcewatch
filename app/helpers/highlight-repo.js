import Ember from 'ember';

export function highlightRepo(input) {
  input = Ember.Handlebars.Utils.escapeExpression(input);

  var lastSlash = input.lastIndexOf('/');

  return new Ember.Handlebars.SafeString(
    input.substr(0, lastSlash + 1) + '<strong>' + input.substr(lastSlash + 1) + '</strong>');
}

export default Ember.Handlebars.makeBoundHelper(highlightRepo);
