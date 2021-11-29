# CptS 489 Team Project: *anime-is-real*
This repository implements SpeedScore, a web app that enables users to log, analyze, share, and discuss their speedgolf rounds and experiences. SpeedScore is built using MongoDB, Express.js, React.js, and Node.js.

## Link to Deployed App
We are awaiting communication from Kadir to get the link to our heroku site
You can access our team's deployed app at [this Heroku site](https://ourapp.herokuapp.com)

## Team members
1. **Team leader:** *Kevin Hermanson (Kevinhemjhv)*
1. *Matthew Molitor (MatthewMolitor)*
1. *Ayleah Hill (AyleahHill)*
1. *Zachary Penn (pennzach)*
1. *Kadir Nour (kadirnour)*

## Milestone 0 (Due 11/19)

### Progress
#### Issues and Story Points
<table> 
  <thead>
    <tr>
      <th colspan="2"></th><th colspan="6">Story Point Counts</th><th colspan="2"></th>
    </tr> 
    <tr>
      <th>Issue</th><th>Linked PR</th><th>Total</th><th>Kevin H.</th><th>Matt M.</th><th>Zach P.</th><th>Ayleah H.</th><th>Kadir</th><th>% Complete</th><th>Notes</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/11">Issue #11</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/59">PR #59</a></td><td>3</td><td>0</td><td>3</td><td>0</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
     <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/58">Issue #58</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/60">PR #60</a></td><td>8</td><td>0</td><td>0</td><td>8</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/9">Issue #9</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/61">PR #61</a></td><td>8</td><td>0</td><td>0</td><td>0</td><td>8</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/10">Issue #10</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/62">PR #62</a></td><td>5</td><td>0</td><td>0</td><td>0</td><td>0</td><td>5</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/12">Issue #12</a></td><td><a></a></td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/13">Issue #13</a></td><td><a></a></td><td>5</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/4">Issue #4</a></td><td><a></a></td><td>5</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/2">Issue #2</a></td><td><a></a></td><td>5</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/3">Issue #3</a></td><td><a></a></td><td>3</td><td>0</td><td>3</td><td>0</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/8">Issue #8</a></td><td><a></a></td><td>3</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>50</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/6">Issue #6</a></td><td><a></a></td><td>3</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td>
    </tr>
    <tr><td colspan="2" align="right"><b>Totals:</b></td><td><b>49</b></td><td><b>5.5</b></td><td><b>9</b></td><td><b>11</b></td><td><b>11</b></td><td><b>8</b></td><td colspan="2"></td>
    </tr>
  </tbody>
</table>

#### Context Statements
| Team Member   | Context Statement                                        |
|---------------|----------------------------------------------------------|
|Kevin Hermanson| <*Allow users to delete speedgolf rounds>                |
|Matthew Molitor| <*Set up MongoDB Cloud Atlas database>                   |
|Zachary Penn   | <*Allow users to edit account and profile settings>      |
|Ayleah Hill    | <*Allow users to update speedgolf rounds>                |
|Kadir Nour     | <*Deploy app to Heroku, and add google oauth to project> |

### Testing

