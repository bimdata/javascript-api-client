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


import ApiClient from './ApiClient';
import BcfProject from './model/BcfProject';
import CheckPlan from './model/CheckPlan';
import CheckerResult from './model/CheckerResult';
import Classification from './model/Classification';
import ClippingPlane from './model/ClippingPlane';
import Cloud from './model/Cloud';
import CloudInvitation from './model/CloudInvitation';
import CloudRole from './model/CloudRole';
import Coloring from './model/Coloring';
import Comment from './model/Comment';
import Component from './model/Component';
import ComponentsParent from './model/ComponentsParent';
import Direction from './model/Direction';
import Document from './model/Document';
import Element from './model/Element';
import ElementClassificationRelation from './model/ElementClassificationRelation';
import ElementPropertySetRelation from './model/ElementPropertySetRelation';
import Extensions from './model/Extensions';
import Feature from './model/Feature';
import Folder from './model/Folder';
import FullTopic from './model/FullTopic';
import Ifc from './model/Ifc';
import IfcAccessToken from './model/IfcAccessToken';
import IfcChecker from './model/IfcChecker';
import IfcCheckerCheckplan from './model/IfcCheckerCheckplan';
import IfcCheckerResults from './model/IfcCheckerResults';
import IfcErrors from './model/IfcErrors';
import IfcExport from './model/IfcExport';
import IfcFiles from './model/IfcFiles';
import IfcMerge from './model/IfcMerge';
import IfcOptimize from './model/IfcOptimize';
import Invitation from './model/Invitation';
import Label from './model/Label';
import Layer from './model/Layer';
import LayerElement from './model/LayerElement';
import Line from './model/Line';
import MarketplaceApp from './model/MarketplaceApp';
import MarketplaceAppImage from './model/MarketplaceAppImage';
import Material from './model/Material';
import MaterialListComponent from './model/MaterialListComponent';
import MaterialOption from './model/MaterialOption';
import Organization from './model/Organization';
import OrthogonalCamera from './model/OrthogonalCamera';
import PerspectiveCamera from './model/PerspectiveCamera';
import Point from './model/Point';
import Priority from './model/Priority';
import ProcessorHandler from './model/ProcessorHandler';
import Project from './model/Project';
import ProjectAccessToken from './model/ProjectAccessToken';
import ProjectInvitation from './model/ProjectInvitation';
import ProjectRole from './model/ProjectRole';
import ProjectWithChildren from './model/ProjectWithChildren';
import Property from './model/Property';
import PropertyDefinition from './model/PropertyDefinition';
import PropertySet from './model/PropertySet';
import RawClassification from './model/RawClassification';
import RawDefinition from './model/RawDefinition';
import RawElement from './model/RawElement';
import RawElements from './model/RawElements';
import RawLayer from './model/RawLayer';
import RawMaterial from './model/RawMaterial';
import RawMaterialList from './model/RawMaterialList';
import RawMaterialListComponents from './model/RawMaterialListComponents';
import RawMaterialOptions from './model/RawMaterialOptions';
import RawProperty from './model/RawProperty';
import RawPropertySet from './model/RawPropertySet';
import RawSystem from './model/RawSystem';
import RawUnit from './model/RawUnit';
import RecursiveFolderChildren from './model/RecursiveFolderChildren';
import Rule from './model/Rule';
import RuleComponent from './model/RuleComponent';
import Ruleset from './model/Ruleset';
import SelectUser from './model/SelectUser';
import SelfBcfUser from './model/SelfBcfUser';
import SelfUser from './model/SelfUser';
import SimpleElement from './model/SimpleElement';
import Snapshot from './model/Snapshot';
import Space from './model/Space';
import Stage from './model/Stage';
import System from './model/System';
import Topic from './model/Topic';
import TopicStatus from './model/TopicStatus';
import TopicType from './model/TopicType';
import Unit from './model/Unit';
import User from './model/User';
import UserCloudUpdate from './model/UserCloudUpdate';
import UserProjectUpdate from './model/UserProjectUpdate';
import ViewSetupHints from './model/ViewSetupHints';
import Viewpoint from './model/Viewpoint';
import Visibility from './model/Visibility';
import WebHook from './model/WebHook';
import Zone from './model/Zone';
import ZoneSpace from './model/ZoneSpace';
import BcfApi from './api/BcfApi';
import CheckerApi from './api/CheckerApi';
import CollaborationApi from './api/CollaborationApi';
import IfcApi from './api/IfcApi';
import SsoApi from './api/SsoApi';
import WebhookApi from './api/WebhookApi';


