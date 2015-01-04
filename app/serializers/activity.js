import AppSerializer from './application';

export default AppSerializer.extend({
  attrs: {
    actor: { embedded: 'always' },
    repo: { embedded: 'always' }
  },

  extractArray: function (store, type, payload, something, restAction) {
    return this._super(store, type, {
      activities: payload
    }, something, restAction);
  }
});
