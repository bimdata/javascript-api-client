/**
 * BIMData API
 * BIMData API is a tool to interact with your models stored on BIMData’s servers.     Through the API, you can manage your projects, the clouds, upload your IFC files and manage them through endpoints.
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
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
    describe('createColoring', function() {
      it('should call createColoring successfully', function(done) {
        //uncomment below and update the code to test createColoring
        //instance.createColoring(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
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
    describe('createSelection', function() {
      it('should call createSelection successfully', function(done) {
        //uncomment below and update the code to test createSelection
        //instance.createSelection(function(error) {
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
    describe('createVisibility', function() {
      it('should call createVisibility successfully', function(done) {
        //uncomment below and update the code to test createVisibility
        //instance.createVisibility(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteColoring', function() {
      it('should call deleteColoring successfully', function(done) {
        //uncomment below and update the code to test deleteColoring
        //instance.deleteColoring(function(error) {
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
    describe('deleteSelection', function() {
      it('should call deleteSelection successfully', function(done) {
        //uncomment below and update the code to test deleteSelection
        //instance.deleteSelection(function(error) {
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
    describe('deleteVisibility', function() {
      it('should call deleteVisibility successfully', function(done) {
        //uncomment below and update the code to test deleteVisibility
        //instance.deleteVisibility(function(error) {
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
    describe('fullUpdateColoring', function() {
      it('should call fullUpdateColoring successfully', function(done) {
        //uncomment below and update the code to test fullUpdateColoring
        //instance.fullUpdateColoring(function(error) {
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
    describe('fullUpdateSelection', function() {
      it('should call fullUpdateSelection successfully', function(done) {
        //uncomment below and update the code to test fullUpdateSelection
        //instance.fullUpdateSelection(function(error) {
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
    describe('fullUpdateVisibility', function() {
      it('should call fullUpdateVisibility successfully', function(done) {
        //uncomment below and update the code to test fullUpdateVisibility
        //instance.fullUpdateVisibility(function(error) {
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
    describe('getColoring', function() {
      it('should call getColoring successfully', function(done) {
        //uncomment below and update the code to test getColoring
        //instance.getColoring(function(error) {
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
    describe('getSelection', function() {
      it('should call getSelection successfully', function(done) {
        //uncomment below and update the code to test getSelection
        //instance.getSelection(function(error) {
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
    describe('getVisibility', function() {
      it('should call getVisibility successfully', function(done) {
        //uncomment below and update the code to test getVisibility
        //instance.getVisibility(function(error) {
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
    describe('updateColoring', function() {
      it('should call updateColoring successfully', function(done) {
        //uncomment below and update the code to test updateColoring
        //instance.updateColoring(function(error) {
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
    describe('updateExtensions', function() {
      it('should call updateExtensions successfully', function(done) {
        //uncomment below and update the code to test updateExtensions
        //instance.updateExtensions(function(error) {
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
    describe('updateSelection', function() {
      it('should call updateSelection successfully', function(done) {
        //uncomment below and update the code to test updateSelection
        //instance.updateSelection(function(error) {
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
    describe('updateVisibility', function() {
      it('should call updateVisibility successfully', function(done) {
        //uncomment below and update the code to test updateVisibility
        //instance.updateVisibility(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));