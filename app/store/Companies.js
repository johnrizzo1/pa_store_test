Ext.define( 'BAML.store.Companies', {
    extend   : 'Ext.data.Store',
    model    : 'BAML.model.Company',
    alias    : 'store.Companies',

    autoLoad : true,
    //type     : 'direct',
    requires : ['BAML.proxy.SalesforceRemotingProxy'],
    proxy  : {
        type       : 'SalesforceRemotingProxy',
        //type     : 'direct',
        //directFn : Ext.getCmp('BAML.data.RemotingProxy').getResults,
        //api      : {
            //create  : BAML.data.RemotingProxy.createRecord,
        //    read    : BAML.data.RemotingProxy.getResults
            //update  : BAML.data.RemotingProxy.updateRecords,
            //destroy : BAML.data.RemotingProxy.destroyRecord
        //},


    },
    reader   : {
        type : 'array'
        //,root: 'records'
    }
    //data: BAML.data.DataSets.company
} );
