$(document).ready(function() {
  function fetchFacts() {
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/facts',
      headers: { 'X-Api-Key': 'gej/LZaIpdCdX1iDG4QG+w==5Ndlcn9fAJpKOTmN' }, // Replace with your API key
      contentType: 'application/json',
      success: function(result) {
        if (result && result.length > 0) {
          displayFacts(result);
        } else {
          $('#fact-container').html('<p>No facts available</p>');
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching facts:', textStatus, errorThrown);
        $('#fact-container').html('<p>Error fetching facts. Please try again later.</p>');
      }
    });
  }

  function displayFacts(facts) {
    var factContainer = $('#fact-container');
    factContainer.empty();
    facts.forEach(function(fact) {
      factContainer.append('<p>' + fact.fact + '</p>');
    });
  }

  $('#get-fact-btn').click(function() {
    fetchFacts();
  });

  // Fetch initial facts on page load
  fetchFacts();

  // About Modal
  $('#about-btn').click(function() {
    $('#about-modal').css('display', 'block');
  });

  $('.close').click(function() {
    $('#about-modal').css('display', 'none');
  });

  $(window).click(function(event) {
    if (event.target == $('#about-modal')[0]) {
      $('#about-modal').css('display', 'none');
    }
  });
});
