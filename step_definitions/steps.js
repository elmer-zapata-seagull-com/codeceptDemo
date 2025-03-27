const { I } = inject();
const mongoInstance = require("../helpers/mongoSingleton");
const {ok} = require("assert");
const main_page = require("../pages/main_page");

// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
    I.amOnPage('/');
    I.wait(1);
});
When(/^I do something$/, async function () {

});
Then(/^I expect a result$/, function () {

});
When(/^I verify my bd that my collection is not empty$/, async function () {
    const db = await mongoInstance.connect();
    const testCollection = mongoInstance.getCollection("person");
    console.log(testCollection);
    const result = await testCollection.find().toArray();
    ok(result.length > 0);
});

When(/^I try to login in main page$/, function () {
    main_page.clickSignIn();
    console.log(main_page.signIn);
    I.wait(2);
});


When(/^I try to login in main page 2$/, function () {
    I.click('(//a[contains(text(), "Sign in")])[2]');
    I.wait(2);
});

When(/^I try to login in main page 3$/, function () {
    I.click('(//a[contains(text(), "Sign in")])[2]');
    I.wait(2);
});
When(/^I try to login in main page 4$/, function () {
    I.click('(//a[contains(text(), "Sign in")])[2]');
    I.wait(2);
});