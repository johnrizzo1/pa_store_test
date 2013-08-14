Ext.define( 'BAML.controller.Main', {
    extend : 'Ext.app.Controller',
    alias  : 'controller.Main',

    models : [
        'Company'
    ],

    views : [
        'MyGrid',
        'ContentPanel'
    ],

    stores : [
        'Companies'
    ],

    init : function ()
    {
        console.log( 'Main controller created' );

//        this.control( {
//                          'grid.MyGrid'  : {
//                              //itemclick : this.onRowClicked,
//                              itemdblclick : this.onGridRendered
//                          },
//                          'ContentPanel' : {
//                              render : this.onPanelRendered
//                          }
//                      } );
    },

//    onRowClicked : function ( grid, record )
//    {
//        console.log( 'Row Clicked ' + record.get( 'name' ) );
//    },

//    onGridRendered : function ()
//    {
//        console.log( 'The grid was rendered' );
//    },

    onPanelRendered : function ()
    {
        console.log( 'The panel was rendered' );
    }
} );
