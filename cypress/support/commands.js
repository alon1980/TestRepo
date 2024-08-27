import kaltura, { KalturaClient } from "kaltura-client";


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (sessionId, user) => {
    cy.session(
        sessionId,
        () => {
            cy.visit(`${instances.readOnlyInstance.url}/user/login`)
            cy.get('#Login-username').type(user.userName)
            cy.get('#Login-password').type(user.password)
            cy.get('.kms-ds-login-form-submit-button button').click();
        },
        {
            validate() {
                cy.getCookie("kms_ctamuls").should("not.be.null");
            },
        }
    )
});

export const users = {
    "readOnlyInstance": {
        "noCertificates": {"userName": "lightUser@mailiniator.com", "password": "Kaltura12#"},
        "lotsOfCertificates": {"userName": "heavyUser@mailiniator.com", "password": "Kaltura12#"},
    }

};

export const pages = {
    "login": "/user/login",
    "certificates": "/certificates",
};

export const instances = {
    "readOnlyInstance": {"url": "https://2948-e2e-readonly.nvq2.mediaspace.kaltura.com", "partner": "2948", "secret": "c61851eb615a814215f8bd6abd8fe8d0", "ks": "djJ8Mjk0OHzoTiaZ4UCh9TW4RMNiFzbO96RGMT_ZvkxSZa6aF6M6mTkvDKTTGciTtAA6VUDrj-85UmOzT69SB3AOrJ0NfiZiVyhlE1RR8jfoJWPuBL7x6P3j_-oHsm3m9mjU1OW8p3pmfpHrzSQn2x78Kd46ZYie"},
    "storybook": {"url": "http://localhost:4400/iframe.html?args=&id=features-channel-page--vertical-view&viewMode=story"}
};

export const config = {
    "enableLike": {
        "global": {
            "application": {
                "enableLike": "1"
            }
        },
        "modules": {}
    }
};

Cypress.Commands.add('setKmsConfig', (config, instance) => {
    const url = instance.url + "/eventplatformmanager/index/import-config?ks=" + instance.ks;
    useKmsApi(url, config, "POST");

    //clear cache
    const clearCacheUrl = instance.url + "/eventplatformmanager/cache/clear-cache?ks=" + instance.ks;
    useKmsApi(clearCacheUrl, config, "POST");
});

function useKmsApi(url, config, method="GET") {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    try {
        console.log(config);
        xhr.send(JSON.stringify(config));
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.responseText);
            return xhr.responseText;
        } else {
            throw new Error(`HTTP request failed with status ${xhr.status}: ${xhr.statusText}`);
        }
    } catch (error) {
        throw new Error(`Failed to send HTTP request: ${error.message}`);
    }
}

export const KalturaApiType = {
    mediaAdd: "mediaAdd"
};

function kalturaSessionStart(client, userId, partnerId, secret){
    const type = kaltura.enums.SessionType.USER;
    const expiry = 86400;
    const privileges = null;
    return new Promise((resolve, reject) => {
        kaltura.services.session.start(secret, userId, type, partnerId, expiry, privileges)
            .completion((success, ks) => {
                if(!success){
                    reject(ks.message);
                    return;
                }

                client.setKs(ks);
                console.log("Session started: " + ks);
                resolve();
            })
            .execute(client);
    });
}


Cypress.Commands.add('executeApi', (kalturaApiType, userId, partnerId, secret, data= null) => {
    let config = new kaltura.Configuration();
    config.serviceUrl = "https://api.nvq2.ovp.kaltura.com";
    const client = new kaltura.Client(config);
    kalturaSessionStart(client, userId, partnerId, secret).then(() => Promise.all([
        mediaAdd(client)
    ]))
        .then(() => {
            console.log('All done');
        }, (e) => {
            console.error(e);
        });
});


function mediaAdd(client){
    var entry = new kaltura.objects.MediaEntry({
        mediaType: kaltura.enums.MediaType.VIDEO,
        name: "test1234",
        description: "asdasdentryDescription"
    });

    return new Promise((resolve, reject) => {
        kaltura.services.media.add(entry)
            .completion((success, entry) => {
                if(!success){
                    reject(entry.message);
                    return;
                }

                console.log("Entry created: " + entry.id);
                resolve(entry.id);
            })
            .execute(client);
    });
}

function printAccessibilityViolations(violations) {
    cy.task(
        'table',
        violations.map(({ id, impact, description, nodes }) => ({
            impact,
            description: `${description} (${id})`,
            nodes: nodes.length,
        })),
    );
}

Cypress.Commands.add(
    'checkAccessibility',
    {
        prevSubject: 'optional',
    },
    (subject, { skipFailures = false } = {}) => {
        cy.checkA11y(subject, null, printAccessibilityViolations, skipFailures);
    },
);




