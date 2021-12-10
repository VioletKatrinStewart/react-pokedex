import React from 'react';

/** Starter variables
 * =======================================================================
 *  - Have variable count with number of Pokemon fetched from the API
 * 
 *  - Have a varianble called numPages. We want 20 pokemon per page, so 
 *    floor(count / 20) gives us the total number of pages.
 * 
 =========================================================================*/

/** UI/UX
 * ============================================================================================
 * 
 * - We want to display a window of pages 1 thru 10
 * 
 * - If there are more than 10 pages, render the component with a 
 *   "next" page button
 * 
 * - Also let the user click on the page number they want to go to
 * 
 * - Start shifting the window of page numbers by 1 starting at page 7.
 * 
 * Example:
 * 
 * count = 801 // Note: Fetching count should be a separate API call from fetching Pokemon
 * resultsPerPage = 20; // This can be whatever we want
 * numPages = floor(count / resultsPerPage) = 40 pages total
 * pageRange = 10;
 * 
 * Now that we know we have 40 pages, we want a shifting window over the number of pages:
 * 
 * 
 * pageRange = [0, pageRange - 1] where 0 is the first index and 9 is the last index.
 * [firstPage, lastPage] = pageRange
 * 
 * So in this examplve the value would be [0, 9]
 * 
 * Render buttons: [1] [2] [3] [4] [5] [6] [7] [8] [9] [10] Next>
 * 
 * If we are to generalize this, it would be expressed: [firstPage + 1] [++] [++] [++] [++] [++] [++] [++] [++] [lastPage + 1]
 * When we click [firstPage + 1], the data displayed will be pokemon[0], and likewise for the rest of the buttons.
 * 
 * Case: We click the next button on the above example.
 * 
 * pageRange [0, pageRange] becomes [1, pageRange + 1] by React Hook magic setPageRange("next") (arg could also be "prev" to decrement)
 * 
 * -
 * 
 * Case: We reach the end of the number of pages.
 * 
 * The limit for the range of pages fetched and displayed falls between the range [numPages - resultsPerPage, numPages - 1]
 * which in this case equals [29, 39]. We need to consider this so we can prevent the user from exceeding this range and
 * causing a fatal error.
 * 
 * -
 * 
 * Case: We click the Previous button
 * 
 * This is left as an excercise to the reader.
 * 
 * -
 * 
 ===============================================================================================================================*/

export function Pages() {
  return <div>Pages</div>;
}
