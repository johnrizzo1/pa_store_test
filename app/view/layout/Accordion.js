Ext.define('BAML.view.layout.Accordion', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Accordion',
    
    requires: [
        'Ext.layout.container.Accordion',
        'Ext.grid.*',
        'BAML.model.Company'
    ],
    xtype: 'layout-accordion',
    
    layout: 'accordion',
    height: 400,

    items: [
        {
            title: 'Calling',
            xtype: 'MyGrid'
        }, {
            title: 'Portfolio Revenues',
            xtype: 'MyGrid'
        }, {
            title: 'GCIB Deal Revenues',
            xtype: 'MyGrid'
        }, {
            title: 'GCIB Pipeline Revenues',
            xtype: 'MyGrid'
        }
    ]
})
