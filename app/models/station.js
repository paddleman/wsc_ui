import DS from 'ember-data';

export default DS.Model.extend({

  stationNumber: DS.attr(),
  stationName: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  hydStatus: DS.attr()


});
