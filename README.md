# Derek Dhammaloka CV

Welcome to Derek Dhammaloka's CV.  The purpose of this project is to provide information on Interests, GitHub, Resume and Contact.  A copy of the CV can be viewed and/or downloaded.

## UX

**Getting Started**

Simply visit one of the following pages:

- Index Page (Home)
- Resume
- Contact
- Interests
- GitHub
- Download CV

On each of the pages, there are links to Facebook and LinkedIn.  Tooltips are provided on hovering over the links.

On the Interests page, you can get more information on BCS, W3Schools and IMA by selecting one of the links (opens in a new tab).

On the GitHub page, simply enter the username (e.g. derektypist) on the input field.  If the username is blank, you will be asked to enter a username.  If the username does not exist, then there is no information for that username.  If there is information for the username, you will see the username, image (if any), number of followers, number following, number of repositories and repo list.  If you have made too many requests, you will be asked to wait until a certain time.

On the Download CV, you can download a copy of my CV for printing.

**User Stories**

As a user, I can view/download a copy of my CV.

As a user, I can get a tooltip (e.g. LinkedIn) by hovering over one of the social links.

As a user, if I am on the interests page, I can get tooltips by hovering over the links.

As a user, if I select one of the links, I can get more information on one of the links, for example BCS (opens in a new tab).

As a user, I can view my work history.

As a user, I can view my skills.

As a user, I can view my interests.

As a user, I can view my GitHub Projects.

As a user, I can search on other user profiles (e.g. igorvanloo).

As a user, if I do not enter a username, I will be required to enter a username.

As a user, if I enter a username that does not exist, I will get the message

`No info found for user ${username}`

As a user, if I have made too many requests, I will be asked to wait until a certain time.

**Information Architecture**

The CV is structured into:

- Index Page (Home)
- Resume
- Contact
- Interests
- GitHub
- Download CV

Organising principle is Biography.

### Index Page (Home)

The Index Page contains Personal Info and About Me.

About Me - What Do I Do?, How Do I Do It? and Why Hire Me?

### Resume

Work History and My Skills (Front End, Back End) 

### Contact

The Contact Page is where you (the user) can request a project by filling in the form.

### Interests

Interests Page gives details of Conferences and Meetups I have attended in a Map.
They can include professional organisations (e.g. Cambridge Data Mashup with
BCS at June 2012 - East Anglia Branch).

    Label A - Cambridge Science Park
    Label B - University of Leicester
    Label C - Best Western Hotel Acocks Green (Birmingham)
    Label D - IoD Pall Mall (London)
    Label E - Copthorne Hotel Merry Hill Dudley
    Label F - Hotel Novotel London West (Hammersmith)
    Label G - Copthorne Tara Hotel London Kensington
    Label H - De Morgan House (Conference Centre) - Russell Square, London
    Label I - Raspberry PI Foundation Cambridge

All locations on the map are approximate.

My Groups and Societies include BCS, IMA and w3schools.com (Public Facebook Group).  Tooltips are provided to let the browser know that the user has hovered over these interest links.

### GitHub

The GitHub Page is where you (the user) can view my GitHub Projects (user name derektypist)
as well as searching on other user profiles (e.g. igorvanloo).  If the username does not exist, the message `No info found for user ${username}` appears.

GitHub Information consists of:

- Username (e.g. derektypist)
- Image of Username (if any)
- Number of Followers
- Number Following
- Number of Repositories
- Repository List

### Download CV

A PDF File of my CV is available for downloading (it opens in a new window).

## Features

Allows you to download a copy of my CV as well as visiting my LinkedIn Profile and my Facebook Profile.  You can even connect me on LinkedIn and make a friend request on Facebook.

You can view details of my work history and skills.

You can get more information on my interests in the interests page.

You can view my GitHub Projects as well as search for other user profiles.

## Technologies

- HTML5
- CSS3
- JavaScript
- jQuery
- Bootstrap 4.3.1
- Font Awesome 4.7.0

## Testing

All External Links (including social media) open in a new window without leaving the website using the target=_blank attribute.  The links are manually tested to
ensure that they are taken to the correct destination.

## Deployment

This is deployed on [GitHub Pages](https://derektypist.github.io/derek-dhammaloka-cv) at the Master Branch.

Use the command

    git push
    
to update any changes

## Credits

### Content

Most of the code is taken from the mini-project video with Code Institute.

### Media

Image provided by myself.

### Acknowledgements

- [Code Institute](https://www.codeinstitute.net)
- Raimonda Svirskis - IPES Key Worker - CPA5