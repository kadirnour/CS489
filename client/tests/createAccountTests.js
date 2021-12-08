import { Selector } from 'testcafe';

fixture `createAccountTests`
    .page `http://localhost:3000/`;

test('createAccount', async t => {
    await t

        .click("#createAccountBtn")
        .expect(Selector('#createAccountHeader').visible).eql(true)
        .typeText(Selector('#email'), 'test@t.com')
        .typeText(Selector('#password'), 'Password1')
        .typeText(Selector('#repeatPassword'), 'Password1')
        .expect(Selector('#displayName').value).eql("test@t.com")
        .setFilesToUpload(Selector("#profilePic"), ["../src/images/sslogo.png"])
        .click("#profilePic")
        .typeText(Selector('#securityQuestion'), 'hehe')
        .typeText(Selector('#securityAnswer'), 'haha')
        .click(Selector("button[type=submit]"))

});