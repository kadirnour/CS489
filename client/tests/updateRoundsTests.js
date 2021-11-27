import { Selector } from 'testcafe';

fixture `updateRoundsTests`
    .page `http://localhost:3000/`;

test('updateRoundsTests', async t => {
    await t

        .typeText(Selector('#email'), 'AKH@x.com')
        .typeText(Selector('#password'), 'Password1')
        .click("#loginBtn")
        .expect(Selector('#feedModeTab').visible).eql(true)
        .click("#profileBtn")
  
});