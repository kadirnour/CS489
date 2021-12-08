import { Selector } from 'testcafe';

fixture `sideMenuTests`
    .page `http://localhost:3000/`;

/**
 * Test case for opening and closing sideMenu component.
 */
test('sideMenuOpenClose', async t => {
    await t

        .typeText(Selector('#email'), 'test@t.com')
        .typeText(Selector('#password'), 'Testing123')
        .click("#loginBtn")
        .expect(Selector('#feedModeTab').visible).eql(true)
        .click("#menuBtn")
        .expect(Selector('#sideMenu').visible).eql(true)
        .click("#menuBtn")
        .expect(Selector('#sideMenu').visible).eql(false)
    
});

/**
 * Test case for logging user out.
 * Requires opening sideMenu.
 */
test('logout', async t => {
    await t

        .typeText(Selector('#email'), 'test@t.com')
        .typeText(Selector('#password'), 'Testing123')
        .click("#loginBtn")
        .expect(Selector('#feedModeTab').visible).eql(true)
        .click("#menuBtn")
        .expect(Selector('#sideMenu').visible).eql(true)
        .click(Selector("#sideMenu").child(-1))
        .expect(Selector('#loginPage').visible).eql(true)
    
});
