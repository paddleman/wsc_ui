import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    console.log(params.id);
    return this.store.findRecord('station', params.id);
  },

  renderTemplate() {
    this.render('stations.station', {
      into: 'application',
      outlet: 'content'
    });
  }
});
