# Lab-03b-calulator

Outcome
===
User should eb able to add two numbers together 

    -there should be two inputs and a button
    -when the button is clicked, the sum shows up on the page.

    Break into pieces

Write HTML
===
1) two inputs with ids
1) A button with an id
1) A span with an id

Get DOM
===
1) grab the two inputs
    -Validate by logging them out
1) Grab the sum 'span': the place where we will inject the sum
    -validate
1)Grab the button
    -validate

      <input type(number)>
Event Listener (user interaction)
===
1) we want to have an event listener on the 'click' of the button
    - Validate that Event listener is wired up
1)when the user clicks: (this is what we do in the event listener"s "cool zone")
    - Get the values of the two inputs
    - Add together the VALUE of the two inputs
    - Inject the SUM into our Sum `span`