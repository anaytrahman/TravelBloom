


// Sample data for destinations
const destinations = {
  canada: {
    city: "Toronto, Canada",
    timeZone: "America/Toronto",
    description:
      "A diverse and cosmopolitan city, Toronto is known for its iconic CN Tower and vibrant culture.",
    image:
      "https://images.unsplash.com/photo-1503627387403-7c6c1c3c0d5b"
  },
  india: {
    city: "Mumbai, India",
    timeZone: "Asia/Kolkata",
    description:
      "Mumbai is India's financial capital, known for Bollywood, street food, and vibrant life.",
    image:
      "https://images.unsplash.com/photo-1529257414771-1960d4f0c3c9"
  },
  us: {
    city: "New York, USA",
    timeZone: "America/New_York",
    description:
      "New York City is famous for Times Square, Central Park, and its fast-paced lifestyle.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
  }
};

/** search function for destination */
function search() {
  const input = document
    .getElementById("searchInput")
    .value.toLowerCase();

   if(!input.trim()) {
    alert("Please enter a search query.");
    return;
   }else{
     const data = destinations[input];
  debugger
  if (!data) {
    alert("No data available for this search.");
    return;
  }

  const time = new Date().toLocaleTimeString("en-US", {
    timeZone: data.timeZone
  });

  document.getElementById("resultContainer").innerHTML = `
    <div class="time">
      Current Local Time (${data.timeZone}): ${time}
    </div>

    <div class="card">
      <img src="${data.image}" />
      <div class="card-content">
        <h3>${data.city}</h3>
        <p>${data.description}</p>
        <button class="btn">Visit</button>
      </div>
    </div>
  `;
   }
}
/**clear field */

function clearInput() {
  document.getElementById("searchInput").value = "";
  document.getElementById("resultContainer").innerHTML = "";
}

// ==========================
// SECTION SWITCHING
// ==========================
function showSection(sectionId) {
  const sections = ["homeSection", "aboutSection", "contactSection"];

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add("hidden");
    }
  });

  const active = document.getElementById(sectionId);
  if (active) {
    active.classList.remove("hidden");
  }
}

function submitBtn(){
  
  alert("Form submitted successfully!");
}