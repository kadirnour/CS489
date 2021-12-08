import { Selector } from 'testcafe';

fixture `roundTableTests`
    .page `http://localhost:3000/`;

/**
 * Test case for adding a round to the roundsTable.
 */
// test('addRound', async t => {
//     await t

//         .typeText(Selector('#email'), 'test@t.com')
//         .typeText(Selector('#password'), 'Testing123')
//         .click("#loginBtn")
//         .expect(Selector('#feedModeTab').visible).eql(true)
//         .click("#roundsMode")
//         .expect(Selector('#roundsModeTab').visible).eql(true);

//     let roundCount = await Selector("#roundsTable tbody").child().count;
    
//     await t
//         .click("#roundsModeActionBtn")
//         .expect(Selector('#logRoundForm').visible).eql(true)
//         .typeText(Selector('#roundCourse'), 'TEST')
//         .typeText(Selector('#roundNotes'), 'TEST')
//         .click("#roundSubmit")
//         .expect(Selector('#roundsModeTab').visible).eql(true)
//         .expect(Selector("#roundsTable tbody").child().count).eql(roundCount + 1)
// });

/**
 * Test case for interacting with the edit button.
 */
test('editRoundInteraction', async t => {
    await t

        .typeText(Selector('#email'), 'test@t.com')
        .typeText(Selector('#password'), 'Testing123')
        .click("#loginBtn")
        .expect(Selector('#feedModeTab').visible).eql(true)
        .click("#roundsMode")
        .expect(Selector('#roundsModeTab').visible).eql(true)
        .click("#editButton")
        .expect(Selector('#logRoundForm').visible).eql(true)
});

/**
 * Test case for interacting with the delete button.
 * Assumes native dialog invoked. Change when delete round functionality is imp
 */
test('deleteRoundInteraction', async t => {
    await t
    .setNativeDialogHandler(() => true)
    
    .typeText(Selector('#email'), 'test@t.com')
    .typeText(Selector('#password'), 'Testing123')
    .click("#loginBtn")
    .expect(Selector('#feedModeTab').visible).eql(true)
    .click("#roundsMode")
    .expect(Selector('#roundsModeTab').visible).eql(true)
    .click(Selector("#roundsTable tbody").child(0).child(-1).child())
});