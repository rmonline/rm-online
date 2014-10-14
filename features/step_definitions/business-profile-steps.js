var myStepDefinitionsWrapper = function () {

  var COMPANY_NUMBER = undefined;

  this.When(/^I visit the profile page for company "([^"]*)"$/, function (companyNumber, callback) {
    COMPANY_NUMBER = companyNumber;
    this.visit("companies/gb/"+companyNumber, callback);
  });

  this.Then(/^I should be on the profile page for "([^"]*)"$/, function (companyName, callback) {
    this.assert.equal(this.browser.location.pathname, "/companies/gb/"+COMPANY_NUMBER);
    this.assert.equal(this.browser.text("H1").toLowerCase(), companyName.toLowerCase());
    callback();
  });

  this.Then(/^I should see a company overview$/, function (callback) {
    this.assert.equal(this.browser.text("#cro_number"), COMPANY_NUMBER);
    this.assert.ok(this.browser.query("address"));
    callback();
  });

  this.Then(/^I should see the (\d+) vendor reports available$/, function (num, callback) {
    this.assert.equal(this.browser.queryAll("#reports .report-box").length, num);
    callback();
  });

  this.Then(/^I should see (\d+) vendor documents available$/, function (num, callback) {
    this.assert.equal(this.browser.queryAll("#documents .report-box").length, num);
    callback();
  });

  this.Then(/^I should see a company unavailable error message$/, function (callback) {
    this.assert.equal(this.browser.text("H1").toLowerCase(), "Error [9]: Company number not on file".toLowerCase());
    callback();
  });

  this.When(/^I view the reports tab$/, function (callback) {
    this.browser.clickLink("Reports");
    callback();
  });

  this.When(/^I click through to the Equifax report$/, function (callback) {
    this.browser.clickLink("#reports .report-box a.eq", callback);
  });

  this.Then(/^I should be on the the report detail page$/, function (callback) {
    this.assert.ok(this.browser.success);
    this.assert.equal(this.browser.location.pathname, "/companies/gb/"+COMPANY_NUMBER+"/northern-connectors-limited/reports/eq");
    this.assert.equal(this.browser.queryAll(".report-box").length, 3);
    callback();
  });

  this.When(/^I click through to "([^"]*)"$/, function (company, callback) {
    this.browser.clickLink(company, callback);
  });

  this.When(/^I choose the RM 50p documents$/, function (callback) {
    this.browser.clickLink("#documents .rm", callback);
  });

  this.When(/^I choose the Equifax reports$/, function (callback) {
    this.browser.clickLink("#reports .eq", callback);
  });

  this.Then(/^I should see the APIARY LONDON LIMITED accounts, returns & incorp documents$/, function (callback) {
    this.assert.equal(this.browser.text("H1").toLowerCase(), "apiary london limited".toLowerCase());
    this.assert.equal(this.browser.queryAll("#acc .pure-u-1-3 .report-box").length, 3);
    this.assert.equal(this.browser.queryAll("#newc .pure-u-1-3 .report-box").length, 1);
    callback();
  });

  this.Then(/^I should see the RADIAL SOLUTIONS LTD full, snapshot & credit reports$/, function (callback) {
    this.assert.equal(this.browser.text("H1").toLowerCase(), "radial solutions ltd".toLowerCase());
    this.assert.equal(this.browser.queryAll(".report-box").length, 3);
    callback();
  });

  this.When(/^I select the documents tab$/, function (callback) {
    this.browser.clickLink("Documents", callback);
  });

  this.When(/^I select the reports tab$/, function (callback) {
    this.browser.clickLink("Reports", callback);
  });


};
module.exports = myStepDefinitionsWrapper;
