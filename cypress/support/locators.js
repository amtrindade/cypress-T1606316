const locators = {
    LOGIN: {
        TF_WORKSPACE: '#workspace',
        TF_USER: '#username',
        TF_PASSWORD: '#password',
        BTN_SUBMIT: '#submit_button'
    },
    MENU: {
        LOCATIONS: '[href="/CenterWeb/serviceLocal"]'
    },
    ADD_LOCATION: {
       TF_DESCRIPTION: '#serviceLocal_description',
       TF_CORPORTATE_NAME: '#serviceLocal_corporateName',
       BTN_SAVE: '#formServiceLocal_doSave',
       CHK_ACTIVE: '#serviceLocal_active'

    },
    LIST_LOCATION: {
        BTN_ADD: '#addServiceLocal',
        TF_SEARCH: '#genericFilter',
        BTN_SEARCH: '#serviceLocalList_doSearch',
        LINE_RESULT: '.odd > :nth-child(2)',
        BTN_EDIT: '.edit-record-serviceLocal',
        BODY: '.page-content'

    } 
}

export default locators;
