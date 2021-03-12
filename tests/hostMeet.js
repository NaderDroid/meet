
const url = "https://staging.meet.sa/";
const userName = "nalthubaity@site.sa";
const name = "Nader"
module.exports = {
    "Confirming the page title" : (client) => {
        client.url(url)
        .waitForElementVisible("body")
        .assert.title("Meet")
    },
    "Host test" : (browser) => {
        browser.setValue("input[type=text]" , userName)
        // browser.element("css selector" , 'div[data-testid="submit-button"]').
        browser.click('div[data-testid="submit-button"]')
        browser.setValue("input[type=text]" , "0000")
        browser.click('div[data-testid="submit-button"]')
        browser.useXpath()
        .click('//*[@id="root"]/div/div/div/div/div[1]/div/div/div[3]/div[2]/div/div/div')
        .click('//*[@id="root"]/div/div/div/div/div[1]/div/div/div[3]/div[2]/div[1]/div[6]')
        browser.setValue('//*[@id="root"]/div/div/div/div/div[1]/div/div[2]/div[3]/input' , name)
        browser.click('div[data-testid="Host"]')
        .pause(30000)
    }
};