import { Selector } from 'testcafe';

fixture `feedPageTests`
    .page `http://localhost:3000/`;

test('feedPageTests', async t => {
    await t

        .typeText(Selector('#email'), 'AKH@x.com')
        .typeText(Selector('#password'), 'Password1')
        .click("#loginBtn")
        .expect(Selector('#feedModeTab').visible).eql(true)
        .click('#roundsMode')
        .expect(Selector('#roundsModeTab').visible).eql(true)
        .click('#feedMode')
        .expect(Selector('#feedModeTab').visible).eql(true)
});