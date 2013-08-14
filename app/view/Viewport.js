Ext.define('BAML.view.Viewport', {
    alias: 'widget.Viewport',
    //extend: 'Ext.container.Viewport',
    extend: 'Ext.Panel',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'BAML.view.MyGrid',
        'BAML.view.ContentPanel'
    ],

    //layout: 'fit',
    autoScroll : true,
    items : [
        {
            title: 'Calling',
            xtype: 'MyGrid',
            region: 'north',
            minHeight: 100
        }, {
            //xtype: 'panel',
            title: 'bottom panel',
            region: 'south',
            split: true,
            minHeight: 100,
            html: '<h1>HI</h1>'
        }
    ]
});