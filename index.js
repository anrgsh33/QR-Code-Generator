// use the inquirer npm package to get user input
// use the qr-image npm package to turn the user entered Url into a qr code image
// create a text file to save the user input using the native fs node module
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"
inquirer
  .prompt([
    /* Pass your questions in here */
    //here question is an object
    {
      name: "URL",
      message: "Type in your URL: ",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
