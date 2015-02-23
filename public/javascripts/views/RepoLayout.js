/** 
 * Implements the repos layout
 *
 */
define([
    'marionette',
    '../collections/RepoCollection',
    './RepoCollectionView',
    '../collections/CommitCollection',
    './CommitCollectionView',
    './RepoVisualView',
    './EmptyView',
    'text!../templates/repoLayout.tpl'
], function(
    Marionette, 
    RepoCollection,
    RepoCollectionView,
    CommitCollection,
    CommitCollectionView,
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

            this.bindEvents();

            
        },

        bindEvents: function() {
            var self = this;

            self.vent.on('input:repoName', function(repoName) {
                self.repoCollection = new RepoCollection({
                    repoName: repoName
                });

                self.repo_view = new RepoVisualView({
                    collection: self.repoCollection,
                    vent: self.vent
                });

                self.repoCollection.on('reset', function() {
                    self.repoView.show(self.repo_view);
                });

                self.repoCollection.fetch({
                    reset: true,
                    error: function() {
                        self.repoView.show(new EmptyView());
                        if (self.commitView) {
                            self.commitView.empty();
                        }
                    }
                });
            });

            self.vent.on('repo:selected', function(url) {
                self.commitCollection = new CommitCollection({
                    repo: url
                });

                self.commit_view = new CommitCollectionView({
                    collection: self.commitCollection,
                    vent: self.vent
                });

                self.commitCollection.on('reset', function() {
                    self.commitView.show(self.commit_view);
                });

                self.commitCollection.fetch({
                    reset: true,
                    error: function() {
                        self.commitView.show(new EmptyView());
                    }
                });
            });
        },

        regions: {
            repoView: '#repoView',
            commitView: '#commitView'
        }

    });
    
    return RepoLayout;
});