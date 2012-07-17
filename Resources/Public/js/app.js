var Brain = Em.Application.create();

Brain.IssuesList = Em.View.extend({
  issues: issues
});

Brain.Router = Ember.Router.extend({
  root: Ember.State.extend({
    index: Ember.State.extend({
      route: '/',
      redirectsTo: 'issues'
    }),
    issues: Ember.State.extend({
      route: '/issues',
      connectOutlets: function(router) {
        router.get('applicationController').connectOutlet(Brain.IssuesList);
      }
    }),
    post: Ember.State.extend({
      route: '/posts/:post_id'
    })
  })
});
