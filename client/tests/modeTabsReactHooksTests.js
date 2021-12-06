import { Selector } from 'testcafe';

fixture `modeTabsTests`
    .page `http://localhost:3000/`;

test('updateRoundsTests', async t => {
    await t

        .typeText(Selector('#email'), 'AKH@x.com')
        .typeText(Selector('#password'), 'Password1')
        .click("#loginBtn")
        .expect(Selector('#feedModeTab').visible).eql(true)
        .click('#roundsMode')
        .expect(Selector('#roundsModeTab').visible).eql(true)
        .click('#coursesMode')
        .expect(Selector('#coursesModeTab').visible).eql(true)
        .click('#buddiesMode')
        .expect(Selector('#buddiesModeTab').visible).eql(true)
        .click('#roundsMode')
        .expect(Selector('#roundsModeTab').visible).eql(true)
});