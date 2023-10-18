const puppeteer = require('puppeteer')


async function init(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.google.com/search?q=ultimas+noticias+de+seguranca+da+informa%C3%A7%C3%A3o&client=safari&sca_esv=574223418&rls=en&tbm=nws&sxsrf=AM9HkKluphusaopwfRhIOAjR-rnfawQGtg:1697574195860&source=lnms&sa=X&ved=2ahUKEwiO5rHX9P2BAxVypZUCHSagAdkQ_AUoAXoECAIQAw&biw=1396&bih=714&dpr=2￼')
    await page.screenshot({path: '/Users/murilolourencocabral/Documents/Dev/PDM/web-crawler/images/print.png'})
    
    const data = await page.evaluate(() => {
        
        const result = []
        document.querySelectorAll('.SoaBEf').forEach(item => {
            const title = item.querySelector('.n0jPhd').innerHTML
            const subTitle = item.querySelector('.GI74Re').innerHTML
            // const price = item.querySelector('h2')?.dataset.src
            // const image = item.querySelector('img.dimg_1').dataset.src
            const link = item.querySelector('[href*="href_value"]')

        result.push({
            title,
            subTitle,
            link,
        })
        })
        return {result}
    })
    console.log(data.result)
    
    await browser.close()
}

init()