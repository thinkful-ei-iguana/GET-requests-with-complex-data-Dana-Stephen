//user needs to search for parks in more than on state?
// we expect only good state names and or abreviations, maybe not case sensitive.
// we expect users to only separate with spaces. no other delimiters
//we can throw an error if they misspell some state, or states
//user can set the max num results default=10 take it as a number



////Auth:    GKsDzVLVaDTT2BV5cL2YcPso9fWyO17Yl9u3NiWf
///https://developer.nps.gov/api/v1/parks?api_key=GKsDzVLVaDTT2BV5cL2YcPso9fWyO17Yl9u3NiWf&





///////Things to get from the response  are
// what are the national parks in those states
//from ea/ park : full name , desc, website url, parks addy

//requests to the API:
//comma delim state codes--> param


//call nat park srvcs api

const waitForSubmit = function() {
  $('.parks-form').on('submit','.get-parks-nearby', event=> {

  }
  );
};

const formatQueryParams = function() {

};

