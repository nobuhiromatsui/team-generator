const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

//create manager
    // create temams
            // ask what kind if enpliyee
                    //if engineer -. create engineer 
                            // as k what kind of employee again
                    //if intern -> creat intern
            //
    //render(EMPLOYEES ARRAY)
    //write the file



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptUserTwo() {
return inquirer.prompt({
        type: "checkbox",
        message: "choose your role",
        name: "role",
        choices: [
            "manager",
            "engineer",
            "intern"
        ] 
    }
    );
}

// if (){
    
// }


function promptUserOne() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Type your name",
            name: "name"
        },
        {
            type: "number",
            message: "Write id",
            name: "id"
        },
        {
            type: "input",
            message: "write email",
            name: "email"
        },
        // {
        //     type: "checkbox",
        //     message: "choose your role",
        //     name: "role",
        //     choices: [
        //         "manager",
        //         "engineer",
        //         "intern"
        //     ]
        // },
        // {
        //     type: "input",
        //     message: "school name",
        //     name: "school"
        // },
        {
            type: "input",
            message: "git name",
            name: "github"
        },

    ]);
}





// // function to initialize program
function init() {
    promptUserOne()
        .then(function (prompt) {
            var name = prompt.name;
            var id =  prompt.id;
            var email = prompt.email;
            var github = prompt.github;

            var engineer = new Engineer (name, id, email, github);
            console.log(engineer);
            // asyncWriteFile("README.md", readMe).then(() => console.log("success"))
        });
}

// function call to initialize program
init();




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// render();