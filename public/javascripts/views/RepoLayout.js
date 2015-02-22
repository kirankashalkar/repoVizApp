/** 
 * Implements the repos layout
 *
 */
define([
    'marionette',
    '../collections/RepoCollection',
    './RepoCollectionView',
    './RepoVisualView',
    './EmptyView',
    'text!../templates/repoLayout.tpl'
], function(
    Marionette, 
    RepoCollection,
    RepoCollectionView,
    RepoVisualView,
    EmptyView,
    RepoLayoutTpl) {
    
    var RepoLayout = Marionette.LayoutView.extend({
        template: RepoLayoutTpl,

        // code for list view that was developed first
        // initialize: function(options) {
        //     var self = this;

        //     _.extend(this, options);

        //     this.vent.on('input:repoName', function(repoName) {
        //         self.collection = new RepoCollection({
        //             repoName: repoName
        //         });

        //         self.repo_view = new RepoCollectionView({
        //             collection: self.collection
        //         });

        //         self.collection.on('change', function() {
        //             self.repoView.show(self.repo_view);
        //         });

        //         self.collection.fetch({
        //             success: function() {
        //                 self.repoView.show(self.repo_view);
        //             },
        //             error: function() {
        //                 self.repoView.show(new EmptyView());
        //             }
        //         });
        //     });
        // },
        

        // code for visual view
        initialize: function(options) {
            var self = this;

            _.extend(this, options);

            this.vent.on('input:repoName', function(repoName) {
                self.collection = new RepoCollection({
                    repoName: repoName
                });

                self.repo_view = new RepoVisualView({
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
                        self.repoView.show(new EmptyView());
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