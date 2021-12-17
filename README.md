# CptS 489 Team Project: *anime-is-real*
This repository implements SpeedScore, a web app that enables users to log, analyze, share, and discuss their speedgolf rounds and experiences. SpeedScore is built using MongoDB, Express.js, React.js, and Node.js.

## Link to Deployed App
You can access our team's deployed app at [this Heroku site](https://anime-is-real.herokuapp.com)

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
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/8">Issue #8</a></td><td><a></a></td><td>3</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>50</td><td>trouble deleting rounds. This feature should be completed and merged early into the next milestone.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/6">Issue #6</a></td><td><a></a></td><td>3</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>Blocked by <a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/8">Issue #8</a> </td>
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
|[Issue #5](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/5)| [profileSettingsTests.js](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/tests/profileSettingsTests.js)|Update Profile Settings| [1/1 tests passed](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/tree/main/client/test_recordings) | [
|[Issue #7](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/7)| [updateRoundsTests.js](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/tests/updateRoundsTests.js)|PUT and DELETE routes for rounds | [1/1 tests passed](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/tree/main/client/test_recordings) |
  
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
      <td>11/15/21</td><td>2</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td>
    </tr>
    <tr>
      <td>11/18/21</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td>
    </tr>
    <tr>
     <td>11/19/21</td><td>12</td><td>1</td><td>1</td><td>2</td><td>7</td><td>1</td>
    </tr>
    <tr>
      <td>11/26/21</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td>
    </tr>
    <tr>
      <td>11/27/21</td><td>3</td><td>0</td><td>0</td><td>2</td><td>1</td><td>0</td>
    </tr>
    <tr>
      <td>11/28/21</td><td>8</td><td>1</td><td>4</td><td>1</td><td>3</td><td>0</td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>27</b></td><td><b>4</b></td><td><b>5</b></td><td><b>7</b></td><td><b>11</b></td><td><b>1</b></td>
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
      <th>Date</th><th>Duration (min)</th><th>Kevin H.</th><th>Matt M.</th><th>Zach P.</th><th>Ayleah H.</th><th>Kadir N.</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td>11/15/21</td><td>6:00</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td>
    </tr>
     <tr>
      <td>11/19/21</td><td>meeting not recorded</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td><td></td>
    </tr>
     <tr>
      <td>11/29/21</td><td>24:07</td><td>&check;</td><td>&check;</td><td></td><td>&check;</td><td></td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>30:07</b></td><td><b>3</b></td><td><b>3</b></td><td><b>2</b></td><td><b>3</b></td><td><b>1</b></td>
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
      <th>Date</th><th>Duration (min)</th><th>Kevin H.</th><th>Matt M.</th><th>Zach P.</th><th>Ayleah H.</th><th>Kadir N.</th>
    </tr>
  </thead> 
  <tbody>
    <tr><td align="right"><b>Totals:</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td></td>
    </tr>
  </tbody>
</table>

#### Context Statements
| Team Member   | Context Statement |
|---------------|-------------------|
|Kevin Hermanson| <*A lot of communication is done in person with Matthew Molitor since we are roommates. We do not record these as meetings. Team communication may seem sparse as we work together because of this>|
|Matthew Molitor| <*I did not take advantage of the slack space to the extent that I should have, instead using text messaging. I do not sign in to zoom meetings on my device, I join Kevin Hermanson on his.>|
|Zachary Penn   | <*Communication is done between a mix of slack messages, our group chat, and individually messaging team members>|
|Ayleah Hill    | <*I was not able to start working on this project until the end of thanksgiving break, this limited my ability to make progress by the end of the initial deadline. As a result of having us having mixed communication it was hard for us to keep track of everything>|
|Kadir Nour     | <*Was not initially added to the group text chat that was set up for a different project>|

### Retrospective

[Link to Recording](https://files.slack.com/files-tmb/T02BD34SQDT-F02NWSGUXCL-dc67f85722/video1241975137.mp4)

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
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/34">Issue #34</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/78">PR #78</a></td><td>5</td><td>0</td><td>5</td><td>0</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/28">Issue #28</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/74">PR #74</a></td><td>3</td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/26">Issue #26</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/76">PR #76</a></td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/24">Issue #24</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/75">PR #75</a></td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/32">Issue #32</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/67">PR #67</a></td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/30">Issue #30</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/71">PR #71</a></td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/33">Issue #33</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/73">PR #73</a></td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/29">Issue #29</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/70">PR #70</a></td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/25">Issue #25</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/68">PR #68</a></td><td>3</td><td>0</td><td>0</td><td>3</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/27">Issue #27</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/69">PR #69</a></td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/22">Issue #22</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/65">PR #65</a></td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/31">Issue #31</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/77">PR #77</a></td><td>3</td><td>0</td><td>0</td><td>0</td><td>0</td><td>3</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/23">Issue #23</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/66">PR #66</a></td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/21">Issue #21</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/72">PR #72</a></td><td>5</td><td>0</td><td>0</td><td>0</td><td>5</td><td>0</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/41">Issue #41</a></td><td><a></a></td><td>4</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>100</td><td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/44">Issue #44</a></td><td><a href="https://github.com/wsu-cpts489-fa21/tp-anime-is-real/pull/80">PR #80</a></td><td>7</td><td>1</td><td>3</td><td>1</td><td>1</td><td>1</td><td>100</td><td></td>
    </tr>
    <tr><td colspan="2" align="right"><b>Totals:</b></td><td><b>40</b></td><td><b>8</b></td><td><b>9</b></td><td><b>8</b></td><td><b>8</b></td><td><b>7</b></td><td colspan="2"></td>
    </tr>
  </tbody>
</table>

#### Context Statements
| Team Member   | Context Statement                                        |
|---------------|----------------------------------------------------------|
|Kevin Hermanson| <*updated the login page, navbar, roundpage,and coursepage using react hooks>                |
|Matthew Molitor| <*updated the app component to implement react hooks>                   |
|Zachary Penn   | <*updated buddiespage using react hooks, and wrote a blog post describing the key differences between class based and hooks-based implementation in react >      |
|Ayleah Hill    | <*updated feedpage, floatingbutton, modetabs, and round form to use react hooks>                |
|Kadir Nour     | <*updated sidemenu, create account, and roundstable to implement react hooks> |

### Testing

|Issue | Test File | Feature Tested | Results Summary | 
|------|-----------|----------------|-----------------|
|[Issue #30](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/30)| [feedPageReactHooksTests.js](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/tests/feedPageReactHooksTests.js)|feed page implementation with hooks| [1/1 tests passed](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/test_recordings/FeedPageReactHooks.gif) |
|[Issue #33](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/33)| [buddiesPageReactHooksTests.js](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/tests/buddiesPageReactHooksTests.js)|buddies page implementation with hooks| [1/1 tests passed](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/test_recordings/buddies-page-react-hook-test.mp4) | [
|[Issue #31](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/31)| [createAccountTests.js](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/tests/createAccountTests.js)|creating a new user account in hooks | [1/1 tests passed](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/test_recordings/createAccountTests.gif) |
|[Issue #29](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/29)| [floatingButtonReactHooksTests.js](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/tests/floatingButtonReactHooksTests.js)|floating button implementation with hooks | [1/1 tests passed](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/test_recordings/floatingButtonReactHooks.gif) |
|[Issue #27](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/27)| [modeTabsReactHooksTests.js](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/tests/modeTabsReactHooksTests.js)|mode tab implementation with hooks| [1/1 tests passed](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/test_recordings/modeTabsReactHooks.gif) |
|[Issue #24](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/issues/24)| [roundsFormReactHookTests.js](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/tests/roundsFormReactHookTests.js)|rounds form implementation with hooks | [1/1 tests passed](https://github.com/wsu-cpts489-fa21/tp-anime-is-real/blob/main/client/test_recordings/roundsFormReactHooks.gif) |
  
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
      <td>12/1/21</td><td>4</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td>
    </tr>
    <tr>
     <td>12/3/21</td><td>2</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td>
    </tr>
     <td>12/4/21</td><td>3</td><td>0</td><td>0</td><td>0</td><td>2</td><td>1</td>
    </tr>
    <tr>
     <td>12/6/21</td><td>4</td><td>1</td><td>0</td><td>2</td><td>1</td><td>0</td>
    </tr>
    <tr>
     <td>12/7/21</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td>
    </tr>
    <tr>
    <tr>
     <td>12/8/21</td><td>52</td><td>4</td><td>0</td><td>12</td><td>19</td><td>17</td>
    </tr>
    <tr>
     <td>12/10/21</td><td>4</td><td>2</td><td>1</td><td>0</td><td>1</td><td>0</td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>70</b></td><td><b>12</b></td><td><b>1</b></td><td><b>16</b></td><td><b>24</b></td><td><b>19</b></td>
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
      <td>12/3/21</td><td>10</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td>
    </tr>
    <tr>
      <td>12/8/21</td><td>19</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td>
    </tr>
     <tr>
      <td>12/10/21</td><td>31</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td><td>&check;</td>
    </tr>
    <tr><td align="right"><b>Totals:</b></td><td><b>60</b></td><td><b>3</b></td><td><b>3</b></td><td><b>3</b></td><td><b>3</b></td><td><b>3</b></td>
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
      <th>Date</th><th>Duration (min)</th><th>Kevin H.</th><th>Matt M.</th><th>Zach P.</th><th>Ayleah H.</th><th>Kadir N.</th>
    </tr>
  </thead> 
  <tbody>
    <tr><td align="right"><b>Totals:</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td><b>0</b></td><td></td>
    </tr>
  </tbody>
</table>

#### Context Statements
| Team Member | Context Statement |
|-------------|-------------------|
|Kevin Hermanson| <*Communication was much better, and we have scheduled meetings that everyone attended, however, there was even more in person communication that went unrecorded with Matthew Molitor>|
|Matthew Molitor| <*I exclusively communicated via text messages this sprint to my own detriment. I do not have notifications turned on for slack. I tend to ask and answer questions to group members directly rather than in a group chat, or even in person..>|
|Zachary Penn   | <*my portion of the profile button was deleted when it was merged for this milestone, this went unnoticed until the demonstration, but was fixed soon after>|
|Ayleah Hill    | <*For the demonstration, we had several merge conflicts that did not go noticed until we presented>|
|Kadir Nour     | <*I finished my tasks as well as helped others with problems created due to merge conflicts>|

### Retrospective

[Link to Recording](https://files.slack.com/files-tmb/T02BD34SQDT-F02PV1KBT46-27fd57ab74/video1245639240.mp4)

#### What went well
  - Progress: Everyone finished all of their assigned tasks before the due date of this milestone
  - Progress: For this milestone, each team member completed progress throughout the course of the project rather than everything being done at the last minute
  - Communication: most team members were able to attend all meetings, and our communication was primarily done through one channel
  - Task delegation: during our meeting at the beginning of the sprint, each task was delegated to a team member for the react hook epic. We were able to have each member work on a different portion of this epic to be able to complete it in a single milestone.
  
 #### What we'd like to improve
  - Communication: Although we communicated primarily through the slack channel, the total communication this milestone was sparse.
  - Pull requests: We did not clear pull requests in a timely manner, creating a backlog that we had to go through all at once. 
  
#### Changes we plan to implement in next milestone period
  - Communication: schedule a meeting ahead of time for a video call/chat in slack to make sure we are on the same page mid-milestone
  - Communication/Notifications: Turn on slack notifications for each team member
  - Communication: when a pull request is made, communicate through slack that is needs to be cleared
  
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
| Team Member   | Context Statement |
|---------------|-------------------|
|Kevin Hermanson| <*Due to erratic finals schedule, no meetings were officially schedules - resulting in the dicciculty collaborating in this sprint>|
|Matthew Molitor| <*Diving issues among multiple team members made it difficult to track precise story points completed for each task>|
|Zachary Penn   | <*>|
|Ayleah Hill    | <*I was not able to start working on this project until the end of thanksgiving break, this limited my ability to make progress by the end of the initial deadline. As a result of having us having mixed communication it was hard for us to keep track of everything>|
|Kadir Nour     | <*Was not initially added to the group text chat that was set up for a different project>|

### Retrospective

[Link to Recording](https://wsu.zoom.us/recording)

#### What went well
  - Efficiency: completed several tasks during a difficult period (finals week)
  - Collaboration: several team members were assigned to multiple tasks, rather than each member assigned a single task. We were able to     complete tasks faster this way, while mainting a level of subject knowledge that was consistent across the team
  - Communication: We communicated consistently throughout the course of this milestone, and individual members met with other members that were assigned the same task
  - Task delegation: all team members were eager to be assigned new tasks for this milestone
  
 #### What we'd like to improve
  - Communication: Total communication through slack, as well as meetings was very small
  - Pull requests: Once again, we did not clear pull requests in a timely manner
  
#### Changes we plan to implement in next milestone period
  - Division of Tasks: divide tasks assigned to multiple team members into smaller sub tasks, so that we are able to work more simultaneously
  - Division of Tasks: creating sub branching for each team member 
  - Timeliness: merge all pull requests before the date of the demo

