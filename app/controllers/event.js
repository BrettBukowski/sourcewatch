import Ember from 'ember';
import { githubUrl } from '../helpers/github-url';

var eventMapping = {
  PushEvent:    'pushed to',
  WatchEvent:   'started watching',
  ForkEvent:    'forked',
  CreateEvent:  'created'
};

export default Ember.ObjectController.extend({
  verb: function () {
    return eventMapping[this.get('type')] || this.get('type');
  }.property('type'),

  repoUrl: function () {
    return githubUrl(this.get('repo.url'));
  }.property('repo.url'),

  userUrl: function () {
    return githubUrl(this.get('actor.url'));
  }.property('actor.url')
});
