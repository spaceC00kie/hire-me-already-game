# Hire Me: The Game
##### Created January 2025

### Description
A satirical game based off the current job hunting experience in America, specifically in the software development field.

The user is shown a list of jobs for which they can apply by clicking an "Apply" button on each job's card.
After they do, they receive an email that says they have been rejected.

Each job will have an id, title, icon, company name, location, a time to wait before they send their rejection email, and, optionally, a benefits list or a tag that says the job listing is an ad.

### Code
2 lists(shown to users): jobs and emails  
2 queues(used to populate lists): contain jobs and emails

Jobs are popped from the job queue to the job list when user clicks "Search"
Jobs are added to the email queue when the user clicks "Apply" on the job card  
Jobs are popped off the email queue and added to the email list after their "waitTime" has passed  
Jobs will be removed from the email list when the user clicks the trash button in the email card  
Will pass the list of emails into onClick's callback, to be used to unmount the current item(by its id) from the email list  


Will use Firestore to store the queues for users who are not logged in  
If users aren't logged in, will use useLocalStorage hook

###### job queue => job list => email queue => email list => scorecard

