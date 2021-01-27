import emailjs from 'emailjs-com';

// Send email, when Alice submited form
export const sendEmailToBob = (e) => {
    e = e || window.event;

    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('gmail', 'toBob', e.target, 'user_ERKzPIkK5byCFbAKgFKlO')
        .then((result) => {
            //window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });

}

// Send email, when Bob submited form
export const sendEmailToAlice = (e) => {
    e = e || window.event;

    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('gmail', 'toAlice', e.target, 'user_ERKzPIkK5byCFbAKgFKlO')
        .then((result) => {
            //window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
}