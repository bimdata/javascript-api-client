/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * The version of the OpenAPI document: v1 (v1)
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
    describe('acceptUserInvitation', function() {
      it('should call acceptUserInvitation successfully', function(done) {
        //uncomment below and update the code to test acceptUserInvitation
        //instance.acceptUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('acceptValidation', function() {
      it('should call acceptValidation successfully', function(done) {
        //uncomment below and update the code to test acceptValidation
        //instance.acceptValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addDocumentTag', function() {
      it('should call addDocumentTag successfully', function(done) {
        //uncomment below and update the code to test addDocumentTag
        //instance.addDocumentTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addGroupMember', function() {
      it('should call addGroupMember successfully', function(done) {
        //uncomment below and update the code to test addGroupMember
        //instance.addGroupMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
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
    describe('checkProjectAccess', function() {
      it('should call checkProjectAccess successfully', function(done) {
        //uncomment below and update the code to test checkProjectAccess
        //instance.checkProjectAccess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('closeVisa', function() {
      it('should call closeVisa successfully', function(done) {
        //uncomment below and update the code to test closeVisa
        //instance.closeVisa(function(error) {
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
    describe('createManageGroup', function() {
      it('should call createManageGroup successfully', function(done) {
        //uncomment below and update the code to test createManageGroup
        //instance.createManageGroup(function(error) {
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
    describe('createTag', function() {
      it('should call createTag successfully', function(done) {
        //uncomment below and update the code to test createTag
        //instance.createTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createValidation', function() {
      it('should call createValidation successfully', function(done) {
        //uncomment below and update the code to test createValidation
        //instance.createValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createVisa', function() {
      it('should call createVisa successfully', function(done) {
        //uncomment below and update the code to test createVisa
        //instance.createVisa(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createVisaComment', function() {
      it('should call createVisaComment successfully', function(done) {
        //uncomment below and update the code to test createVisaComment
        //instance.createVisaComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAllDocumentHistory', function() {
      it('should call deleteAllDocumentHistory successfully', function(done) {
        //uncomment below and update the code to test deleteAllDocumentHistory
        //instance.deleteAllDocumentHistory(function(error) {
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
    describe('deleteDocumentTag', function() {
      it('should call deleteDocumentTag successfully', function(done) {
        //uncomment below and update the code to test deleteDocumentTag
        //instance.deleteDocumentTag(function(error) {
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
    describe('deleteGroupMember', function() {
      it('should call deleteGroupMember successfully', function(done) {
        //uncomment below and update the code to test deleteGroupMember
        //instance.deleteGroupMember(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteManageGroup', function() {
      it('should call deleteManageGroup successfully', function(done) {
        //uncomment below and update the code to test deleteManageGroup
        //instance.deleteManageGroup(function(error) {
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
    describe('deleteTag', function() {
      it('should call deleteTag successfully', function(done) {
        //uncomment below and update the code to test deleteTag
        //instance.deleteTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteValidation', function() {
      it('should call deleteValidation successfully', function(done) {
        //uncomment below and update the code to test deleteValidation
        //instance.deleteValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVisa', function() {
      it('should call deleteVisa successfully', function(done) {
        //uncomment below and update the code to test deleteVisa
        //instance.deleteVisa(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVisaComment', function() {
      it('should call deleteVisaComment successfully', function(done) {
        //uncomment below and update the code to test deleteVisaComment
        //instance.deleteVisaComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('denyUserInvitation', function() {
      it('should call denyUserInvitation successfully', function(done) {
        //uncomment below and update the code to test denyUserInvitation
        //instance.denyUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('denyValidation', function() {
      it('should call denyValidation successfully', function(done) {
        //uncomment below and update the code to test denyValidation
        //instance.denyValidation(function(error) {
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
    describe('getDocumentHistories', function() {
      it('should call getDocumentHistories successfully', function(done) {
        //uncomment below and update the code to test getDocumentHistories
        //instance.getDocumentHistories(function(error) {
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
    describe('getFolderDocuments', function() {
      it('should call getFolderDocuments successfully', function(done) {
        //uncomment below and update the code to test getFolderDocuments
        //instance.getFolderDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFolderProjectUsers', function() {
      it('should call getFolderProjectUsers successfully', function(done) {
        //uncomment below and update the code to test getFolderProjectUsers
        //instance.getFolderProjectUsers(function(error) {
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
    describe('getGroup', function() {
      it('should call getGroup successfully', function(done) {
        //uncomment below and update the code to test getGroup
        //instance.getGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getGroups', function() {
      it('should call getGroups successfully', function(done) {
        //uncomment below and update the code to test getGroups
        //instance.getGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLogs', function() {
      it('should call getLogs successfully', function(done) {
        //uncomment below and update the code to test getLogs
        //instance.getLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getManageGroup', function() {
      it('should call getManageGroup successfully', function(done) {
        //uncomment below and update the code to test getManageGroup
        //instance.getManageGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getManageGroups', function() {
      it('should call getManageGroups successfully', function(done) {
        //uncomment below and update the code to test getManageGroups
        //instance.getManageGroups(function(error) {
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
    describe('getProjectCreatorVisas', function() {
      it('should call getProjectCreatorVisas successfully', function(done) {
        //uncomment below and update the code to test getProjectCreatorVisas
        //instance.getProjectCreatorVisas(function(error) {
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
    describe('getProjectFolderTree', function() {
      it('should call getProjectFolderTree successfully', function(done) {
        //uncomment below and update the code to test getProjectFolderTree
        //instance.getProjectFolderTree(function(error) {
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
    describe('getProjectSize', function() {
      it('should call getProjectSize successfully', function(done) {
        //uncomment below and update the code to test getProjectSize
        //instance.getProjectSize(function(error) {
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
    describe('getProjectValidatorVisas', function() {
      it('should call getProjectValidatorVisas successfully', function(done) {
        //uncomment below and update the code to test getProjectValidatorVisas
        //instance.getProjectValidatorVisas(function(error) {
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
    describe('getTag', function() {
      it('should call getTag successfully', function(done) {
        //uncomment below and update the code to test getTag
        //instance.getTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTags', function() {
      it('should call getTags successfully', function(done) {
        //uncomment below and update the code to test getTags
        //instance.getTags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserInvitation', function() {
      it('should call getUserInvitation successfully', function(done) {
        //uncomment below and update the code to test getUserInvitation
        //instance.getUserInvitation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserInvitations', function() {
      it('should call getUserInvitations successfully', function(done) {
        //uncomment below and update the code to test getUserInvitations
        //instance.getUserInvitations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getValidation', function() {
      it('should call getValidation successfully', function(done) {
        //uncomment below and update the code to test getValidation
        //instance.getValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getValidations', function() {
      it('should call getValidations successfully', function(done) {
        //uncomment below and update the code to test getValidations
        //instance.getValidations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVisa', function() {
      it('should call getVisa successfully', function(done) {
        //uncomment below and update the code to test getVisa
        //instance.getVisa(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVisaComment', function() {
      it('should call getVisaComment successfully', function(done) {
        //uncomment below and update the code to test getVisaComment
        //instance.getVisaComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVisaComments', function() {
      it('should call getVisaComments successfully', function(done) {
        //uncomment below and update the code to test getVisaComments
        //instance.getVisaComments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVisas', function() {
      it('should call getVisas successfully', function(done) {
        //uncomment below and update the code to test getVisas
        //instance.getVisas(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importFromProject', function() {
      it('should call importFromProject successfully', function(done) {
        //uncomment below and update the code to test importFromProject
        //instance.importFromProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importManageGroup', function() {
      it('should call importManageGroup successfully', function(done) {
        //uncomment below and update the code to test importManageGroup
        //instance.importManageGroup(function(error) {
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
    describe('leaveProject', function() {
      it('should call leaveProject successfully', function(done) {
        //uncomment below and update the code to test leaveProject
        //instance.leaveProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('leaveVersionDocumentHistory', function() {
      it('should call leaveVersionDocumentHistory successfully', function(done) {
        //uncomment below and update the code to test leaveVersionDocumentHistory
        //instance.leaveVersionDocumentHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('makeHeadVersionDocumentHistory', function() {
      it('should call makeHeadVersionDocumentHistory successfully', function(done) {
        //uncomment below and update the code to test makeHeadVersionDocumentHistory
        //instance.makeHeadVersionDocumentHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pauseVisa', function() {
      it('should call pauseVisa successfully', function(done) {
        //uncomment below and update the code to test pauseVisa
        //instance.pauseVisa(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resetValidation', function() {
      it('should call resetValidation successfully', function(done) {
        //uncomment below and update the code to test resetValidation
        //instance.resetValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resumeVisa', function() {
      it('should call resumeVisa successfully', function(done) {
        //uncomment below and update the code to test resumeVisa
        //instance.resumeVisa(function(error) {
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
    describe('updateGroupFolder', function() {
      it('should call updateGroupFolder successfully', function(done) {
        //uncomment below and update the code to test updateGroupFolder
        //instance.updateGroupFolder(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateManageGroup', function() {
      it('should call updateManageGroup successfully', function(done) {
        //uncomment below and update the code to test updateManageGroup
        //instance.updateManageGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePreviewFile', function() {
      it('should call updatePreviewFile successfully', function(done) {
        //uncomment below and update the code to test updatePreviewFile
        //instance.updatePreviewFile(function(error) {
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
    describe('updateTag', function() {
      it('should call updateTag successfully', function(done) {
        //uncomment below and update the code to test updateTag
        //instance.updateTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateValidation', function() {
      it('should call updateValidation successfully', function(done) {
        //uncomment below and update the code to test updateValidation
        //instance.updateValidation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVisa', function() {
      it('should call updateVisa successfully', function(done) {
        //uncomment below and update the code to test updateVisa
        //instance.updateVisa(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVisaComment', function() {
      it('should call updateVisaComment successfully', function(done) {
        //uncomment below and update the code to test updateVisaComment
        //instance.updateVisaComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
