/*

Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:

A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

*/

/*What do I need?

My button on click, should add information to the table

How do I get input information? From the <input> fields and their .value()
Need: firstName, lastName, favoiteColor - store that in a variable.
Find a way to get the # value
Way to get values from the form when we submit and then appent() the info to the table

so we need to get values with: getElementById()
Which means, we need ID's on our values


*/

document.addEventListener('DOMContentLoaded', () => {
    const formButton = document.getElementById('formSubmit');

    let number = 0; //i'll use this line of code to initialize a variable to keep track of the number of rows in the table

    formButton.addEventListener('click', (event) => {  //whenever i click, it's going to listen to that event and that event is going to have value
        event.preventDefault(); //this is going to prevent the default action of the button, which is to refresh the page, this will remove that action

        //below are my variables to hold the values of the form
        let firstName = document.getElementById('firstName').value //use this line to get the value of the first name input field
        let lastName = document.getElementById('lastName').value //use this line to get the value of the last name input field
        let favoriteColor = document.getElementById('favoriteColor').value //use this line to get the value of the favorite color input field

        //to create a node a tr node to append to my form
        let newTableRow = document.createElement('tr') //this will create a new "table row" element

        let numberNode = document.createElement('td') //this line creates a new "table data" element for the number
            numberNode.innerHTML = number //this is used to set the inner HTML of the number node to the current value of the number variable
            newTableRow.append(numberNode) //used to append the number node to the new table row


        let firstNameNode = document.createElement('td') //this is going to create a new table data element for the first name
        firstNameNode.innerHTML = firstName //this will set the inner HTML of the first name node to the value of the first name input field
        newTableRow.append(firstNameNode) //this will append the first name node to the new table row

        let lastNameNode = document.createElement('td') //then I am going to create a new table data element for the last name
        lastNameNode.innerHTML = lastName //this will set the inner HTML of the last name node to the value of the last name input field
        newTableRow.append(lastNameNode) //this will append the last name node to the new table row

        let favoriteColorNode = document.createElement('td') //then I am going to create a new table data element for the favorite color
        favoriteColorNode.innerHTML = favoriteColor //set the inner HTML of the favorite color node to the value of the favorite color input field
        newTableRow.append(favoriteColorNode) //append the favorite color node to the new table row

        document.getElementById('tBody').appendChild(newTableRow) //here, this line append the new table row to the table body

        document.getElementById('firstName').value = '' //clear the value of the first name input field
        document.getElementById('lastName').value = '' //last
        document.getElementById('favoriteColor').value = '' //favorite color

        number++ //this line increases the number variable by 1, so that the next time a new row is added, it will have the correct number
})
})