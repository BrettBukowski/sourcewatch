/* global twemoji */
import Ember from 'ember';

export function emojiMessage(input) {
  return new Ember.Handlebars.SafeString(
    twemoji.parse(Ember.Handlebars.Utils.escapeExpression(input)));
}

export default Ember.Handlebars.makeBoundHelper(emojiMessage);
