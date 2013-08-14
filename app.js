Ext.require([
                'Ext.direct.*',
                'Ext.data.*',
                'Ext.grid.*',
                'Ext.model.*',
                'Ext.store.*',
                'Ext.view.*'
            ]);

////////////////////////////////////////////////
//http://www.sencha.com/products/extjs/extdirect
//Ext.Loader.setConfig({ enabled: true });
//Ext.app.REMOTING_API = {
//    "url":"remote\/router.php",
//    "type":"remoting",
//    "actions":{
//        "AlbumList":[{
//                         "name":"getAll",
//                         "len":0
//                     },{
//                         "name":"add",
//                         "len":1
//                     }]
//    }
//};
//AlbumList.getAll(function(provider, response) {
// process response
//});
//Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);

Ext.application( {
                     name        : 'BAML',
                     appFolder   : 'app',
                     models      : ['Company' ],
                     stores      : ['Companies' ],
                     controllers : ['Main' ],
                     requires    : [
                         'BAML.view.*',
                         'BAML.data.*',
                         //'BAML.data.DataSets',
                         //'BAML.proxy.SalesforceRemotingProxy',
                         'BAML.proxy.*',
                         'BAML.controller.*',
                         'BAML.model.*' ],

                     launch : function ()
                     {
                         Ext.create( 'BAML.view.MyGrid', {
                             renderTo : Ext.getElementById( 'contentGrid' ),
                             height   : 200
                         } );

                         Ext.create( 'Ext.Panel', {
                             renderTo : Ext.getElementById( 'contentPanel' ),
                             height   : 100
                         } );
                     }
                 } );