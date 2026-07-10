export class ProductDetailPage{
    constructor(page) {
        this.page = page;
        this.product_name = this.page.locator(".product-information h2");
        this.product_category= this.page.locator(".product-information p:nth-of-type(1)");
        this.product_price = this.page.locator(".product-information span span");
        this.product_availability= this.page.locator(".product-information p:nth-of-type(2)");
        this.product_condition= this.page.locator(".product-information p:nth-of-type(3)");
        this.product_brand= this.page.locator(".product-information p:nth-of-type(4) a");
        
    }

    async verifyProductDetails(){
        let details={};
         details.name = (await this.product_name.textContent()).trim();
         details.price = (await this.product_price.textContent()).trim();
         details.category = (await this.product_category.textContent()).trim();
         details.availability = (await this.product_availability.textContent()).trim();
         details.condition = (await this.product_condition.textContent()).trim();
         details.brand = (await this.product_brand.textContent()).trim();

         console.log(details);
         return details;
    }
}