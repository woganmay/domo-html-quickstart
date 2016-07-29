/* global $ */
/**
 * Default Page
 *
 * A sample function for rendering out a page in a DomoApp
 *
 * @author Wogan May <wogan.may@gmail.com>
 */

function pageDefault()
{
    // Set the title and subtitle for this page in the navigation
    switchTitle("Welcome to the HTML Starter App");
    switchSubtitle("Get started with HTML-based DomoApps!");
    
    // Highlight this in the top navigation
    sse1.highlight('default');
    
    // Load the page content
    switchPage("/pages/default.html");
    
}