// number 1
let nickname = "Migue";
let heightinches = 67;
let weightkg = 57;

let feet = Math.floor(heightinches / 12);
let inches = heightinches % 12;
let heightfeet = feet + "’" + inches + "”"

let weightlbs = weightkg * 2.20462;

alert("Name: " + nickname + "\n" + 
      "Height: " + feet + "’" + inches + "”" + "\n" +
      "Weight: " + weightlbs.toFixed(3) + " lbs");

// number 2
let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
let birthYear = prompt("What year were you born?");

let age = 2023 - birthYear;

let output = "Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";
document.getElementById("message").textContent = output;

// number 3
const shareInfo = confirm("Do you agree to share your personal information with our site?");

if (shareInfo) {
      document.write(`<p>Name: ${nickname}</p>
                  <p>Height: ${heightinches}</p>
                  <p>Weight: ${weightlbs.toFixed(3)} lbs</p>
      `);

} else {
  document.write("The user does not wish to share their information.");
}