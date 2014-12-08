import Ember from 'ember';
import { githubUrl } from '../helpers/github-url';

export default Ember.ObjectController.extend({
  content: {},

  commitUrl: function () {
    return githubUrl(this.get('url'), 'repo').replace(/\/commits\//, '/commit/');
  }.property('url')
});
