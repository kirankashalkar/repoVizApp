/** 
 * Implements the repos layout
 *
 */
define([
    'marionette',
    '../collections/RepoCollection',
    './RepoCollectionView',
    // './RepoVisualView',
    'text!../templates/repoLayout.tpl'
], function(
    Marionette, 
    RepoCollection,
    RepoCollectionView,
    // RepoVisualView,
    RepoLayoutTpl) {
    
    var RepoLayout = Marionette.LayoutView.extend({
        template: RepoLayoutTpl,

        initialize: function(options) {
            var self = this;

            _.extend(this, options);

            this.vent.on('input:repoName', function(repoName) {
                self.collection = new RepoCollection({
                    repoName: repoName
                });

                self.repo_view = new RepoCollectionView({
                    collection: self.collection
                });

                self.collection.on('change', function() {
                    self.repoView.show(self.repo_view);
                });

                self.collection.fetch({
                    success: function() {
                        self.repoView.show(self.repo_view);
                    },
                    error: function() {
                        self.repoView.show(new RepoCollectionView());
                    }
                });
            });
        },

        regions: {
            repoView: '#repoView',
        }

    });
    
    return RepoLayout;
});