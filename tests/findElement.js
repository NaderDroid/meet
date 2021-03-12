module.exports = {
    "Confirming form page title" : (client) => {
        client.url("https://staging.meet.sa/#3AP3H/7GS7ACPEC6N6PH/HVvoo0GlGpBOVW4AnhVrnw")
        .waitForElementVisible("body")
        .assert.title("Meet")
    },

    "demo element test" : (browser) => {
        browser.element("css selector" , 'div[data-testid="submit-button"]' , (result) => {
            console.log(result.value)
        });
    },
    "Host test" : (browser) => {
        browser.setValue("input[type=text]" , "nalthubaity@site.sa")
        // browser.element("css selector" , 'div[data-testid="submit-button"]').
        browser.click('div[data-testid="submit-button"]')
        browser.setValue("input[type=text]" , "0000")
        browser.click('div[data-testid="submit-button"]')
        browser.useXpath()
        .click('//*[@id="root"]/div/div/div/div/div[1]/div/div/div[3]/div[2]/div/div/div')
        .click('//*[@id="root"]/div/div/div/div/div[1]/div/div/div[3]/div[2]/div[1]/div[6]')
        browser.setValue('//*[@id="root"]/div/div/div/div/div[1]/div/div[2]/div[3]/input' , "Nader")
        browser.click('div[data-testid="Host"]')
        .pause(30000)
    },

    "Join test" : (browser) => {
        browser.useXpath()
        .click('//*[@id="root"]/div/div/div/div/div[1]/div/div/div[3]/div[1]/div/div/div')
    }
};