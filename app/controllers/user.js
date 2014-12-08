import Ember from 'ember';
import { githubUrl } from '../helpers/github-url';


export default Ember.ObjectController.extend({
  content: {},

  userUrl: function () {
    return githubUrl(this.get('url'), 'user');
  }.property('url')
});
