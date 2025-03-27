# Hire Me: The Game

##### Created January 2025

### Description

A satirical game based off the current job hunting experience in America, specifically in the software development field.

The user is shown a list of jobs for which they can apply by clicking an "Apply" button on each job's card.
After they do, they receive an email that says they have been rejected.

Each job will have an id, title, icon, company name, location, a time to wait before they send their rejection email, and, optionally, a benefits list and/or a tag that says the job listing is an ad.

### Code

2 lists(shown to users): jobs and emails  
2 queues(used to populate lists): contain jobs and emails

Jobs are sliced from the job queue and added to the job list when user clicks "Search"  
A job is added to the email queue when the user clicks "Apply" on the job card  
Jobs are intended to be popped off the email queue and added to the email list after their "waitTime" has passed, but currently it is done at an interval between 0 and 3 seconds  
A job is removed from the email list and the user's score is incremented by 1 when the user clicks the trash button in the email card

###### job queue => job list => email queue => email list => scorecard

Will use Firestore to store the queues for users who are not logged in  
If users aren't logged in, will use useLocalStorage hook
