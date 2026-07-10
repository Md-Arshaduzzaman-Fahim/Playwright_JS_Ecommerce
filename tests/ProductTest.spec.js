import { test, expect } from "./BaseTest";
import productData from "../Test-Data/productData.json";



test("Test Case 7: Verify All Products and product detail page", async({productpage}) =>{
    await expect(await productpage.getProductPageTitle()).toBe(productData.product_page_title);
    await expect(await productpage.getTotalProductCount()).toBe(34);
   // await expect(await productpage.verifyProductList()).toEqual(productData.products);
   await expect(await productpage.verifyProductList()).toEqual(expect.arrayContaining(productData.products));
   const productdetailpage =  await productpage.productVIewdetails();
    await expect(await productdetailpage.verifyProductDetails()).toEqual(productData.product1_info);
    
})


test("Test Case 8: Search Product", async({productpage}) =>{
    for(let i=0; i<productData.products.length; i++){
    await expect(await productpage.searchProduct(productData.products[i])).toEqual(productData.products[i]);
    }
})

test("Test Case 9: Product Category", async({productpage}) =>{
    
    await expect(await productpage.productCategory()).toEqual(productData.category);
    
})



test.only("Test Case 10: Product Brands", async({productpage}) =>{
    
  await expect(await productpage.productBrands()).toEqual(productData.brandss);
    
    
})