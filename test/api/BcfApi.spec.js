/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1 (v1)
 * 
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
    instance = new bimdata.BcfApi();
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

  describe('BcfApi', function() {
    describe('createComment', function() {
      it('should call createComment successfully', function(done) {
        //uncomment below and update the code to test createComment
        //instance.createComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createExtensionLabel', function() {
      it('should call createExtensionLabel successfully', function(done) {
        //uncomment below and update the code to test createExtensionLabel
        //instance.createExtensionLabel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createExtensionPriority', function() {
      it('should call createExtensionPriority successfully', function(done) {
        //uncomment below and update the code to test createExtensionPriority
        //instance.createExtensionPriority(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createExtensionStage', function() {
      it('should call createExtensionStage successfully', function(done) {
        //uncomment below and update the code to test createExtensionStage
        //instance.createExtensionStage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createExtensionStatus', function() {
      it('should call createExtensionStatus successfully', function(done) {
        //uncomment below and update the code to test createExtensionStatus
        //instance.createExtensionStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createExtensionType', function() {
      it('should call createExtensionType successfully', function(done) {
        //uncomment below and update the code to test createExtensionType
        //instance.createExtensionType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createFullTopic', function() {
      it('should call createFullTopic successfully', function(done) {
        //uncomment below and update the code to test createFullTopic
        //instance.createFullTopic(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTopic', function() {
      it('should call createTopic successfully', function(done) {
        //uncomment below and update the code to test createTopic
        //instance.createTopic(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createViewpoint', function() {
      it('should call createViewpoint successfully', function(done) {
        //uncomment below and update the code to test createViewpoint
        //instance.createViewpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteComment', function() {
      it('should call deleteComment successfully', function(done) {
        //uncomment below and update the code to test deleteComment
        //instance.deleteComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteExtensionLabel', function() {
      it('should call deleteExtensionLabel successfully', function(done) {
        //uncomment below and update the code to test deleteExtensionLabel
        //instance.deleteExtensionLabel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteExtensionPriority', function() {
      it('should call deleteExtensionPriority successfully', function(done) {
        //uncomment below and update the code to test deleteExtensionPriority
        //instance.deleteExtensionPriority(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteExtensionStage', function() {
      it('should call deleteExtensionStage successfully', function(done) {
        //uncomment below and update the code to test deleteExtensionStage
        //instance.deleteExtensionStage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteExtensionStatus', function() {
      it('should call deleteExtensionStatus successfully', function(done) {
        //uncomment below and update the code to test deleteExtensionStatus
        //instance.deleteExtensionStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteExtensionType', function() {
      it('should call deleteExtensionType successfully', function(done) {
        //uncomment below and update the code to test deleteExtensionType
        //instance.deleteExtensionType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTopic', function() {
      it('should call deleteTopic successfully', function(done) {
        //uncomment below and update the code to test deleteTopic
        //instance.deleteTopic(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteViewpoint', function() {
      it('should call deleteViewpoint successfully', function(done) {
        //uncomment below and update the code to test deleteViewpoint
        //instance.deleteViewpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadBcfExport', function() {
      it('should call downloadBcfExport successfully', function(done) {
        //uncomment below and update the code to test downloadBcfExport
        //instance.downloadBcfExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateBcfProject', function() {
      it('should call fullUpdateBcfProject successfully', function(done) {
        //uncomment below and update the code to test fullUpdateBcfProject
        //instance.fullUpdateBcfProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateComment', function() {
      it('should call fullUpdateComment successfully', function(done) {
        //uncomment below and update the code to test fullUpdateComment
        //instance.fullUpdateComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateFullTopic', function() {
      it('should call fullUpdateFullTopic successfully', function(done) {
        //uncomment below and update the code to test fullUpdateFullTopic
        //instance.fullUpdateFullTopic(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateTopic', function() {
      it('should call fullUpdateTopic successfully', function(done) {
        //uncomment below and update the code to test fullUpdateTopic
        //instance.fullUpdateTopic(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateViewpoint', function() {
      it('should call fullUpdateViewpoint successfully', function(done) {
        //uncomment below and update the code to test fullUpdateViewpoint
        //instance.fullUpdateViewpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBcfProject', function() {
      it('should call getBcfProject successfully', function(done) {
        //uncomment below and update the code to test getBcfProject
        //instance.getBcfProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBcfProjects', function() {
      it('should call getBcfProjects successfully', function(done) {
        //uncomment below and update the code to test getBcfProjects
        //instance.getBcfProjects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getColorings', function() {
      it('should call getColorings successfully', function(done) {
        //uncomment below and update the code to test getColorings
        //instance.getColorings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getComment', function() {
      it('should call getComment successfully', function(done) {
        //uncomment below and update the code to test getComment
        //instance.getComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getComments', function() {
      it('should call getComments successfully', function(done) {
        //uncomment below and update the code to test getComments
        //instance.getComments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDetailedExtensions', function() {
      it('should call getDetailedExtensions successfully', function(done) {
        //uncomment below and update the code to test getDetailedExtensions
        //instance.getDetailedExtensions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExtensions', function() {
      it('should call getExtensions successfully', function(done) {
        //uncomment below and update the code to test getExtensions
        //instance.getExtensions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFullTopic', function() {
      it('should call getFullTopic successfully', function(done) {
        //uncomment below and update the code to test getFullTopic
        //instance.getFullTopic(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFullTopics', function() {
      it('should call getFullTopics successfully', function(done) {
        //uncomment below and update the code to test getFullTopics
        //instance.getFullTopics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSelections', function() {
      it('should call getSelections successfully', function(done) {
        //uncomment below and update the code to test getSelections
        //instance.getSelections(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSnapshot', function() {
      it('should call getSnapshot successfully', function(done) {
        //uncomment below and update the code to test getSnapshot
        //instance.getSnapshot(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTopic', function() {
      it('should call getTopic successfully', function(done) {
        //uncomment below and update the code to test getTopic
        //instance.getTopic(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTopicViewpoints', function() {
      it('should call getTopicViewpoints successfully', function(done) {
        //uncomment below and update the code to test getTopicViewpoints
        //instance.getTopicViewpoints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTopics', function() {
      it('should call getTopics successfully', function(done) {
        //uncomment below and update the code to test getTopics
        //instance.getTopics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUser', function() {
      it('should call getUser successfully', function(done) {
        //uncomment below and update the code to test getUser
        //instance.getUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getViewpoint', function() {
      it('should call getViewpoint successfully', function(done) {
        //uncomment below and update the code to test getViewpoint
        //instance.getViewpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getViewpoints', function() {
      it('should call getViewpoints successfully', function(done) {
        //uncomment below and update the code to test getViewpoints
        //instance.getViewpoints(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVisibilities', function() {
      it('should call getVisibilities successfully', function(done) {
        //uncomment below and update the code to test getVisibilities
        //instance.getVisibilities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('importBcf', function() {
      it('should call importBcf successfully', function(done) {
        //uncomment below and update the code to test importBcf
        //instance.importBcf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateBcfProject', function() {
      it('should call updateBcfProject successfully', function(done) {
        //uncomment below and update the code to test updateBcfProject
        //instance.updateBcfProject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateComment', function() {
      it('should call updateComment successfully', function(done) {
        //uncomment below and update the code to test updateComment
        //instance.updateComment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExtensionLabel', function() {
      it('should call updateExtensionLabel successfully', function(done) {
        //uncomment below and update the code to test updateExtensionLabel
        //instance.updateExtensionLabel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExtensionPriority', function() {
      it('should call updateExtensionPriority successfully', function(done) {
        //uncomment below and update the code to test updateExtensionPriority
        //instance.updateExtensionPriority(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExtensionStage', function() {
      it('should call updateExtensionStage successfully', function(done) {
        //uncomment below and update the code to test updateExtensionStage
        //instance.updateExtensionStage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExtensionStatus', function() {
      it('should call updateExtensionStatus successfully', function(done) {
        //uncomment below and update the code to test updateExtensionStatus
        //instance.updateExtensionStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExtensionType', function() {
      it('should call updateExtensionType successfully', function(done) {
        //uncomment below and update the code to test updateExtensionType
        //instance.updateExtensionType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFullTopic', function() {
      it('should call updateFullTopic successfully', function(done) {
        //uncomment below and update the code to test updateFullTopic
        //instance.updateFullTopic(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTopic', function() {
      it('should call updateTopic successfully', function(done) {
        //uncomment below and update the code to test updateTopic
        //instance.updateTopic(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateViewpoint', function() {
      it('should call updateViewpoint successfully', function(done) {
        //uncomment below and update the code to test updateViewpoint
        //instance.updateViewpoint(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
