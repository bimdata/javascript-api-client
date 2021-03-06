/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.bimdata);
  }
}(this, function(expect, bimdata) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new bimdata.CollaborationApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CollaborationApi', function() {
    describe('cancelCloudUserInvitation', function() {
      it('should call cancelCloudUserInvitation successfully', function(done) {
        //uncomment below and update the code to test cancelCloudUserInvitation
        //instance.cancelCloudUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cancelProjectUserInvitation', function() {
      it('should call cancelProjectUserInvitation successfully', function(done) {
        //uncomment below and update the code to test cancelProjectUserInvitation
        //instance.cancelProjectUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('checkAccess', function() {
      it('should call checkAccess successfully', function(done) {
        //uncomment below and update the code to test checkAccess
        //instance.checkAccess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createClassification', function() {
      it('should call createClassification successfully', function(done) {
        //uncomment below and update the code to test createClassification
        //instance.createClassification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCloud', function() {
      it('should call createCloud successfully', function(done) {
        //uncomment below and update the code to test createCloud
        //instance.createCloud(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDMSTree', function() {
      it('should call createDMSTree successfully', function(done) {
        //uncomment below and update the code to test createDMSTree
        //instance.createDMSTree(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDemo', function() {
      it('should call createDemo successfully', function(done) {
        //uncomment below and update the code to test createDemo
        //instance.createDemo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createDocument', function() {
      it('should call createDocument successfully', function(done) {
        //uncomment below and update the code to test createDocument
        //instance.createDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFolder', function() {
      it('should call createFolder successfully', function(done) {
        //uncomment below and update the code to test createFolder
        //instance.createFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProject', function() {
      it('should call createProject successfully', function(done) {
        //uncomment below and update the code to test createProject
        //instance.createProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createProjectAccessToken', function() {
      it('should call createProjectAccessToken successfully', function(done) {
        //uncomment below and update the code to test createProjectAccessToken
        //instance.createProjectAccessToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClassification', function() {
      it('should call deleteClassification successfully', function(done) {
        //uncomment below and update the code to test deleteClassification
        //instance.deleteClassification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCloud', function() {
      it('should call deleteCloud successfully', function(done) {
        //uncomment below and update the code to test deleteCloud
        //instance.deleteCloud(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCloudUser', function() {
      it('should call deleteCloudUser successfully', function(done) {
        //uncomment below and update the code to test deleteCloudUser
        //instance.deleteCloudUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDocument', function() {
      it('should call deleteDocument successfully', function(done) {
        //uncomment below and update the code to test deleteDocument
        //instance.deleteDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFolder', function() {
      it('should call deleteFolder successfully', function(done) {
        //uncomment below and update the code to test deleteFolder
        //instance.deleteFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProject', function() {
      it('should call deleteProject successfully', function(done) {
        //uncomment below and update the code to test deleteProject
        //instance.deleteProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProjectAccessToken', function() {
      it('should call deleteProjectAccessToken successfully', function(done) {
        //uncomment below and update the code to test deleteProjectAccessToken
        //instance.deleteProjectAccessToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteProjectUser', function() {
      it('should call deleteProjectUser successfully', function(done) {
        //uncomment below and update the code to test deleteProjectUser
        //instance.deleteProjectUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateClassification', function() {
      it('should call fullUpdateClassification successfully', function(done) {
        //uncomment below and update the code to test fullUpdateClassification
        //instance.fullUpdateClassification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateCloud', function() {
      it('should call fullUpdateCloud successfully', function(done) {
        //uncomment below and update the code to test fullUpdateCloud
        //instance.fullUpdateCloud(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateCloudUser', function() {
      it('should call fullUpdateCloudUser successfully', function(done) {
        //uncomment below and update the code to test fullUpdateCloudUser
        //instance.fullUpdateCloudUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateDocument', function() {
      it('should call fullUpdateDocument successfully', function(done) {
        //uncomment below and update the code to test fullUpdateDocument
        //instance.fullUpdateDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateFolder', function() {
      it('should call fullUpdateFolder successfully', function(done) {
        //uncomment below and update the code to test fullUpdateFolder
        //instance.fullUpdateFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateProject', function() {
      it('should call fullUpdateProject successfully', function(done) {
        //uncomment below and update the code to test fullUpdateProject
        //instance.fullUpdateProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateProjectAccessToken', function() {
      it('should call fullUpdateProjectAccessToken successfully', function(done) {
        //uncomment below and update the code to test fullUpdateProjectAccessToken
        //instance.fullUpdateProjectAccessToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateProjectUser', function() {
      it('should call fullUpdateProjectUser successfully', function(done) {
        //uncomment below and update the code to test fullUpdateProjectUser
        //instance.fullUpdateProjectUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClassification', function() {
      it('should call getClassification successfully', function(done) {
        //uncomment below and update the code to test getClassification
        //instance.getClassification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClassifications', function() {
      it('should call getClassifications successfully', function(done) {
        //uncomment below and update the code to test getClassifications
        //instance.getClassifications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCloud', function() {
      it('should call getCloud successfully', function(done) {
        //uncomment below and update the code to test getCloud
        //instance.getCloud(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCloudInvitations', function() {
      it('should call getCloudInvitations successfully', function(done) {
        //uncomment below and update the code to test getCloudInvitations
        //instance.getCloudInvitations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCloudSize', function() {
      it('should call getCloudSize successfully', function(done) {
        //uncomment below and update the code to test getCloudSize
        //instance.getCloudSize(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCloudUser', function() {
      it('should call getCloudUser successfully', function(done) {
        //uncomment below and update the code to test getCloudUser
        //instance.getCloudUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCloudUsers', function() {
      it('should call getCloudUsers successfully', function(done) {
        //uncomment below and update the code to test getCloudUsers
        //instance.getCloudUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClouds', function() {
      it('should call getClouds successfully', function(done) {
        //uncomment below and update the code to test getClouds
        //instance.getClouds(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocument', function() {
      it('should call getDocument successfully', function(done) {
        //uncomment below and update the code to test getDocument
        //instance.getDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocuments', function() {
      it('should call getDocuments successfully', function(done) {
        //uncomment below and update the code to test getDocuments
        //instance.getDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFolder', function() {
      it('should call getFolder successfully', function(done) {
        //uncomment below and update the code to test getFolder
        //instance.getFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFolders', function() {
      it('should call getFolders successfully', function(done) {
        //uncomment below and update the code to test getFolders
        //instance.getFolders(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProject', function() {
      it('should call getProject successfully', function(done) {
        //uncomment below and update the code to test getProject
        //instance.getProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectAccessToken', function() {
      it('should call getProjectAccessToken successfully', function(done) {
        //uncomment below and update the code to test getProjectAccessToken
        //instance.getProjectAccessToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectAccessTokens', function() {
      it('should call getProjectAccessTokens successfully', function(done) {
        //uncomment below and update the code to test getProjectAccessTokens
        //instance.getProjectAccessTokens(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectDMSTree', function() {
      it('should call getProjectDMSTree successfully', function(done) {
        //uncomment below and update the code to test getProjectDMSTree
        //instance.getProjectDMSTree(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectInvitations', function() {
      it('should call getProjectInvitations successfully', function(done) {
        //uncomment below and update the code to test getProjectInvitations
        //instance.getProjectInvitations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectSubTree', function() {
      it('should call getProjectSubTree successfully', function(done) {
        //uncomment below and update the code to test getProjectSubTree
        //instance.getProjectSubTree(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectTree', function() {
      it('should call getProjectTree successfully', function(done) {
        //uncomment below and update the code to test getProjectTree
        //instance.getProjectTree(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectUser', function() {
      it('should call getProjectUser successfully', function(done) {
        //uncomment below and update the code to test getProjectUser
        //instance.getProjectUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjectUsers', function() {
      it('should call getProjectUsers successfully', function(done) {
        //uncomment below and update the code to test getProjectUsers
        //instance.getProjectUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProjects', function() {
      it('should call getProjects successfully', function(done) {
        //uncomment below and update the code to test getProjects
        //instance.getProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSelfProjects', function() {
      it('should call getSelfProjects successfully', function(done) {
        //uncomment below and update the code to test getSelfProjects
        //instance.getSelfProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSelfUser', function() {
      it('should call getSelfUser successfully', function(done) {
        //uncomment below and update the code to test getSelfUser
        //instance.getSelfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inviteCloudUser', function() {
      it('should call inviteCloudUser successfully', function(done) {
        //uncomment below and update the code to test inviteCloudUser
        //instance.inviteCloudUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inviteProjectUser', function() {
      it('should call inviteProjectUser successfully', function(done) {
        //uncomment below and update the code to test inviteProjectUser
        //instance.inviteProjectUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClassification', function() {
      it('should call updateClassification successfully', function(done) {
        //uncomment below and update the code to test updateClassification
        //instance.updateClassification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCloud', function() {
      it('should call updateCloud successfully', function(done) {
        //uncomment below and update the code to test updateCloud
        //instance.updateCloud(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCloudUser', function() {
      it('should call updateCloudUser successfully', function(done) {
        //uncomment below and update the code to test updateCloudUser
        //instance.updateCloudUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDocument', function() {
      it('should call updateDocument successfully', function(done) {
        //uncomment below and update the code to test updateDocument
        //instance.updateDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFolder', function() {
      it('should call updateFolder successfully', function(done) {
        //uncomment below and update the code to test updateFolder
        //instance.updateFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProject', function() {
      it('should call updateProject successfully', function(done) {
        //uncomment below and update the code to test updateProject
        //instance.updateProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProjectAccessToken', function() {
      it('should call updateProjectAccessToken successfully', function(done) {
        //uncomment below and update the code to test updateProjectAccessToken
        //instance.updateProjectAccessToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProjectUser', function() {
      it('should call updateProjectUser successfully', function(done) {
        //uncomment below and update the code to test updateProjectUser
        //instance.updateProjectUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSelfUser', function() {
      it('should call updateSelfUser successfully', function(done) {
        //uncomment below and update the code to test updateSelfUser
        //instance.updateSelfUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
