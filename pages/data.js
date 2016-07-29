/* global $ */
/**
 * Default Page
 *
 * A sample function for rendering out a page in a DomoApp
 *
 * @author Wogan May <wogan.may@gmail.com>
 */

function pageData()
{
    // Set the title and subtitle for this page in the navigation
    switchTitle("Sample Data");
    switchSubtitle("A basic sample visualization");
    
    // Highlight this in the top navigation
    sse1.highlight('data');
    
    // Load the page content
    switchPage("/pages/data.html");
    
    // Render in the sample data coming from Domo
    // Obviously from this point on you can do anything you need to draw the data to the page
    showSpinner();
    
    domo.get('/data/v1/SampleData').then(function(SampleData){
        
        // Render out the Sample Data
        for(var i = 0; i < 100; i++)
        {
            if (i == 0)
            {
                // Build the table with the header
                var thString = '';
                $.each(SampleData[i], function(key, value){ thString += "<th>"+key+"</th>"; });
                $("#page-container").html('<table id="domodata"><thead><tr>'+thString+'</tr></thead><tbody></tbody></table>');
            }
            
            // Append the data record
            var trString = '';
            $.each(SampleData[i], function(key, value){ trString += "<td>"+value+"</td>"; });
            $("#domodata tbody").append('<tr>'+trString+'</tr>');
        }
        
        hideSpinner();
        
    });
    
}