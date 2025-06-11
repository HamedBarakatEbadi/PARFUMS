function startChat() {
  alert("Welcome to Elso AI! Type your scent preferences below.");
}

function submitMessage() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let response = "";

  if (input.includes("romantic") && input.includes("night")) {
    response = "You might love a scent with amber, rose, and musk. Perfect for a romantic evening.";
  } else if (input.includes("fresh")) {
    response = "Try something citrusy with bergamot, green tea, and mint. Light and refreshing!";
  } else if (input.includes("wood") || input.includes("spice")) {
    response = "We recommend warm notes like sandalwood, oud, and cinnamon.";
  } else if (input.includes("sweet")) {
    response = "Vanilla, tonka bean, and honey-like florals might suit your taste.";
  } else {
    response = "Tell me more about the vibe you're going for — romantic, fresh, spicy, or something else?";
  }

  alert("Elso AI Suggests: " + response);
}
