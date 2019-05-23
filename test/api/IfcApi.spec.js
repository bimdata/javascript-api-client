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
    instance = new bimdata.IfcApi();
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

  describe('IfcApi', function() {
    describe('bulkDeleteIfcClassifications', function() {
      it('should call bulkDeleteIfcClassifications successfully', function(done) {
        //uncomment below and update the code to test bulkDeleteIfcClassifications
        //instance.bulkDeleteIfcClassifications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkDeleteIfcProperties', function() {
      it('should call bulkDeleteIfcProperties successfully', function(done) {
        //uncomment below and update the code to test bulkDeleteIfcProperties
        //instance.bulkDeleteIfcProperties(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkDeleteIfcPropertyDefinitions', function() {
      it('should call bulkDeleteIfcPropertyDefinitions successfully', function(done) {
        //uncomment below and update the code to test bulkDeleteIfcPropertyDefinitions
        //instance.bulkDeleteIfcPropertyDefinitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkDeleteIfcUnits', function() {
      it('should call bulkDeleteIfcUnits successfully', function(done) {
        //uncomment below and update the code to test bulkDeleteIfcUnits
        //instance.bulkDeleteIfcUnits(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkDeletePropertySet', function() {
      it('should call bulkDeletePropertySet successfully', function(done) {
        //uncomment below and update the code to test bulkDeletePropertySet
        //instance.bulkDeletePropertySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkFullUpdateElements', function() {
      it('should call bulkFullUpdateElements successfully', function(done) {
        //uncomment below and update the code to test bulkFullUpdateElements
        //instance.bulkFullUpdateElements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkFullUpdateIfcProperty', function() {
      it('should call bulkFullUpdateIfcProperty successfully', function(done) {
        //uncomment below and update the code to test bulkFullUpdateIfcProperty
        //instance.bulkFullUpdateIfcProperty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkRemoveClassificationsOfElement', function() {
      it('should call bulkRemoveClassificationsOfElement successfully', function(done) {
        //uncomment below and update the code to test bulkRemoveClassificationsOfElement
        //instance.bulkRemoveClassificationsOfElement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkRemoveElementsFromClassification', function() {
      it('should call bulkRemoveElementsFromClassification successfully', function(done) {
        //uncomment below and update the code to test bulkRemoveElementsFromClassification
        //instance.bulkRemoveElementsFromClassification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkUpdateElements', function() {
      it('should call bulkUpdateElements successfully', function(done) {
        //uncomment below and update the code to test bulkUpdateElements
        //instance.bulkUpdateElements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bulkUpdateIfcProperty', function() {
      it('should call bulkUpdateIfcProperty successfully', function(done) {
        //uncomment below and update the code to test bulkUpdateIfcProperty
        //instance.bulkUpdateIfcProperty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cloudProjectIfcProcessorhandlerPartialUpdate', function() {
      it('should call cloudProjectIfcProcessorhandlerPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test cloudProjectIfcProcessorhandlerPartialUpdate
        //instance.cloudProjectIfcProcessorhandlerPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createClassificationElementRelations', function() {
      it('should call createClassificationElementRelations successfully', function(done) {
        //uncomment below and update the code to test createClassificationElementRelations
        //instance.createClassificationElementRelations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createClassificationsOfElement', function() {
      it('should call createClassificationsOfElement successfully', function(done) {
        //uncomment below and update the code to test createClassificationsOfElement
        //instance.createClassificationsOfElement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createElement', function() {
      it('should call createElement successfully', function(done) {
        //uncomment below and update the code to test createElement
        //instance.createElement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createElementPropertySet', function() {
      it('should call createElementPropertySet successfully', function(done) {
        //uncomment below and update the code to test createElementPropertySet
        //instance.createElementPropertySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createElementPropertySetProperty', function() {
      it('should call createElementPropertySetProperty successfully', function(done) {
        //uncomment below and update the code to test createElementPropertySetProperty
        //instance.createElementPropertySetProperty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createElementPropertySetPropertyDefinition', function() {
      it('should call createElementPropertySetPropertyDefinition successfully', function(done) {
        //uncomment below and update the code to test createElementPropertySetPropertyDefinition
        //instance.createElementPropertySetPropertyDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createElementPropertySetPropertyDefinitionUnit', function() {
      it('should call createElementPropertySetPropertyDefinitionUnit successfully', function(done) {
        //uncomment below and update the code to test createElementPropertySetPropertyDefinitionUnit
        //instance.createElementPropertySetPropertyDefinitionUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createIfcPropertyDefinition', function() {
      it('should call createIfcPropertyDefinition successfully', function(done) {
        //uncomment below and update the code to test createIfcPropertyDefinition
        //instance.createIfcPropertyDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createIfcUnit', function() {
      it('should call createIfcUnit successfully', function(done) {
        //uncomment below and update the code to test createIfcUnit
        //instance.createIfcUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPropertySet', function() {
      it('should call createPropertySet successfully', function(done) {
        //uncomment below and update the code to test createPropertySet
        //instance.createPropertySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createPropertySetElementRelations', function() {
      it('should call createPropertySetElementRelations successfully', function(done) {
        //uncomment below and update the code to test createPropertySetElementRelations
        //instance.createPropertySetElementRelations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRawElements', function() {
      it('should call createRawElements successfully', function(done) {
        //uncomment below and update the code to test createRawElements
        //instance.createRawElements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSpace', function() {
      it('should call createSpace successfully', function(done) {
        //uncomment below and update the code to test createSpace
        //instance.createSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createZone', function() {
      it('should call createZone successfully', function(done) {
        //uncomment below and update the code to test createZone
        //instance.createZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createZoneSpace', function() {
      it('should call createZoneSpace successfully', function(done) {
        //uncomment below and update the code to test createZoneSpace
        //instance.createZoneSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteElement', function() {
      it('should call deleteElement successfully', function(done) {
        //uncomment below and update the code to test deleteElement
        //instance.deleteElement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteIfc', function() {
      it('should call deleteIfc successfully', function(done) {
        //uncomment below and update the code to test deleteIfc
        //instance.deleteIfc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteIfcProperty', function() {
      it('should call deleteIfcProperty successfully', function(done) {
        //uncomment below and update the code to test deleteIfcProperty
        //instance.deleteIfcProperty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteIfcPropertyDefinition', function() {
      it('should call deleteIfcPropertyDefinition successfully', function(done) {
        //uncomment below and update the code to test deleteIfcPropertyDefinition
        //instance.deleteIfcPropertyDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteIfcUnit', function() {
      it('should call deleteIfcUnit successfully', function(done) {
        //uncomment below and update the code to test deleteIfcUnit
        //instance.deleteIfcUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePropertySet', function() {
      it('should call deletePropertySet successfully', function(done) {
        //uncomment below and update the code to test deletePropertySet
        //instance.deletePropertySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSpace', function() {
      it('should call deleteSpace successfully', function(done) {
        //uncomment below and update the code to test deleteSpace
        //instance.deleteSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteZone', function() {
      it('should call deleteZone successfully', function(done) {
        //uncomment below and update the code to test deleteZone
        //instance.deleteZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteZoneSpace', function() {
      it('should call deleteZoneSpace successfully', function(done) {
        //uncomment below and update the code to test deleteZoneSpace
        //instance.deleteZoneSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('exportIfc', function() {
      it('should call exportIfc successfully', function(done) {
        //uncomment below and update the code to test exportIfc
        //instance.exportIfc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateElement', function() {
      it('should call fullUpdateElement successfully', function(done) {
        //uncomment below and update the code to test fullUpdateElement
        //instance.fullUpdateElement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateIfc', function() {
      it('should call fullUpdateIfc successfully', function(done) {
        //uncomment below and update the code to test fullUpdateIfc
        //instance.fullUpdateIfc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateIfcProperty', function() {
      it('should call fullUpdateIfcProperty successfully', function(done) {
        //uncomment below and update the code to test fullUpdateIfcProperty
        //instance.fullUpdateIfcProperty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateIfcPropertyDefinition', function() {
      it('should call fullUpdateIfcPropertyDefinition successfully', function(done) {
        //uncomment below and update the code to test fullUpdateIfcPropertyDefinition
        //instance.fullUpdateIfcPropertyDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateIfcUnit', function() {
      it('should call fullUpdateIfcUnit successfully', function(done) {
        //uncomment below and update the code to test fullUpdateIfcUnit
        //instance.fullUpdateIfcUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdatePropertySet', function() {
      it('should call fullUpdatePropertySet successfully', function(done) {
        //uncomment below and update the code to test fullUpdatePropertySet
        //instance.fullUpdatePropertySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateSpace', function() {
      it('should call fullUpdateSpace successfully', function(done) {
        //uncomment below and update the code to test fullUpdateSpace
        //instance.fullUpdateSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateZone', function() {
      it('should call fullUpdateZone successfully', function(done) {
        //uncomment below and update the code to test fullUpdateZone
        //instance.fullUpdateZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fullUpdateZoneSpace', function() {
      it('should call fullUpdateZoneSpace successfully', function(done) {
        //uncomment below and update the code to test fullUpdateZoneSpace
        //instance.fullUpdateZoneSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClassificationsOfElement', function() {
      it('should call getClassificationsOfElement successfully', function(done) {
        //uncomment below and update the code to test getClassificationsOfElement
        //instance.getClassificationsOfElement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElement', function() {
      it('should call getElement successfully', function(done) {
        //uncomment below and update the code to test getElement
        //instance.getElement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElementPropertySet', function() {
      it('should call getElementPropertySet successfully', function(done) {
        //uncomment below and update the code to test getElementPropertySet
        //instance.getElementPropertySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElementPropertySetProperties', function() {
      it('should call getElementPropertySetProperties successfully', function(done) {
        //uncomment below and update the code to test getElementPropertySetProperties
        //instance.getElementPropertySetProperties(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElementPropertySetProperty', function() {
      it('should call getElementPropertySetProperty successfully', function(done) {
        //uncomment below and update the code to test getElementPropertySetProperty
        //instance.getElementPropertySetProperty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElementPropertySetPropertyDefinition', function() {
      it('should call getElementPropertySetPropertyDefinition successfully', function(done) {
        //uncomment below and update the code to test getElementPropertySetPropertyDefinition
        //instance.getElementPropertySetPropertyDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElementPropertySetPropertyDefinitionUnit', function() {
      it('should call getElementPropertySetPropertyDefinitionUnit successfully', function(done) {
        //uncomment below and update the code to test getElementPropertySetPropertyDefinitionUnit
        //instance.getElementPropertySetPropertyDefinitionUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElementPropertySetPropertyDefinitionUnits', function() {
      it('should call getElementPropertySetPropertyDefinitionUnits successfully', function(done) {
        //uncomment below and update the code to test getElementPropertySetPropertyDefinitionUnits
        //instance.getElementPropertySetPropertyDefinitionUnits(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElementPropertySetPropertyDefinitions', function() {
      it('should call getElementPropertySetPropertyDefinitions successfully', function(done) {
        //uncomment below and update the code to test getElementPropertySetPropertyDefinitions
        //instance.getElementPropertySetPropertyDefinitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElementPropertySets', function() {
      it('should call getElementPropertySets successfully', function(done) {
        //uncomment below and update the code to test getElementPropertySets
        //instance.getElementPropertySets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElements', function() {
      it('should call getElements successfully', function(done) {
        //uncomment below and update the code to test getElements
        //instance.getElements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getElementsFromClassification', function() {
      it('should call getElementsFromClassification successfully', function(done) {
        //uncomment below and update the code to test getElementsFromClassification
        //instance.getElementsFromClassification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfc', function() {
      it('should call getIfc successfully', function(done) {
        //uncomment below and update the code to test getIfc
        //instance.getIfc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcBVH', function() {
      it('should call getIfcBVH successfully', function(done) {
        //uncomment below and update the code to test getIfcBVH
        //instance.getIfcBVH(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcClassifications', function() {
      it('should call getIfcClassifications successfully', function(done) {
        //uncomment below and update the code to test getIfcClassifications
        //instance.getIfcClassifications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcGLTF', function() {
      it('should call getIfcGLTF successfully', function(done) {
        //uncomment below and update the code to test getIfcGLTF
        //instance.getIfcGLTF(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcMap', function() {
      it('should call getIfcMap successfully', function(done) {
        //uncomment below and update the code to test getIfcMap
        //instance.getIfcMap(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcProperties', function() {
      it('should call getIfcProperties successfully', function(done) {
        //uncomment below and update the code to test getIfcProperties
        //instance.getIfcProperties(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcProperty', function() {
      it('should call getIfcProperty successfully', function(done) {
        //uncomment below and update the code to test getIfcProperty
        //instance.getIfcProperty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcPropertyDefinition', function() {
      it('should call getIfcPropertyDefinition successfully', function(done) {
        //uncomment below and update the code to test getIfcPropertyDefinition
        //instance.getIfcPropertyDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcPropertyDefinitions', function() {
      it('should call getIfcPropertyDefinitions successfully', function(done) {
        //uncomment below and update the code to test getIfcPropertyDefinitions
        //instance.getIfcPropertyDefinitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcStructure', function() {
      it('should call getIfcStructure successfully', function(done) {
        //uncomment below and update the code to test getIfcStructure
        //instance.getIfcStructure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcSystems', function() {
      it('should call getIfcSystems successfully', function(done) {
        //uncomment below and update the code to test getIfcSystems
        //instance.getIfcSystems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcUnit', function() {
      it('should call getIfcUnit successfully', function(done) {
        //uncomment below and update the code to test getIfcUnit
        //instance.getIfcUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcUnits', function() {
      it('should call getIfcUnits successfully', function(done) {
        //uncomment below and update the code to test getIfcUnits
        //instance.getIfcUnits(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIfcs', function() {
      it('should call getIfcs successfully', function(done) {
        //uncomment below and update the code to test getIfcs
        //instance.getIfcs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProcessorHandler', function() {
      it('should call getProcessorHandler successfully', function(done) {
        //uncomment below and update the code to test getProcessorHandler
        //instance.getProcessorHandler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getProcessorHandlers', function() {
      it('should call getProcessorHandlers successfully', function(done) {
        //uncomment below and update the code to test getProcessorHandlers
        //instance.getProcessorHandlers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPropertySet', function() {
      it('should call getPropertySet successfully', function(done) {
        //uncomment below and update the code to test getPropertySet
        //instance.getPropertySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPropertySets', function() {
      it('should call getPropertySets successfully', function(done) {
        //uncomment below and update the code to test getPropertySets
        //instance.getPropertySets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRawElements', function() {
      it('should call getRawElements successfully', function(done) {
        //uncomment below and update the code to test getRawElements
        //instance.getRawElements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpace', function() {
      it('should call getSpace successfully', function(done) {
        //uncomment below and update the code to test getSpace
        //instance.getSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSpaces', function() {
      it('should call getSpaces successfully', function(done) {
        //uncomment below and update the code to test getSpaces
        //instance.getSpaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZone', function() {
      it('should call getZone successfully', function(done) {
        //uncomment below and update the code to test getZone
        //instance.getZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneSpace', function() {
      it('should call getZoneSpace successfully', function(done) {
        //uncomment below and update the code to test getZoneSpace
        //instance.getZoneSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZoneSpaces', function() {
      it('should call getZoneSpaces successfully', function(done) {
        //uncomment below and update the code to test getZoneSpaces
        //instance.getZoneSpaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getZones', function() {
      it('should call getZones successfully', function(done) {
        //uncomment below and update the code to test getZones
        //instance.getZones(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listClassificationElementRelations', function() {
      it('should call listClassificationElementRelations successfully', function(done) {
        //uncomment below and update the code to test listClassificationElementRelations
        //instance.listClassificationElementRelations(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeClassificationOfElement', function() {
      it('should call removeClassificationOfElement successfully', function(done) {
        //uncomment below and update the code to test removeClassificationOfElement
        //instance.removeClassificationOfElement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeElementPropertySet', function() {
      it('should call removeElementPropertySet successfully', function(done) {
        //uncomment below and update the code to test removeElementPropertySet
        //instance.removeElementPropertySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeElementPropertySetProperty', function() {
      it('should call removeElementPropertySetProperty successfully', function(done) {
        //uncomment below and update the code to test removeElementPropertySetProperty
        //instance.removeElementPropertySetProperty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeElementPropertySetPropertyDefinition', function() {
      it('should call removeElementPropertySetPropertyDefinition successfully', function(done) {
        //uncomment below and update the code to test removeElementPropertySetPropertyDefinition
        //instance.removeElementPropertySetPropertyDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeElementPropertySetPropertyDefinitionUnit', function() {
      it('should call removeElementPropertySetPropertyDefinitionUnit successfully', function(done) {
        //uncomment below and update the code to test removeElementPropertySetPropertyDefinitionUnit
        //instance.removeElementPropertySetPropertyDefinitionUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeElementsFromClassification', function() {
      it('should call removeElementsFromClassification successfully', function(done) {
        //uncomment below and update the code to test removeElementsFromClassification
        //instance.removeElementsFromClassification(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateElement', function() {
      it('should call updateElement successfully', function(done) {
        //uncomment below and update the code to test updateElement
        //instance.updateElement(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateIfc', function() {
      it('should call updateIfc successfully', function(done) {
        //uncomment below and update the code to test updateIfc
        //instance.updateIfc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateIfcFiles', function() {
      it('should call updateIfcFiles successfully', function(done) {
        //uncomment below and update the code to test updateIfcFiles
        //instance.updateIfcFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateIfcProperty', function() {
      it('should call updateIfcProperty successfully', function(done) {
        //uncomment below and update the code to test updateIfcProperty
        //instance.updateIfcProperty(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateIfcPropertyDefinition', function() {
      it('should call updateIfcPropertyDefinition successfully', function(done) {
        //uncomment below and update the code to test updateIfcPropertyDefinition
        //instance.updateIfcPropertyDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateIfcUnit', function() {
      it('should call updateIfcUnit successfully', function(done) {
        //uncomment below and update the code to test updateIfcUnit
        //instance.updateIfcUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateProcessorHandler', function() {
      it('should call updateProcessorHandler successfully', function(done) {
        //uncomment below and update the code to test updateProcessorHandler
        //instance.updateProcessorHandler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePropertySet', function() {
      it('should call updatePropertySet successfully', function(done) {
        //uncomment below and update the code to test updatePropertySet
        //instance.updatePropertySet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSpace', function() {
      it('should call updateSpace successfully', function(done) {
        //uncomment below and update the code to test updateSpace
        //instance.updateSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateZone', function() {
      it('should call updateZone successfully', function(done) {
        //uncomment below and update the code to test updateZone
        //instance.updateZone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateZoneSpace', function() {
      it('should call updateZoneSpace successfully', function(done) {
        //uncomment below and update the code to test updateZoneSpace
        //instance.updateZoneSpace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
