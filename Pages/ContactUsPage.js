import path from 'path';

export class ContactUsPage{
    constructor(page){
        this.page = page;
        this.get_in_touch = this.page.locator("//h2[text()='Get In Touch']");
        this.name = this.page.locator("input[name='name']");
        this.email = this.page.locator("input[name='email']");
        this.subject = this.page.locator("input[name='subject']");
        this.message = this.page.locator("#message");
        this.upload_file = this.page.locator("input[name='upload_file']");
        this.submit_btn = this.page.locator("input[data-qa='submit-button']");
        this.success_message = this.page.locator(".status.alert.alert-success");
    }


    async verifyGetinTouchText(){
       return await this.get_in_touch.textContent();
    }

    // async fillForm(contact_data){
        
    //     await this.name.fill(contact_data.name);
    //     await this.email.fill(contact_data.email);
    //     await this.subject.fill(contact_data.subject);
    //     await this.message.fill(contact_data.message);
    //     const filePath = path.resolve(process.cwd(), contact_data.file);
    //     await this.upload_file.setInputFiles(filePath)
    // //     await this.page.on("dialog", async (dialog) => {
    // //     await dialog.accept();
    // // });
    // await this.page.once("dialog", async (dialog) => {
      
    //    await this.page.waitForTimeout(500);
    //    await dialog.accept();
    //     await this.submit_btn.click();
    //     await this.page.waitForLoadState('domcontentloaded');
    //     return await this.success_message.textContent();
    // }


    async fillForm(contact_data) {
    // 1. Fill out all the text fields
    await this.name.fill(contact_data.name);
    await this.email.fill(contact_data.email);
    await this.subject.fill(contact_data.subject);
    await this.message.fill(contact_data.message);

    // 2. Attach the file
    const filePath = path.resolve(process.cwd(), contact_data.file);
    await this.upload_file.setInputFiles(filePath);

    // ⏳ PAUSE 1: Give the website's HTML forms 1 second to fully 
    // register the attached file state before we attempt to hit submit.
    await this.page.waitForTimeout(1000);

    // 3. Setup the dialog handler
    this.page.once("dialog", async (dialog) => {
        // ⏳ PAUSE 2: Wait half a second before clicking "OK". 
        // This stops Playwright from interrupting the browser's form submission flow.
        await this.page.waitForTimeout(500);
        await dialog.accept();
    });

    // 4. Click submit (with force: true to bypass any invisible ad overlays)
    await this.submit_btn.click({ force: true });
    
    // 5. Wait for the page structure to settle after the dialog closes
    await this.page.waitForLoadState('domcontentloaded');
    return await this.success_message.textContent();
}

}