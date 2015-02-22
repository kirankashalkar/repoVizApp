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
                console.log('repoName', repoName);
                self.myCollection = new RepoCollection({
                    repoName: repoName
                });

                self.repo_view = new RepoCollectionView({
                    collection: self.myCollection
                });

                self.myCollection.fetch({
                    success: function() {
                        self.$el.append(render();
                        self.repoView.show(self.repo_view)
                    }
                });

            });
        },

        onRender: function() {
            this.repo_view.render();
            this.repoView.show(this.repo_view);
        },

        regions: {
            repoView: '#repoView',
        }

    });
    
    return RepoLayout;
});