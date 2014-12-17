import Ember from 'ember';
import { githubUrl } from '../helpers/github-url';

var eventMapping = {
  CommitCommentEvent:               'commented on',
  CreateEvent:                      'created',
  DeleteEvent:                      'removed',
  FollowEvent:                      'followed',
  ForkEvent:                        'forked',
  GollumEvent:                      'created a wiki page',
  IssueCommentEvent:                'commented on issue',
  IssuesEvent:                      'dealt with an issue',
  MemberEvent:                      'added',
  PublicEvent:                      'open sourced',
  PullRequestEvent:                 'dealt with a pull request',
  PullRequestReviewCommentEvent:    'commented on pull request',
  PushEvent:                        'pushed to',
  ReleaseEvent:                     'published a release',
  WatchEvent:                       'starred'
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
