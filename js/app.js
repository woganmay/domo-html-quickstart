/* global $ */
/**
 * Miscellaneous application functions
 *
 * @author Wogan May <wogan.may@gmail.com>
 */
function switchPage(newPage)
{
    // Fade in overlay
    $("#app-content").append('<div id="app-fade"></div>');
    
    // Animate to opaque
    $("#app-fade").animate({ opacity: 1.0 }, 250, function(){

        $("#app-body").load(newPage, function(){
            
            // Fade out
            $("#app-fade").animate({ opacity: 0.0 }, 250, function(){
                $("#app-fade").remove();
            });
            
        });
        
    });
    
}

function switchTitle(newTitle)
{
    // Animate out the old one, and animate in the new one
    $("#app-title").animate({ width: 0 }, 300, function(){
        $("#app-title").html(newTitle);
        $("#app-title").animate({ width: 500 }, 300, function(){});
    });
}

function switchSubtitle(newSubtitle)
{
    // Animate out the old one, and animate in the new one
    $("#app-subtitle").animate({ width: 0 }, 300, function(){
        $("#app-subtitle").html(newSubtitle);
        $("#app-subtitle").animate({ width: 500 }, 300, function(){});
    });
}

function showSpinner()
{
    $("#app-header .domospinner").show();
}

function hideSpinner()
{
    $("#app-header .domospinner").hide();
}