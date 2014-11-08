/* global moment */
import Ember from 'ember';

export function relativeDate(input) {
  return moment(input).fromNow();
}

export default Ember.Handlebars.makeBoundHelper(relativeDate);