/**
* BIMData_API_is_a_tool_to_interact_with_your_models_stored_on_BIMDatas_servers_____Through_the_API_you_can_manage_your_projects_the_clouds_upload_your_IFC_files_and_manage_them_through_endpoints_.<br>
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
* @version 0.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BcfProject model constructor.
     * @property {module:model/BcfProject}
     */
    BcfProject,

    /**
     * The CheckPlan model constructor.
     * @property {module:model/CheckPlan}
     */
    CheckPlan,

    /**
     * The CheckerResult model constructor.
     * @property {module:model/CheckerResult}
     */
    CheckerResult,

    /**
     * The Classification model constructor.
     * @property {module:model/Classification}
     */
    Classification,

    /**
     * The ClippingPlane model constructor.
     * @property {module:model/ClippingPlane}
     */
    ClippingPlane,

    /**
     * The Cloud model constructor.
     * @property {module:model/Cloud}
     */
    Cloud,

    /**
     * The CloudInvitation model constructor.
     * @property {module:model/CloudInvitation}
     */
    CloudInvitation,

    /**
     * The CloudRole model constructor.
     * @property {module:model/CloudRole}
     */
    CloudRole,

    /**
     * The Coloring model constructor.
     * @property {module:model/Coloring}
     */
    Coloring,

    /**
     * The Comment model constructor.
     * @property {module:model/Comment}
     */
    Comment,

    /**
     * The Component model constructor.
     * @property {module:model/Component}
     */
    Component,

    /**
     * The ComponentsParent model constructor.
     * @property {module:model/ComponentsParent}
     */
    ComponentsParent,

    /**
     * The Direction model constructor.
     * @property {module:model/Direction}
     */
    Direction,

    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document,

    /**
     * The Element model constructor.
     * @property {module:model/Element}
     */
    Element,

    /**
     * The ElementClassificationRelation model constructor.
     * @property {module:model/ElementClassificationRelation}
     */
    ElementClassificationRelation,

    /**
     * The ElementPropertySetRelation model constructor.
     * @property {module:model/ElementPropertySetRelation}
     */
    ElementPropertySetRelation,

    /**
     * The Extensions model constructor.
     * @property {module:model/Extensions}
     */
    Extensions,

    /**
     * The Feature model constructor.
     * @property {module:model/Feature}
     */
    Feature,

    /**
     * The Folder model constructor.
     * @property {module:model/Folder}
     */
    Folder,

    /**
     * The FullTopic model constructor.
     * @property {module:model/FullTopic}
     */
    FullTopic,

    /**
     * The Ifc model constructor.
     * @property {module:model/Ifc}
     */
    Ifc,

    /**
     * The IfcAccessToken model constructor.
     * @property {module:model/IfcAccessToken}
     */
    IfcAccessToken,

    /**
     * The IfcChecker model constructor.
     * @property {module:model/IfcChecker}
     */
    IfcChecker,

    /**
     * The IfcCheckerCheckplan model constructor.
     * @property {module:model/IfcCheckerCheckplan}
     */
    IfcCheckerCheckplan,

    /**
     * The IfcCheckerResults model constructor.
     * @property {module:model/IfcCheckerResults}
     */
    IfcCheckerResults,

    /**
     * The IfcErrors model constructor.
     * @property {module:model/IfcErrors}
     */
    IfcErrors,

    /**
     * The IfcExport model constructor.
     * @property {module:model/IfcExport}
     */
    IfcExport,

    /**
     * The IfcFiles model constructor.
     * @property {module:model/IfcFiles}
     */
    IfcFiles,

    /**
     * The IfcMerge model constructor.
     * @property {module:model/IfcMerge}
     */
    IfcMerge,

    /**
     * The IfcOptimize model constructor.
     * @property {module:model/IfcOptimize}
     */
    IfcOptimize,

    /**
     * The Invitation model constructor.
     * @property {module:model/Invitation}
     */
    Invitation,

    /**
     * The Label model constructor.
     * @property {module:model/Label}
     */
    Label,

    /**
     * The Layer model constructor.
     * @property {module:model/Layer}
     */
    Layer,

    /**
     * The LayerElement model constructor.
     * @property {module:model/LayerElement}
     */
    LayerElement,

    /**
     * The Line model constructor.
     * @property {module:model/Line}
     */
    Line,

    /**
     * The MarketplaceApp model constructor.
     * @property {module:model/MarketplaceApp}
     */
    MarketplaceApp,

    /**
     * The MarketplaceAppImage model constructor.
     * @property {module:model/MarketplaceAppImage}
     */
    MarketplaceAppImage,

    /**
     * The Material model constructor.
     * @property {module:model/Material}
     */
    Material,

    /**
     * The MaterialListComponent model constructor.
     * @property {module:model/MaterialListComponent}
     */
    MaterialListComponent,

    /**
     * The MaterialOption model constructor.
     * @property {module:model/MaterialOption}
     */
    MaterialOption,

    /**
     * The Organization model constructor.
     * @property {module:model/Organization}
     */
    Organization,

    /**
     * The OrthogonalCamera model constructor.
     * @property {module:model/OrthogonalCamera}
     */
    OrthogonalCamera,

    /**
     * The PerspectiveCamera model constructor.
     * @property {module:model/PerspectiveCamera}
     */
    PerspectiveCamera,

    /**
     * The Point model constructor.
     * @property {module:model/Point}
     */
    Point,

    /**
     * The Priority model constructor.
     * @property {module:model/Priority}
     */
    Priority,

    /**
     * The ProcessorHandler model constructor.
     * @property {module:model/ProcessorHandler}
     */
    ProcessorHandler,

    /**
     * The Project model constructor.
     * @property {module:model/Project}
     */
    Project,

    /**
     * The ProjectAccessToken model constructor.
     * @property {module:model/ProjectAccessToken}
     */
    ProjectAccessToken,

    /**
     * The ProjectInvitation model constructor.
     * @property {module:model/ProjectInvitation}
     */
    ProjectInvitation,

    /**
     * The ProjectRole model constructor.
     * @property {module:model/ProjectRole}
     */
    ProjectRole,

    /**
     * The ProjectWithChildren model constructor.
     * @property {module:model/ProjectWithChildren}
     */
    ProjectWithChildren,

    /**
     * The Property model constructor.
     * @property {module:model/Property}
     */
    Property,

    /**
     * The PropertyDefinition model constructor.
     * @property {module:model/PropertyDefinition}
     */
    PropertyDefinition,

    /**
     * The PropertySet model constructor.
     * @property {module:model/PropertySet}
     */
    PropertySet,

    /**
     * The RawClassification model constructor.
     * @property {module:model/RawClassification}
     */
    RawClassification,

    /**
     * The RawDefinition model constructor.
     * @property {module:model/RawDefinition}
     */
    RawDefinition,

    /**
     * The RawElement model constructor.
     * @property {module:model/RawElement}
     */
    RawElement,

    /**
     * The RawElements model constructor.
     * @property {module:model/RawElements}
     */
    RawElements,

    /**
     * The RawLayer model constructor.
     * @property {module:model/RawLayer}
     */
    RawLayer,

    /**
     * The RawMaterial model constructor.
     * @property {module:model/RawMaterial}
     */
    RawMaterial,

    /**
     * The RawMaterialList model constructor.
     * @property {module:model/RawMaterialList}
     */
    RawMaterialList,

    /**
     * The RawMaterialListComponents model constructor.
     * @property {module:model/RawMaterialListComponents}
     */
    RawMaterialListComponents,

    /**
     * The RawMaterialOptions model constructor.
     * @property {module:model/RawMaterialOptions}
     */
    RawMaterialOptions,

    /**
     * The RawProperty model constructor.
     * @property {module:model/RawProperty}
     */
    RawProperty,

    /**
     * The RawPropertySet model constructor.
     * @property {module:model/RawPropertySet}
     */
    RawPropertySet,

    /**
     * The RawSystem model constructor.
     * @property {module:model/RawSystem}
     */
    RawSystem,

    /**
     * The RawUnit model constructor.
     * @property {module:model/RawUnit}
     */
    RawUnit,

    /**
     * The RecursiveFolderChildren model constructor.
     * @property {module:model/RecursiveFolderChildren}
     */
    RecursiveFolderChildren,

    /**
     * The Rule model constructor.
     * @property {module:model/Rule}
     */
    Rule,

    /**
     * The RuleComponent model constructor.
     * @property {module:model/RuleComponent}
     */
    RuleComponent,

    /**
     * The Ruleset model constructor.
     * @property {module:model/Ruleset}
     */
    Ruleset,

    /**
     * The SelectUser model constructor.
     * @property {module:model/SelectUser}
     */
    SelectUser,

    /**
     * The SelfBcfUser model constructor.
     * @property {module:model/SelfBcfUser}
     */
    SelfBcfUser,

    /**
     * The SelfUser model constructor.
     * @property {module:model/SelfUser}
     */
    SelfUser,

    /**
     * The SimpleElement model constructor.
     * @property {module:model/SimpleElement}
     */
    SimpleElement,

    /**
     * The Snapshot model constructor.
     * @property {module:model/Snapshot}
     */
    Snapshot,

    /**
     * The Space model constructor.
     * @property {module:model/Space}
     */
    Space,

    /**
     * The Stage model constructor.
     * @property {module:model/Stage}
     */
    Stage,

    /**
     * The System model constructor.
     * @property {module:model/System}
     */
    System,

    /**
     * The Topic model constructor.
     * @property {module:model/Topic}
     */
    Topic,

    /**
     * The TopicStatus model constructor.
     * @property {module:model/TopicStatus}
     */
    TopicStatus,

    /**
     * The TopicType model constructor.
     * @property {module:model/TopicType}
     */
    TopicType,

    /**
     * The Unit model constructor.
     * @property {module:model/Unit}
     */
    Unit,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserCloudUpdate model constructor.
     * @property {module:model/UserCloudUpdate}
     */
    UserCloudUpdate,

    /**
     * The UserProjectUpdate model constructor.
     * @property {module:model/UserProjectUpdate}
     */
    UserProjectUpdate,

    /**
     * The ViewSetupHints model constructor.
     * @property {module:model/ViewSetupHints}
     */
    ViewSetupHints,

    /**
     * The Viewpoint model constructor.
     * @property {module:model/Viewpoint}
     */
    Viewpoint,

    /**
     * The Visibility model constructor.
     * @property {module:model/Visibility}
     */
    Visibility,

    /**
     * The WebHook model constructor.
     * @property {module:model/WebHook}
     */
    WebHook,

    /**
     * The Zone model constructor.
     * @property {module:model/Zone}
     */
    Zone,

    /**
     * The ZoneSpace model constructor.
     * @property {module:model/ZoneSpace}
     */
    ZoneSpace,

    /**
    * The BcfApi service constructor.
    * @property {module:api/BcfApi}
    */
    BcfApi,

    /**
    * The CheckerApi service constructor.
    * @property {module:api/CheckerApi}
    */
    CheckerApi,

    /**
    * The CollaborationApi service constructor.
    * @property {module:api/CollaborationApi}
    */
    CollaborationApi,

    /**
    * The IfcApi service constructor.
    * @property {module:api/IfcApi}
    */
    IfcApi,

    /**
    * The SsoApi service constructor.
    * @property {module:api/SsoApi}
    */
    SsoApi,

    /**
    * The WebhookApi service constructor.
    * @property {module:api/WebhookApi}
    */
    WebhookApi
};