|Issue | Test File | Feature Tested | Results Summary | 
|------|-----------|----------------|-----------------|
|[Issue #5](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/5)| [profileSettingsTests.js](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/tests/profileSettingsTests.js)|Update Profile Settings| [2/2 tests passed](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/tree/main/client/test_recordings) | [
|[Issue #7](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/7)| [routes.js](https://www.github.com/)|PUT and DELETE routes for rounds | [15/15 tests passed](https://yoursite.com/animated.gif) |
  
### Communication
 
#### Slack Messages
<table> 
  <thead>
    <tr>
      <th></th><th colspan="6">Post/Reply Counts</th>
    </tr> 
    <tr>
      <th>Date</th><th>Total</th><th>Kevin H.</th><th>Matthew M.</th><th>Zach P.</th><th>Ayleah H.</th><th>Kadir N.</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td>11/15/21</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
    </tr>
    <tr>
      <td>11/18/21</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td>
    </tr>
    <tr>
     <td>11/19/21</td><td>1</td><td>1</td><td>2</td><td>0</td><td>7</td><td>0</td>
    </tr>
    <tr>
      <td>11/26/21</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td>
    </tr>
    <tr>
      <td>11/27/21</td><td>0</td><td>0</td><td>2</td><td>1</td><td>0</td><td>0</td>
    </tr>
    <tr>
      <td>11/28/21</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>3</b></td><td><b>2</b></td><td><b>7</b></td><td><b>10</b></td><td><b>0</b></td><td><b>1</b></td>
    </tr>
  </tbody>
</table>

#### Zoom Meetings
<table> 
  <thead>
    <tr>
      <th colspan="2"></th><th colspan="5">In attendance?</th>
    </tr> 
    <tr>
      <th>Date</th><th>Duration (min)</th><th>TM1</th><th>TM2</th><th>TM3</th><th>TM4</th><th>TM5</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td>11/15/21</td><td>6</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td>
    </tr>
     <tr>
      <td>11/19/21</td><td>~</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>6</b></td><td><b>2</b></td><td><b>2</b></td><td><b>2</b></td><td><b>2</b></td><td><b>2</b></td>
    </tr>
  </tbody>
</table>
  
#### Face-to-Face Meetings
<table> 
  <thead>
    <tr>
      <th colspan="2"></th><th colspan="5">In attendance?</th><th></th>
    </tr> 
    <tr>
      <th>Date</th><th>Duration (min)</th><th>TM1</th><th>TM2</th><th>TM3</th><th>TM4</th><th>TM5</th><th>Notes</th>
    </tr>
  </thead> 
  <tbody>
    <tr><td align="right"><b>Totals:</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td></td>
    </tr>
  </tbody>
</table>

#### Context Statements
| Team Member   | Context Statement |
|---------------|------------------------------------------------------------------------------------------------------------------|
|Kevin Hermanson| <*A lot of communication is done in person with Matthew Molitor since we are roommates. We do not record these as| 
|---------------|meetings. Team communication may seem sparse as we work together because of this>                                 |
|Matthew Molitor| <*I did not take advantage of the slack space to the extent that I should have, instead using text messaging. I  |
|---------------|do not sign in to zoom meetings on my device, I join Kevin Hermanson on his.>                                     |
|Zachary Penn   | <*Communication is done between a mix of slack messages, our group chat, and individually messaging team members>|
|Ayleah Hill    | <*I was not able to start working on this project until the end of thanksgiving break, this limited my ability to|  |               |make progress by the end of the initial deadline. As a result of having us having mixed communication it was hard |
|---------------|for us to keep track of everything.>                                                                              |
|Kadir Nour     | <*Was not initially added to the group text chat that was set up for a different project>                        |

### Retrospective

[Link to Recording](https://wsu.zoom.us/recording)

#### What went well
  - Teamwork: We already had a previous understanding with each other as a team (aside from kadir) from working in senior design together
  - Progress: We finished virtually every task assigned on time, and were able to implement testing
  - Collaboration: Teammates that struggled with certain aspects of previous projects (i.e. deploying to heroku, google oauth) were assisted in such a way that everyone was assigned a task befitting of them
  - Assistance: When met with a struggle on a particular task (deleting from the database) we were able to communicate the need for assistance to complete the story point. 
  
 #### What we'd like to improve
  - Communication: Our communication varies wildy - we do not have a single channel that contains all interactions between our team (Slack, groupchat, individual sms, in-person contact), and Kadir had not been added to our group text.
  - Timeliness: We finished this tpm at the end of thanksgiving, most tasks were held to the very last minute in terms of task completion, thus making it hard to determine what issues we have/ if the project will even run.
  - Responseiveness: some team members respond with radio silence when a timely response is needed in order to complete certain tasks
  
#### Changes we plan to implement in next milestone period
  - Communication 1: Choose a channel to be our primary source of communication.
  - Communication 2: When asking questions, be concise and clear about what is needed. when struggling ask for help as soon as
  - Task completion: complete tasks throughout course of milestone rather than all at the end before the due date by creating a series of soft deadlines for tasks/subtasks throughout the sprint.
  - Meetings: Schedule more regular meetings (two meetings per week during class time) to discuss progress and problems

## Milestone 1 (Due 12/3)

### Progress
#### Issues and Story Points
<table> 
  <thead>
    <tr>
      <th colspan="2"></th><th colspan="6">Story Point Counts</th><th colspan="2"></th>
    </tr> 
    <tr>
      <th>Issue</th><th>Linked PR</th><th>Total</th><th>TM1</th><th>TM2</th><th>TM3</th><th>TM4</th><th>TM5</th><th>% Complete</th><th>Notes</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td><a href="https://github.com/issue">Issue #</a></td><td><a href="https://github.com/PR">PR #</a></td><td>5</td><td>3</td><td>1</td><td>1</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
     <td><a href="https://github.com/issue">Issue #</a></td><td><a href="https://github.com/PR">PR #</a></td><td>3</td><td>0</td><td>0</td><td>0</td><td>0.8</td><td>0.4</td><td>40</td><td>Updated database schema. Updated server routes. Did not implement UI.</td>
    </tr>
    <tr><td colspan="2" align="right"><b>Totals:</b></td><td><b>8</b></td><td><b>3</b></td><td><b>1</b></td><td><b>1</b></td><td><b>0.8</b></td><td><b>0.4</b></td><td colspan="2"></td>
    </tr>
  </tbody>
</table>

#### Context Statements
| Team Member | Context Statement |
|-------------|-------------------|
|TM1| <*Optional but encouraged*: Brief statement explaining your contribution to this milestone> |
|TM2| <*Optional but encouraged*: Brief statement explaining your contribution to this milestone> |
|TM3| <*Optional but encouraged*: Brief statement explaining your contribution to this milestone> |
|TM4| <*Optional but encouraged*: Brief statement explaining your contribution to this milestone> |
|TM5| <*Optional but encouraged*: Brief statement explaining your contribution to this milestone> |

### Testing

|Issue | Test File | Feature Tested | Results Summary | 
|------|-----------|----------------|-----------------|
|[Issue #](https://github.com/issue)| [Google.js](https://www.github.com/)|Google Authentication| [3/3 tests passed](https://yoursite.com/animated.gif) | [
|[Issue #](https://github.com/issue)| [routes.js](https://www.github.com/)|PUT and DELETE routes for rounds | [15/15 tests passed](https://yoursite.com/animated.gif) |
  
### Communication
 
#### Slack Messages
<table> 
  <thead>
    <tr>
      <th></th><th colspan="6">Post/Reply Counts</th>
    </tr> 
    <tr>
      <th>Date</th><th>Total</th><th>TM1</th><th>TM2</th><th>TM3</th><th>TM4</th><th>TM5</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td>11/9/21</td><td>5</td><td>2</td><td>1</td><td>1</td><td>1</td><td>0</td>
    </tr>
    <tr>
     <td>11/12/21</td><td>4</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>9</b></td><td><b>3</b></td><td><b>2</b></td><td><b>1</b></td><td><b>1</b></td><td><b>1</b></td>
    </tr>
  </tbody>
</table>

#### Zoom Meetings
<table> 
  <thead>
    <tr>
      <th colspan="2"></th><th colspan="5">In attendance?</th>
    </tr> 
    <tr>
      <th>Date</th><th>Duration (min)</th><th>TM1</th><th>TM2</th><th>TM3</th><th>TM4</th><th>TM5</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td>11/9/21</td><td>17</td><td>&check;</td><td>&check;</td><td></td><td>&check;</td><td>&check;</td>
    </tr>
     <tr>
      <td>11/12/21</td><td>31</td><td>&check;</td><td>&check;</td><td></td><td></td><td>&check;</td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>48</b></td><td><b>2</b></td><td><b>2</b></td><td><b>0</b></td><td><b>1</b></td><td><b>2</b></td>
    </tr>
  </tbody>
</table>
  
#### Face-to-Face Meetings
<table> 
  <thead>
    <tr>
      <th colspan="2"></th><th colspan="5">In attendance?</th><th></th>
    </tr> 
    <tr>
      <th>Date</th><th>Duration (min)</th><th>TM1</th><th>TM2</th><th>TM3</th><th>TM4</th><th>TM5</th><th>Notes</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td>11/10/21</td><td>45</td><td>&check;</td><td>&check;</td><td></td><td>&check;</td><td>&check;</td><td>We met in CUB conference room</td>
    </tr>
     <tr>
      <td>11/14/21</td><td>20</td><td>&check;</td><td>&check;</td><td></td><td></td><td>&check;</td><td>We met at Starbucks for coffee</td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>65</b></td><td><b>2</b></td><td><b>2</b></td><td><b>0</b></td><td><b>1</b></td><td><b>2</b></td><td></td>
    </tr>
  </tbody>
</table>

#### Context Statements
| Team Member | Context Statement |
|-------------|-------------------|
|TM1| <*Optional but encouraged*: Brief statement explaining your communication to this milestone> |
|TM2| <*Optional but encouraged*: Brief statement explaining your communication to this milestone> |
|TM3| <*Optional but encouraged*: Brief statement explaining your communication to this milestone> |
|TM4| <*Optional but encouraged*: Brief statement explaining your communication to this milestone> |
|TM5| <*Optional but encouraged*: Brief statement explaining your communication to this milestone> |

### Retrospective

[Link to Recording](https://wsu.zoom.us/recording)

#### What went well
  - Item 1
  - Item 2
  - Item x
  
 #### What we'd like to improve
  - Item 1
  - Item 2
  - Item x
  
#### Changes we plan to implement in next milestone period
  - Item 1
  - Item 2
  - Item x
  
## Milestone 2 (Due 12/10)

### Progress
#### Issues and Story Points
<table> 
  <thead>
    <tr>
      <th colspan="2"></th><th colspan="6">Story Point Counts</th><th colspan="2"></th>
    </tr> 
    <tr>
      <th>Issue</th><th>Linked PR</th><th>Total</th><th>TM1</th><th>TM2</th><th>TM3</th><th>TM4</th><th>TM5</th><th>% Complete</th><th>Notes</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td><a href="https://github.com/issue">Issue #</a></td><td><a href="https://github.com/PR">PR #</a></td><td>5</td><td>3</td><td>1</td><td>1</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
     <td><a href="https://github.com/issue">Issue #</a></td><td><a href="https://github.com/PR">PR #</a></td><td>3</td><td>0</td><td>0</td><td>0</td><td>0.8</td><td>0.4</td><td>40</td><td>Updated database schema. Updated server routes. Did not implement UI.</td>
    </tr>
    <tr><td colspan="2" align="right"><b>Totals:</b></td><td><b>8</b></td><td><b>3</b></td><td><b>1</b></td><td><b>1</b></td><td><b>0.8</b></td><td><b>0.4</b></td><td colspan="2"></td>
    </tr>
  </tbody>
</table>

#### Context Statements
| Team Member | Context Statement |
|-------------|-------------------|
|TM1| <*Optional but encouraged*: Brief statement explaining your contribution to this milestone> |
|TM2| <*Optional but encouraged*: Brief statement explaining your contribution to this milestone> |
|TM3| <*Optional but encouraged*: Brief statement explaining your contribution to this milestone> |
|TM4| <*Optional but encouraged*: Brief statement explaining your contribution to this milestone> |
|TM5| <*Optional but encouraged*: Brief statement explaining your contribution to this milestone> |

### Testing

|Issue | Test File | Feature Tested | Results Summary | 
|------|-----------|----------------|-----------------|
|[Issue #](https://github.com/issue)| [Google.js](https://www.github.com/)|Google Authentication| [3/3 tests passed](https://yoursite.com/animated.gif) | [
|[Issue #](https://github.com/issue)| [routes.js](https://www.github.com/)|PUT and DELETE routes for rounds | [15/15 tests passed](https://yoursite.com/animated.gif) |
  
### Communication
 
#### Slack Messages
<table> 
  <thead>
    <tr>
      <th></th><th colspan="6">Post/Reply Counts</th>
    </tr> 
    <tr>
      <th>Date</th><th>Total</th><th>TM1</th><th>TM2</th><th>TM3</th><th>TM4</th><th>TM5</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td>11/9/21</td><td>5</td><td>2</td><td>1</td><td>1</td><td>1</td><td>0</td>
    </tr>
    <tr>
     <td>11/12/21</td><td>4</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>9</b></td><td><b>3</b></td><td><b>2</b></td><td><b>1</b></td><td><b>1</b></td><td><b>1</b></td>
    </tr>
  </tbody>
</table>

#### Zoom Meetings
<table> 
  <thead>
    <tr>
      <th colspan="2"></th><th colspan="5">In attendance?</th>
    </tr> 
    <tr>
      <th>Date</th><th>Duration (min)</th><th>TM1</th><th>TM2</th><th>TM3</th><th>TM4</th><th>TM5</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td>11/9/21</td><td>17</td><td>&check;</td><td>&check;</td><td></td><td>&check;</td><td>&check;</td>
    </tr>
     <tr>
      <td>11/12/21</td><td>31</td><td>&check;</td><td>&check;</td><td></td><td></td><td>&check;</td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>48</b></td><td><b>2</b></td><td><b>2</b></td><td><b>0</b></td><td><b>1</b></td><td><b>2</b></td>
    </tr>
  </tbody>
</table>
  
#### Face-to-Face Meetings
<table> 
  <thead>
    <tr>
      <th colspan="2"></th><th colspan="5">In attendance?</th><th></th>
    </tr> 
    <tr>
      <th>Date</th><th>Duration (min)</th><th>TM1</th><th>TM2</th><th>TM3</th><th>TM4</th><th>TM5</th><th>Notes</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td>11/10/21</td><td>45</td><td>&check;</td><td>&check;</td><td></td><td>&check;</td><td>&check;</td><td>We met in CUB conference room</td>
    </tr>
     <tr>
      <td>11/14/21</td><td>20</td><td>&check;</td><td>&check;</td><td></td><td></td><td>&check;</td><td>We met at Starbucks for coffee</td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>65</b></td><td><b>2</b></td><td><b>2</b></td><td><b>0</b></td><td><b>1</b></td><td><b>2</b></td><td></td>
    </tr>
  </tbody>
</table>

#### Context Statements
| Team Member | Context Statement |
|-------------|-------------------|
|TM1| <*Optional but encouraged*: Brief statement explaining your communication to this milestone> |
|TM2| <*Optional but encouraged*: Brief statement explaining your communication to this milestone> |
|TM3| <*Optional but encouraged*: Brief statement explaining your communication to this milestone> |
|TM4| <*Optional but encouraged*: Brief statement explaining your communication to this milestone> |
|TM5| <*Optional but encouraged*: Brief statement explaining your communication to this milestone> |

### Retrospective

[Link to Recording](https://wsu.zoom.us/recording)

#### What went well
  - Item 1
  - Item 2
  - Item x
  
 #### What we'd like to improve
  - Item 1
  - Item 2
  - Item x
  
#### Changes we plan to implement in next milestone period
  - Item 1
  - Item 2
  - Item x
