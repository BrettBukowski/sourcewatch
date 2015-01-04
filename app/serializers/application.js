import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  keyForAttribute: function (attr) {
    return Ember.String.decamelize(attr);
  }
});
