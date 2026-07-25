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



test("Test Case 10: Product Brands", async({productpage}) =>{
    
  await expect(await productpage.productBrands()).toEqual(productData.brandss);
    
    
})


test("Test Case 11: Add to Cart", async({productpage}) =>{
    const cartpage = await productpage.addToCart(productData.productsForCart);
    const product = productData.productsForCart
    for(let i=0; i<product.length; i++){
        const cartProducts = await cartpage.verifyCartProduct(product[i].name)
        const data = [product[i].price, product[i].quantity, product[i].totalPrice]
        await expect(cartProducts[0]).toBe(4);
        for(let j=0; j<data.length; j++){
            await expect(cartProducts[j+1]).toEqual(data[j]);
        }
        // await expect(cartProducts[1]).toEqual(data[0]);
        // await expect(cartProducts[2]).toEqual(data[1]);
        // await expect(cartProducts[3]).toEqual(data[2]);
    }
})


test.only("Test Case 12: Add to Cart from product details page with quantitythen delete the products", async({productpage}) =>{
    const cartpage = await productpage.addToCartQuantity(productData.productsForCart2);
    const product = productData.productsForCart2
    for(let i=0; i<product.length; i++){
        const cartProducts = await cartpage.verifyCartProduct(product[i].name)
        const data = [product[i].price, product[i].quantity, product[i].totalPrice]
        await expect(cartProducts[0]).toBe(4);
        for(let j=0; j<data.length; j++){
            await expect(cartProducts[j+1]).toEqual(data[j]);
        }
    }
    for(let x=0; x<product.length; x++){
        await cartpage.deleteProducts(product[x].name);
        await expect(await cartpage.isProductDeleted(product[x].name)).toBe(false);
    }

})


// test("Test Case 13: Delete cart products", async({cartpage}) =>{
//     const product = productData.productsForCart2
//     for(let i=0; i<product; i++){
//         await cartpage.deleteProducts(product[i].name);
//         await expect(cartpage.isProductDeleted(product[i].name)).toBe(false);
//     }
// })