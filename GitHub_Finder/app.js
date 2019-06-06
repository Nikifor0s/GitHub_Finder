//Initialize GitHub
const github = new Github;

//Initialize UI

const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//Search inputs event lestener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if(userText !== ''){
    //Make HTTP call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //Show Alert
        ui.showAlert('User not found', 'alert alert-danger');

      }else{
        //Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }else{
    //Clear the Profile
    ui.clearProfile();
  }
});