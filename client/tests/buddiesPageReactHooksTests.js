import { Selector } from 'testcafe';

fixture `feedPageTests`
    .page `http://localhost:8081/`;

test('feedPageTests', async t => {
    await t

        .typeText(Selector('#email'), 'AKH@x.com')
        .typeText(Selector('#password'), 'Password1')
        .click("#loginBtn")
        .expect(Selector('#feedModeTab').visible).eql(true)
        .click('#roundsMode')
        .expect(Selector('#roundsModeTab').visible).eql(true)
        .expect(Selector('#buddiesModeTab').visible).eql(false)
        .click('#buddiesMode')
        .expect(Selector('#buddiesModeTab').visible).eql(true)
}); 