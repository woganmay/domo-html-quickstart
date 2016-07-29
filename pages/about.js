/* global $ */
/**
 * About Page
 *
 * Show basic information about the app
 *
 * @author Wogan May <wogan.may@gmail.com>
 */

function pageAbout()
{
    // Set the title and subtitle for this page in the navigation
    switchTitle("About this App");
    switchSubtitle("Learn more about this Domo App");
    
    // Highlight this in the top navigation
    sse1.highlight('about');
    
    // Load the page content
    switchPage("/pages/about.html");
    
}