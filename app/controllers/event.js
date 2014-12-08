import Ember from 'ember';
import { githubUrl } from '../helpers/github-url';

var eventMapping = {
  PushEvent:    'pushed to',
  WatchEvent:   'started watching',
  ForkEvent:    'forked',
  CreateEvent:  'created'
};

var lastAction = '';
var lastActionCache = {};

export default Ember.ObjectController.extend({
  verb: function () {
    return eventMapping[this.get('type')] || this.get('type');
  }.property('type'),

  repoUrl: function () {
    return githubUrl(this.get('repo.url'), 'repo');
  }.property('repo.url'),

  isRepeatedAction: function () {
    var id = this.get('id');

    if (typeof lastActionCache[id] === 'undefined') {
      var action = this.get('type') + this.get('repo.url');

      lastActionCache[id] = action === lastAction;

      lastAction = action;
    }

    return lastActionCache[id];
  }.property('repo.url', 'type')
});
