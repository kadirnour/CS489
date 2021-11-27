import { Selector } from 'testcafe';

fixture `profileSettingsTests`
    .page `http://localhost:8081/`;

test('profileSettingsTests', async t => {
    await t

        .typeText(Selector('#email'), 'john@john.com')
        .typeText(Selector('#password'), 'Testing123')
        .click("#loginBtn")
        .expect(Selector('#feedModeTab').visible).eql(true)
        .click("#profileBtn")
        .expect(Selector('#profileSettingsDialog').visible).eql(true)
        .typeText(Selector('#securityQuestion'), 'foo')
        .click("#submitUpdateProfileBtn")
        .expect(Selector('#errorBox').visible).eql(true)
        .typeText(Selector('#securityQuestion'), 'thisIsLongEnough')
        .click("#submitUpdateProfileBtn")
        .expect(Selector('#profileSettingsDialog').visible).eql(false)
  
});