$(function(){
    $('#lhulk').click(function(){
        $('#ihulk').show();
        $('#ibatman').hide();
        $('#icapitao').hide();
        $('#isuperman').hide();
    });

    $('#lbatman').click(function(){
        $('#ibatman').show();
        $('#ihulk').hide();
        $('#icapitao').hide();
        $('#isuperman').hide();
    });

    $('#lcapitao').click(function(){
        $('#icapitao').show();
        $('#ihulk').hide();
        $('#ibatman').hide();
        $('#isuperman').hide();
    });

    $('#lsuperman').click(function(){
        $('#isuperman').show();
        $('#ihulk').hide();
        $('#ibatman').hide();
        $('#icapitao').hide();
    });
});