import { Selector } from 'testcafe';

fixture `updateRoundsTests`
    .page `http://localhost:3000/`;

test('updateRoundsTests', async t => {
    await t

        .typeText(Selector('#email'), 'AKH@x.com')
        .typeText(Selector('#password'), 'Password1')
        .click("#loginBtn")
        .expect(Selector('#feedModeTab').visible).eql(true)
        .click('#roundsModeTab')
        .expect(Selector('#roundsModeTab').visible).eql(true)
        .click('#editButton')
        .expect(Selector('#logRoundForm').visible).eql(true)
        .typeText(Selector('#roundCourse'), 'New Course for Testing')
        .typeText(Selector('#roundStrokes'), '101')
        .typeText(Selector('#roundMinutes'), '101')
        .typeText(Selector('#roundSeconds'), '10')
        .typeText(Selector('#roundNotes'), 'Testcafe testing of modding the round')
        .click('#roundSubmit')
    

});