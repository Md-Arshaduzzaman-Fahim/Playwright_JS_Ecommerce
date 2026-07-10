import { ProductDetailPage } from "./ProductDetailPage";
export class ProductPage{
    constructor(page){
        this.page = page;
        this.propuct_page_title = this.page.locator(".title.text-center");
        this.products = this.page.locator("//div[@class='productinfo text-center']");
        this.prouct_list = this.products.locator("p");
        this.products_viewdetails = this.page.locator("//a[text()='View Product']");

        this.searchbar = this.page.locator("#search_product");
         this.searchbtn = this.page.locator("#submit_search");

        
         this.category_all = this.page.locator("//h2[text()='Category']/following-sibling::div/div/div/h4/a");
         //this.category_select_all = this.page.locator("//h2[text()='Category']/following-sibling::div/div/div/div/ul/li/a");

         this.brands = this.page.locator("//h2[text()='Brands']/following-sibling::div/ul/li/a")
         this.brandss = this.page.locator("//div[@class='brands-name']/ul/li/a")
         
          
    }

    async getProductPageTitle(){
        return await this.propuct_page_title.textContent();
    }

    async getTotalProductCount(){
       return await this.products.count();
    }

    async verifyProductList(){
        let product = [];
        let product_name;
        for(let i=0; i< await this.getTotalProductCount(); i++){
            product_name =  await this.prouct_list.nth(i).textContent();
            console.log( product_name);
          await  product.push( product_name) ;
        }
        return product;
    }

    async productVIewdetails(){
       await this.products_viewdetails.first().click();
       return new ProductDetailPage(this.page);
    }


    async searchProduct(product){
        let searched_product = "";
        await this.searchbar.fill(product);
        await this.searchbtn.click();
        await this.page.waitForLoadState('domcontentloaded');
        searched_product = (await this.verifyProductList()).toString();
        return  searched_product.trim();
    }

    async productCategory(){
         let  categoryName;
         let page_titles = []; 
        for(let i=0; i<await this.category_all.count()-1; i++){
           const rawText = await this.category_all.nth(i).textContent();
            categoryName = rawText.trim();
            await this.category_all.nth(i).click();
            await  this.page.locator(`//h2[text()='Category']/following-sibling::div/div/div[@id='${categoryName}']/div/ul/li/a`).nth(1).click();
            await this.page.waitForLoadState('domcontentloaded');
          const titleText = await this.propuct_page_title.textContent();
           await  page_titles.push(titleText) ;
        }
        return page_titles;

    }


    async productBrands(){
        let page_title;
         let page_titles = []; 
          for(let i=0; i<await this.brandss.count(); i++){
            await this.brands.nth(i).click();
            await this.page.waitForLoadState('domcontentloaded');
            page_title = await this.propuct_page_title.textContent();
            page_titles.push(page_title.trim())
          }
       return page_titles;

    }



//     async productBrands() {
//     let page_titles = []; 

//     // 1. Check if the elements are even attached to the DOM at all
//     console.log("--- DEBUG START ---");
    
//     // Explicitly wait for the selector to be present in the DOM
//     await this.brandss.first().waitFor({ state: 'attached', timeout: 5000 }).catch(() => {
//         console.log("❌ WARNING: Playwright could not find any brand elements within 5 seconds!");
//     });

//     const brandCount = await this.brandss.count();
//     console.log(`📊 Total Brands Found Count: ${brandCount}`);

//     for (let i = 0; i < brandCount; i++) {
//         console.log(`▶️ Processing brand index: ${i}`);
        
//         // Click the brand
//         await this.brands.nth(i).click();
//         await this.page.waitForLoadState('domcontentloaded');
        
//         // Grab the title text
//         const page_title = await this.propuct_page_title.textContent();
//         console.log(`   Captured title text raw: "${page_title}"`);
        
//         if (page_title && page_title.trim() !== "") {
//             page_titles.push(page_title.trim());
//             console.log(`   ✅ Successfully pushed: "${page_title.trim()}"`);
//         } else {
//             console.log(`   ⚠️ Skipped pushing because title text was empty or null.`);
//         }
//     }
    
//     console.log("--- DEBUG END ---");
//     return page_titles;
// }


}