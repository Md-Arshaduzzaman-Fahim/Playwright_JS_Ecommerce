export class CartPage{
    constructor(page){
        this.page = page;
        this.products = this.page.locator("//td[@class='cart_description']/h4/a");
        
    }



    getProductInCart(product){
         return this.page.locator(`//td[@class='cart_description']/h4/a[text()='${product}']/../../following-sibling::td`)
    }


    getProductName(product){
      return this.page.locator(`//a[text()='${product}']`)
    }

   async verifyCartProduct(product){
    const prod = await this.getProductInCart(product);
    const does_product_exist = await prod.count();
    let details = [];
    const price = await prod.nth(0).locator("p").textContent();
    const quantity = await prod.nth(1).locator("button").textContent()
    const totalPrice = await prod.nth(2).locator("p").textContent();
    details = [does_product_exist, price, quantity, totalPrice]
    return  details;
   }

   async deleteProducts(product){
    const prod = await this.getProductInCart(product);
    await prod.locator("a").last().click();
    await this.page.waitForLoadState('domcontentloaded');
    await prod.first().waitFor({ state: 'hidden' });
   }

   async isProductDeleted(product){
    return await this.getProductName(product).isVisible();
   }

}