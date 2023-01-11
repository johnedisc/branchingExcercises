window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();
  
      let vote = document.getElementById("voting");
      vote.setAttribute("class", "hidden");
      let under18Message = document.getElementById("under-18");
      under18Message.setAttribute("class", "hidden");
  
      const age = parseInt(document.querySelector("input#age").value);
  
      if (age > 18) {  // updated to check if age is greater than 21
        vote.removeAttribute("class");
      }
      else {
        under18Message.removeAttribute("class");
      }
    };
  };