/**
 * BIMData API
 * BIMData API documentation
 *
 * OpenAPI spec version: v1
 * Contact: contact@bimdata.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CheckPlan', 'model/CheckerResult', 'model/Classification', 'model/Cloud', 'model/Document', 'model/Element', 'model/ElementClassificationRelation', 'model/ElementPropertySetRelation', 'model/Feature', 'model/Folder', 'model/FosUser', 'model/FosUserWrite', 'model/Ifc', 'model/IfcChecker', 'model/IfcCheckerCheckplan', 'model/IfcCheckerResults', 'model/IfcCreator', 'model/IfcDocument', 'model/IfcFiles', 'model/Notification', 'model/Project', 'model/ProjectRootFolder', 'model/Property', 'model/PropertyDefinition', 'model/PropertySet', 'model/Rule', 'model/RuleComponent', 'model/Ruleset', 'model/SignupFosUser', 'model/Space', 'model/Unit', 'model/Zone', 'model/ZoneSpace', 'api/CheckplanApi', 'api/CloudApi', 'api/IfcApi', 'api/ProjectApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/CheckPlan'), require('./model/CheckerResult'), require('./model/Classification'), require('./model/Cloud'), require('./model/Document'), require('./model/Element'), require('./model/ElementClassificationRelation'), require('./model/ElementPropertySetRelation'), require('./model/Feature'), require('./model/Folder'), require('./model/FosUser'), require('./model/FosUserWrite'), require('./model/Ifc'), require('./model/IfcChecker'), require('./model/IfcCheckerCheckplan'), require('./model/IfcCheckerResults'), require('./model/IfcCreator'), require('./model/IfcDocument'), require('./model/IfcFiles'), require('./model/Notification'), require('./model/Project'), require('./model/ProjectRootFolder'), require('./model/Property'), require('./model/PropertyDefinition'), require('./model/PropertySet'), require('./model/Rule'), require('./model/RuleComponent'), require('./model/Ruleset'), require('./model/SignupFosUser'), require('./model/Space'), require('./model/Unit'), require('./model/Zone'), require('./model/ZoneSpace'), require('./api/CheckplanApi'), require('./api/CloudApi'), require('./api/IfcApi'), require('./api/ProjectApi'), require('./api/UserApi'));
  }
}(function(ApiClient, CheckPlan, CheckerResult, Classification, Cloud, Document, Element, ElementClassificationRelation, ElementPropertySetRelation, Feature, Folder, FosUser, FosUserWrite, Ifc, IfcChecker, IfcCheckerCheckplan, IfcCheckerResults, IfcCreator, IfcDocument, IfcFiles, Notification, Project, ProjectRootFolder, Property, PropertyDefinition, PropertySet, Rule, RuleComponent, Ruleset, SignupFosUser, Space, Unit, Zone, ZoneSpace, CheckplanApi, CloudApi, IfcApi, ProjectApi, UserApi) {
  'use strict';

  /**
   * BIMData_API_documentation.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var bimdata = require('index'); // See note below*.
   * var xxxSvc = new bimdata.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new bimdata.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new bimdata.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new bimdata.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.15
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CheckPlan model constructor.
     * @property {module:model/CheckPlan}
     */
    CheckPlan: CheckPlan,
    /**
     * The CheckerResult model constructor.
     * @property {module:model/CheckerResult}
     */
    CheckerResult: CheckerResult,
    /**
     * The Classification model constructor.
     * @property {module:model/Classification}
     */
    Classification: Classification,
    /**
     * The Cloud model constructor.
     * @property {module:model/Cloud}
     */
    Cloud: Cloud,
    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document: Document,
    /**
     * The Element model constructor.
     * @property {module:model/Element}
     */
    Element: Element,
    /**
     * The ElementClassificationRelation model constructor.
     * @property {module:model/ElementClassificationRelation}
     */
    ElementClassificationRelation: ElementClassificationRelation,
    /**
     * The ElementPropertySetRelation model constructor.
     * @property {module:model/ElementPropertySetRelation}
     */
    ElementPropertySetRelation: ElementPropertySetRelation,
    /**
     * The Feature model constructor.
     * @property {module:model/Feature}
     */
    Feature: Feature,
    /**
     * The Folder model constructor.
     * @property {module:model/Folder}
     */
    Folder: Folder,
    /**
     * The FosUser model constructor.
     * @property {module:model/FosUser}
     */
    FosUser: FosUser,
    /**
     * The FosUserWrite model constructor.
     * @property {module:model/FosUserWrite}
     */
    FosUserWrite: FosUserWrite,
    /**
     * The Ifc model constructor.
     * @property {module:model/Ifc}
     */
    Ifc: Ifc,
    /**
     * The IfcChecker model constructor.
     * @property {module:model/IfcChecker}
     */
    IfcChecker: IfcChecker,
    /**
     * The IfcCheckerCheckplan model constructor.
     * @property {module:model/IfcCheckerCheckplan}
     */
    IfcCheckerCheckplan: IfcCheckerCheckplan,
    /**
     * The IfcCheckerResults model constructor.
     * @property {module:model/IfcCheckerResults}
     */
    IfcCheckerResults: IfcCheckerResults,
    /**
     * The IfcCreator model constructor.
     * @property {module:model/IfcCreator}
     */
    IfcCreator: IfcCreator,
    /**
     * The IfcDocument model constructor.
     * @property {module:model/IfcDocument}
     */
    IfcDocument: IfcDocument,
    /**
     * The IfcFiles model constructor.
     * @property {module:model/IfcFiles}
     */
    IfcFiles: IfcFiles,
    /**
     * The Notification model constructor.
     * @property {module:model/Notification}
     */
    Notification: Notification,
    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project: Project,
    /**
     * The ProjectRootFolder model constructor.
     * @property {module:model/ProjectRootFolder}
     */
    ProjectRootFolder: ProjectRootFolder,
    /**
     * The Property model constructor.
     * @property {module:model/Property}
     */
    Property: Property,
    /**
     * The PropertyDefinition model constructor.
     * @property {module:model/PropertyDefinition}
     */
    PropertyDefinition: PropertyDefinition,
    /**
     * The PropertySet model constructor.
     * @property {module:model/PropertySet}
     */
    PropertySet: PropertySet,
    /**
     * The Rule model constructor.
     * @property {module:model/Rule}
     */
    Rule: Rule,
    /**
     * The RuleComponent model constructor.
     * @property {module:model/RuleComponent}
     */
    RuleComponent: RuleComponent,
    /**
     * The Ruleset model constructor.
     * @property {module:model/Ruleset}
     */
    Ruleset: Ruleset,
    /**
     * The SignupFosUser model constructor.
     * @property {module:model/SignupFosUser}
     */
    SignupFosUser: SignupFosUser,
    /**
     * The Space model constructor.
     * @property {module:model/Space}
     */
    Space: Space,
    /**
     * The Unit model constructor.
     * @property {module:model/Unit}
     */
    Unit: Unit,
    /**
     * The Zone model constructor.
     * @property {module:model/Zone}
     */
    Zone: Zone,
    /**
     * The ZoneSpace model constructor.
     * @property {module:model/ZoneSpace}
     */
    ZoneSpace: ZoneSpace,
    /**
     * The CheckplanApi service constructor.
     * @property {module:api/CheckplanApi}
     */
    CheckplanApi: CheckplanApi,
    /**
     * The CloudApi service constructor.
     * @property {module:api/CloudApi}
     */
    CloudApi: CloudApi,
    /**
     * The IfcApi service constructor.
     * @property {module:api/IfcApi}
     */
    IfcApi: IfcApi,
    /**
     * The ProjectApi service constructor.
     * @property {module:api/ProjectApi}
     */
    ProjectApi: ProjectApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
