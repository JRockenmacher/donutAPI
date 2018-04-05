const URL = "http://galvanize-donut-api.herokuapp.com/";
fetch(URL)
  .then(response => response.json())
  // memorize the above fat arrow
  .then(response => {
    const $donuts = response.donuts.map(donut => {
      const $donut = document.createElement("li");
      $donut.textContent = donut;
      return $donut;
    });
    const $ul = document.querySelector("ul");
    $donuts.forEach($donuts => {
      $ul.appendChild($donuts);
    });
  });
const $form = document.querySelector('form');
$form.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const donutName = formData.get("donut-name")
    console.log(donutName);
    
    fetch(URL,{
        method: "post",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({donut: donutName})
    })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            
        });
})